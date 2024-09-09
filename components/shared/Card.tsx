import { IEvent } from '@/lib/database/models/event.model'
import Link from 'next/link'
import React from 'react'

type cardPrpos = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean
}
const Card = ({ event, hidePrice, hasOrderLink }: cardPrpos) => {
    console.log(event.imageUrl);
    
    return (
        <div className='group relative '>
            <Link
                href={`/events/${event._id}`}
                style={{ backgroundImage: `url(${event.imageUrl})` }} />
            {/* IS EVENT CREATOR */}

            <Link
                href={`/events/${event._id}`} className='flex min-h-[230px]  flex-col gap-3 p-5 md:gap-4'>
                {!hidePrice && <div className='flex gap-2'>
                    <span className='p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60'>
                        {event.isFree ? ("FREE") : (`${event.price}`)}
                    </span>
                    <p className='p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500'>{event.category.name}</p>
                </div>}
            </Link>


        </div>
    )
}

export default Card