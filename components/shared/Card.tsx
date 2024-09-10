import { IEvent } from '@/lib/database/models/event.model'
import Link from 'next/link'
import React from 'react'

type cardPrpos = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean
}
const Card = ({ event, hidePrice, hasOrderLink }: cardPrpos) => {
    // console.log(event.imageUrl);

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link
                href={`/events/${event._id}`}
                style={{ backgroundImage: `url(${event.imageUrl})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />

            {/* IS EVENT CREATOR */}

            <Link
                href={`/events/${event._id}`}>
                {!hidePrice && <div className='flex gap-2'>
                    <span className='p-semibold-14  w-min rounded-full bg-green-100 px-4 py-1 text-green-60'>
                        {event.isFree ? "FREE" : `${event.price}`}
                    </span>
                    <p className='p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1'>
                        {event.category.name}
                    </p>
                </div>}
            </Link>


        </div>
    )
}

export default Card