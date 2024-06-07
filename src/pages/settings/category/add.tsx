import React from 'react'
import '../../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

const addcategory = () => {
  return (
    <>
        <div className='settings-pg'>
            <div className='hidden'>
                <SideNav />
            </div>
            <Head>
                <title>Add Category</title>
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
                    <h4 className='font-semibold'>Add Category</h4>
                </div>
                <div className='p-2'>
                    <div className='settings-page'>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-sm'>Category name</label>
                            <input type="text"
                            className='settings-ph'
                            placeholder='Enter a category name'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-sm'>Category logo</label>
                            <input type="file"
                            className='settings-ph'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-sm'>Category description</label>
                            <textarea name="" id="" cols={30} rows={10}
                            className='settings-ph'
                            placeholder='Enter a category description'></textarea>
                        </div>
                        <div className='save-button'>
                            <button className='save-btn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default addcategory