import { getEventById } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import React from 'react'

const EventDetails=async({params:{id}}:SearchParamProps)=>{
    
    const event = await getEventById(id);
    // console.log(event);
    
    return (
    <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
            <Image src={event.imageUrl}
            alt='Event-Image'
            height={1000}
            width={1000}/>

        </div>

    </section>
  )
}

export default EventDetails