import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"
import NavItems from "./NavItems"


const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image alt='Menu' src='/assets/icons/menu.svg' width={24} height={24} className="cursor-pointer"/>
        </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image
              alt="Logo"
              src='/assets/images/favicon.ico'
              width={50}
              height={10}
            />
            <Separator className="border border-gray-50" />
            <NavItems/>
          </SheetContent>
      </Sheet>


    </nav>
  )
}

export default MobileNav