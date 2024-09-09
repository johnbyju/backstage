import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'

type collectionProps ={
    data :IEvent[],
    emptyTitle:string,
    emptyStateSubtext:string,
    page :number | string,
    limit:number,
    totalPages ?:number,
    urlParamName :string,
    collectionType?:"Events_Organized" | "My_Tickets" |"All_Events" ,
}

const Collection = ({data,emptyTitle,emptyStateSubtext,page,totalPages=0,collectionType,urlParamName,}:collectionProps) => {
  return (
    <>
    {data.length>0?(
      <div className='flex flex-center wrapper'>
        <h4>{data[0].title}</h4>
      </div>
    ):(
      <div>
          <h3>{emptyTitle}</h3>
          <p>{emptyStateSubtext}</p>
      </div>
    )}
    </>
  )
}

export default Collection