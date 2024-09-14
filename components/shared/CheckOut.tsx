import { IEvent } from '@/lib/database/models/event.model'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import {loadStripe} from '@stripe/stripe-js'

loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

useEffect( ()=>{
  const query = new URLSearchParams(window.location.search);

  if(query.get('success')){
    console.log('order placed! You will Recive an email confirmation')
  }
  if(query.get('canceled')){
    console.log('Order canceled -- continue to shop around and checkout when youre ready ');
    
  }
})

const CheckOut = ({event,userId}:{event:IEvent,userId:string}) => {
  const onCheckout = async()=>{

  }
  return (
   <>
   <form action={onCheckout} method='post'>
    <Button type='submit' role='link'size='lg' className='button sm:w-fit'>
      {event.isFree ? 'Get Ticket':'Buy Ticket'}
    </Button>

   </form>
   </>
  )
}

export default CheckOut