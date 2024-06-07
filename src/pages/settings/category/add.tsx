import React, { useState } from 'react'
import '../../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'

const addcategory = () => {
    const [categoryForm, setCategoryForm]= useState({
        category_name: '',
        category_logo: null,
        category_description: ''
    })

    const handleSubmit = async()=>{
        const fd = new FormData();
        fd.append('category_name', categoryForm.category_name)
        fd.append('category_description', categoryForm.category_description)
        const category_logo = document.getElementById('category-logo') as HTMLInputElement
        if( category_logo.files && category_logo.files?.length > 0)
            fd.append('category_logo', category_logo.files[0])

        const data = await apiCall('category', 'post', fd, true)
        console.log(data)
    }
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
                        <div className='mt-3 '>
                            <label htmlFor="" className='text-sm company-form'>Category name</label>
                            <input type="text"
                            className='settings-ph'
                            placeholder='Enter a category name'
                            onChange={(e)=>{
                                setCategoryForm({...categoryForm, category_name: e.target.value})
                            }}
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-sm company-form'>Category logo</label>
                            <input type="file"
                            id='category-logo'
                            className='settings-ph'
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-sm company-form'>Category description</label>
                            <textarea name="" id="" cols={30} rows={10}
                            className='settings-ph'
                            placeholder='Enter a category description'
                            onChange={(e)=>{
                                setCategoryForm({...categoryForm, category_description: e.target.value})
                            }}
                            ></textarea>
                        </div>
                        <div className='save-button'>
                            <button className='save-btn'
                            onClick={handleSubmit}
                             type='button'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default addcategory