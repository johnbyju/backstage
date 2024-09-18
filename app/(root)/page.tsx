import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


export default async function Home({searchParams}:SearchParamProps) {
  const searchText = (searchParams?.query as string) || "";
  const category =(searchParams?.category as string) || "";
  const page =Number(searchParams?.page) || 1;

  const events = await getAllEvents({
    query : searchText,
    category,
    page,
    limit : 6
  })

  // console.log(events);
  
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <p className="p-bold-20" style={{ color: '#20dbd4' }}>ALL-IN-ONE EVENT MANAGEMENT SOFTWARE</p>
            <h1 className="h1-bold">Built For The Events of Today and Tomorrow!</h1>
            <p className="p-regular-20 md:p-regualr-24 ">
              Everything you need to craft impactful event experiences all while staying technologically relevant, now and always.
            </p>
            <Button size='lg' asChild className="button w-full sm:w-fit">
              <Link href='#events'>
                Explore Now
              </Link>
            </Button>
          </div>
          {/* <video className="video" autoPlay muted loop>
            <source src='/assets/vedios/banner-intro.mp4' type="video/mp4" />
          </video> */}
          <Image alt="home-image" height={500} width={500} src='/assets/images/hero.png' className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
        </div>

      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search/>
          categoryFillter
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found..!"
          emptyStateSubtext='Come Back Later..✌'
          collectionType='All_Events'
          limit={6}
          page={1}
          totalPages={2}
        urlParamName={""}/>
      </section>
    </>
  );
}
