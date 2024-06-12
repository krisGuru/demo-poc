import React, { use, useEffect, useState } from 'react'
import '../../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'
import { useRouter } from 'next/router'

const SubCategoryList = () => {
    const router = useRouter();
    const id = router.query.id;

    const [subCategoryData, setSubCategoryData] = useState<{subcategory_name:string}[]>([])

    useEffect(()=>{
        if(id)
            getSubCategory();
    },[id])

    const getSubCategory = async () => {
        const subcategory = await apiCall(`category/${id}/subcategories`, 'GET');
        setSubCategoryData(subcategory.data.Items)
    }

    return (
    <>
    <div className='category-pg'>
        <div className='hidden'>
            <SideNav />
        </div>
        <Head>
            <title>Sub Category List</title>
        </Head>
        <div id="video-post-container" className="py-5">
            <span className='settings-profile'>
                <Link href={'/settings/category'}>
                    <div className='settings-back'>
                        <IoChevronBackCircleOutline className='mt-[1px]'/> 
                        <span>Back</span>
                    </div>
                </Link>
            </span>
            <div className='text-center'>
                <h4 className='font-semibold'>Sub Category List</h4>
            </div>
            <div className='p-2'>
                <div className='settings-page'>
                    <input type="text" name="" id=""
                    placeholder='  ⌕ Search Sub Category By Name'
                    className='category-ph' />
                    {
                        subCategoryData.map((data,index)=>(
                            <div className='mt-3' key={index}>
                                {data.subcategory_name} 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='category-btn'>
                <button className='save-btn w-[360px]'
                onClick={e=>{window.location.href='/settings/subcategory/add/'+id}}>
                    Add sub category
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubCategoryList
