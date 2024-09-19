'use client'
        
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { getAllCategories } from '@/lib/actions/category.actions';
import { ICategory } from '@/lib/database/models/category.model';

const CategoryFillter = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {

        const getCategories = async () => {
            const categoryList = await getAllCategories();
            categoryList && setCategories(categoryList as ICategory[])
        }
        getCategories();
    }, [])

    const onSelectCategory = (category: string) => {
        let newUrl = '';
        if (category && category !== 'All') {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: category
            })
        }
        else {
            newUrl = removeKeysFromQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            })
        }
        router.push(newUrl, { scroll: false });
    }

    return (
        <Select onValueChange={(value: string) => onSelectCategory(value)}>
            <SelectTrigger className='select-filed '>
                <SelectValue placeholder='category' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='All' className='select-item p-regular-14'>All</SelectItem>
                {categories.map((e) => (
                    <SelectItem value={e.name} key={e._id} className='select-item p-regular-14'>{e.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CategoryFillter