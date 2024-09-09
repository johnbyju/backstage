import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'

type cardPrpos ={
    event :IEvent,
    hasOrderLink? : boolean,
    hidePrice? :boolean
}
const Card = ({event,hidePrice,hasOrderLink}:cardPrpos) => {
  return (
    <div className='group relative '></div>
  )
}

export default Card