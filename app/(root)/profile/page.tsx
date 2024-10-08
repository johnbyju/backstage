import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs/server'

import Link from 'next/link'
import React from 'react'

const profile = async ({ searchParams }: SearchParamProps) => {

    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const OrganizedEvents = await getEventsByUser({
        userId, page: 1
    })

    const ordersPage = Number(searchParams?.ordersPage) || 1;
    const eventsPage = Number(searchParams?.eventsPage) || 1;
    const orders = await getOrdersByUser({ userId, page: ordersPage })

    const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

    const organizedEvents = await getEventsByUser( {userId,page:eventsPage})


    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <div className='wrapper flex items-center justify-center sm:justify-between'>
                    <h3 className='h3-bold text-center lg:text-left'>My Tickets</h3>
                    <Button asChild className='button hidden sm:flex'>
                        <Link href='/#events'>
                            Expolre More Events
                        </Link>
                    </Button>
                </div>
            </section>
            <section className='wrapper my-8'>
                <Collection
                    data={orderedEvents}
                    emptyTitle="No Event Ticket purchased yet"
                    emptyStateSubtext='so many events to explore'
                    collectionType='My_Tickets'
                    limit={3}
                    page={ordersPage}
                    totalPages={orders?.totalPages}
                    urlParamName="ordersPage" />
            </section>

            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <div className='wrapper flex items-center justify-center sm:justify-between'>
                    <h3 className='h3-bold text-center lg:text-left'>Events Organized</h3>
                    <Button asChild className='button hidden sm:flex'>
                        <Link href='/events/create'>
                            Create New Event
                        </Link>
                    </Button>
                </div>
            </section>

            <section className='wrapper my-8'>
                <Collection
                    data={OrganizedEvents?.data}
                    emptyTitle="No Event Ticket have been created yet"
                    emptyStateSubtext='go create some now..!'
                    collectionType='Events_Organized'
                    limit={3}
                    page={eventsPage}
                    totalPages={organizedEvents?.totalPages}
                    urlParamName="eventsPage" />
            </section>

        </>
    )
}

export default profile