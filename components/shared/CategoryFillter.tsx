'use client'
import React, { useEffect, useState } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { getAllCategories } from '@/lib/actions/category.actions';
import { ICategory } from '@/lib/database/models/category.model';

const CategoryFillter = () => {
    const [category, setCategory] = useState<ICategory[]>([]);
  const router = useRouter();
  const searchParams =useSearchParams();
 
  useEffect( ()=>{
 
    const getCategories =async()=>{
        const categoryList = await getAllCategories();
        categoryList && setCategory(categoryList as ICategory[])
    }
    getCategories();
  },[])

//   useEffect( ()=>{
//     const delayDebounce = setTimeout( ()=>{
//       let newUrl = '';
//       if(category){
//          newUrl =formUrlQuery({
//           params : searchParams.toString(),
//           key: 'category',
//           value :category
//         })
//       }
//       else{
//          newUrl =removeKeysFromQuery({
//           params : searchParams.toString(),
//           keysToRemove :['query']
//         })
//       }
//       router.push(newUrl,{scroll :false});
//     },300)

//     return ()=>clearTimeout(delayDebounce);
//   },[category,searchParams,router])

    const onSelectCategory = (category :string)=>{

    }
  return (
    <Select onValueChange={(value :string)=>onSelectCategory(value)}>
       <SelectTrigger className='select-filed '>
        <SelectValue placeholder='category'/>
       </SelectTrigger>
       <SelectContent>
        <SelectItem value='All' className='select-item p-regular-14'>All</SelectItem>
        {category.map( (e)=>(
            <SelectItem value={e.name} key={e._id} className='select-item p-regular-14'>{e.name}</SelectItem>
        ))}
       </SelectContent>
    </Select>
  )
}

export default CategoryFillter