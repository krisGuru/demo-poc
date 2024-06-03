import React from 'react'
import '../app/globals.css'
import SideNav from '@/components/SideNav'

const addcategory = () => {
  return (
    <>
        <div className='hidden'>
            <SideNav />
        </div>
        <div id="video-post-container" className="py-5">
            <span className='absolute font-semibold text-base pl-2 opacity-50'>&lt; Back</span>
            <div className='text-center'>
                <h4 className='font-semibold'>Add Category</h4>
            </div>
            <div className='p-2'>
                <div className='mt-5 border border-gray-200 p-3'>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Category name</label>
                        <input type="text"
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter a category name'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Category logo</label>
                        <input type="file"
                        className='w-full p-2 rounded-md border border-gray-400'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="" className='text-sm'>Category description</label>
                        <textarea name="" id="" cols={30} rows={10}
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter a category description'></textarea>
                    </div>
                    <div className='p-3 text-center'>
                        <button className='bg-green-500 text-white rounded-md'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default addcategory