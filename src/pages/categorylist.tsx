import React from 'react'
import '../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'

const categorylist = () => {
    const categoryData=[
        'Doors',
        'Curtains',
        'Furniture',
        'Fixtures',
        'Lighting',
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
                <h4 className='font-semibold'>Category List</h4>
            </div>
            <div className='p-2'>
                <div className='mt-5 border border-gray-200 p-3'>
                    <input type="text" name="" id=""
                    placeholder='Search Category By Name'
                    className='w-full border border-gray-400 rounded' />
                    {
                        categoryData.map((data,index)=>(
                            <div className='mt-3' key={index}>
                                <Link href={'/subcategorylist'}>
                                    <span className='float-right'>&gt;</span>
                                    {data}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='absolute bottom-1 w-full'>
                <button className='bg-green-500 text-white rounded-md w-full'
                onClick={e=>{window.location.href='/addcategory'}}>
                    Add category
                </button>
            </div>
        </div>
    </>
  )
}

export default categorylist
