'use client'
import { IEvent } from '@/lib/database/models/event.model'
import { SignedOut, SignIn } from '@clerk/clerk-react'
import { SignedIn, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import CheckOut from './CheckOut'

const CheckOutButton = ({event}:{event:IEvent}) => {
    const {user} = useUser()
    const userId =user?.publicMetadata.userId as string ;
    const eventFinished = new Date(event.endDateTime) < new Date();


  return (
    <div className='flex items-center gap-3'>
        {eventFinished ?(
            <p className='p-2 text-red-400'>Sorry, the event was finished</p>
        ):(
            <>
            <SignedOut>
                <Button asChild className='button rounded-full' size='sm'>
                    <Link href='/sign-in'>
                      Get Tickets
                    </Link>
                </Button>
            </SignedOut>

            <SignedIn>
                <CheckOut event={event} userId={userId}/>
            </SignedIn>

            </>
        )}
    </div>
  )
}

export default CheckOutButton