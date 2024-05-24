import React from 'react'
import '../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'

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
        <div id="video-post-container" className="py-5">
            <span className='absolute font-semibold text-base pl-2 opacity-50'>
                <Link href={'/settings'}>
                    &lt; Back
                </Link>
            </span>
            <div className='text-center'>
                <h4 className='font-semibold'>Sub Category List</h4>
            </div>
            <div className='p-2'>
                <div className='mt-5 border border-gray-200 p-3'>
                    <input type="text" name="" id=""
                    placeholder='Search Sub Category By Name'
                    className='w-full border border-gray-400 rounded' />
                    {
                        subcategoryData.map((data,index)=>(
                            <div className='mt-3'>
                                {data} 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='absolute bottom-1 w-full'>
                <button className='bg-green-500 text-white rounded-md w-full'
                onClick={e=>{window.location.href='/addsubcategory'}}>
                    Add sub category
                </button>
            </div>
        </div>
    </>
  )
}

export default subcategorylist
