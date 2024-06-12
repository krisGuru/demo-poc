import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'

const CategoryList = () => {
    const [categoryData, setCategoryData] = useState<{id: string, category_name:string}[]>([])

    useEffect(()=>{
        getCategory()
    },[])

    const getCategory = async() => {
        const category = await apiCall('category', 'GET')
        setCategoryData(category.data.Items)
    }

    return (
    <>
    <div className='category-pg'>
        <div className='hidden'>
            <SideNav />
        </div>
        <Head>
            <title>Category List</title>
        </Head>
        <div id="video-post-container" className="py-5">
            <span className='settings-profile'>
                <Link href={'/settings'}>
                    <div className='settings-back'>
                        <IoChevronBackCircleOutline className='mt-[1px]'/> 
                        <span>Back</span>
                    </div>
                </Link>
            </span>
            <div className='text-center'>
                <h4 className='font-semibold'>Category List</h4>
            </div>
            <div className='p-2'>
                <div className=' settings-page rounded-xl'>
                    <input type="text" name="" id=""
                    placeholder='  ⌕ Search Category By Name'
                    className='category-ph'/>
                    {
                        categoryData.map((data, index)=>(
                            data.category_name && <div className='mt-3' key={index}>
                                <Link href={`/settings/subcategory/${data.id}`}>
                                    <span className='float-right'>&gt;</span>
                                    { data.category_name }
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='category-btn'>
                <button className='save-btn w-96'
                onClick={e=>{window.location.href='/settings/category/add'}}>
                    Add category
                </button>
            </div>
        </div>
        </div>
    </>
  )
}

export default CategoryList
