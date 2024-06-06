import React from 'react'
import '../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

const addcompany = () => {
  return (
    <>
        <div className='hidden'>
            <SideNav />
        </div>
        <Head>
            <title>Add Company</title>
        </Head>
        <div id="video-post-container" className="py-5">
            <span className='absolute font-semibold text-base pl-2 opacity-50'>
                <Link href={'/settings'}>
                    <div className='flex items-center border-4'>
                        <IoChevronBackCircleOutline className='mt-[1px]'/> 
                        <span>Back</span>
                    </div>
                </Link>
            </span>
            <div className='text-center'>
                <h4 className='font-semibold'>Add a company</h4>
            </div>
            <div className='p-2'>
                <div className='mt-5 border border-gray-200 p-3'>
                    <p className='text-base font-medium text-center '>Enter your Company details here</p>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Company name</label>
                        <input type="text"
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter a company name'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Company logo</label>
                        <input type="file"
                        className='w-full p-2 rounded-md border border-gray-400'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Company website</label>
                        <input type="text" 
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter a company website'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Company description</label>
                        <textarea name="" id="" cols={30} rows={10}
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter a company description'></textarea>
                    </div>
                    <p className='text-xs opacity-90'> By clicking the Save button a new company will be created and you 
                        can post videos and images </p>
                    <div className='save-button'>
                        <button className='bg-green-500 text-white rounded-md'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default addcompany