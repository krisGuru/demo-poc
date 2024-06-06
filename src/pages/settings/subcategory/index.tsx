import React from 'react'
import '../../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

const subcategorylist = () => {
    const subcategoryData = [
        'Steel Door',
        'Glass Door',
        'Classic Wood Door',
        'Antic style Wooden Door',
        'Plywood Door',
        'Slider Door',
        'Autolock Door',
        'Sensor Door'
    ]
  return (
    <>
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
                    placeholder='Search Sub Category By Name'
                    className='category-ph' />
                    {
                        subcategoryData.map((data,index)=>(
                            <div className='mt-3' key={index}>
                                {data} 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='category-btn'>
                <button className='save-btn w-96'
                onClick={e=>{window.location.href='/settings/subcategory/add'}}>
                    Add sub category
                </button>
            </div>
        </div>
    </>
  )
}

export default subcategorylist
