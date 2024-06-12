import React, { useEffect, useState } from 'react'
import '@/app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'
import { useRouter } from 'next/router'

const AddSubCategory = () => {
    const router = useRouter();
    const {id} = router.query;

    const [subCategoryForm, setSubCategoryForm] = useState({
        subcategory_name: '',
        subcategory_logo: null,
        subcategory_description: ''
    })
    const [categoryID, setCategoryID] = useState<string>('')

    useEffect(()=>{
        if(id)
            setCategoryID(id.toString())
    },[id])

    const handleSubmit = async()=>{
        const fd = new FormData();
        fd.append('subcategory_name', subCategoryForm.subcategory_name)
        fd.append('subcategory_description', subCategoryForm.subcategory_description)
        fd.append('category_id', categoryID)
        const subcategory_logo = document.getElementById('subcategory-logo') as HTMLInputElement
        if( subcategory_logo.files && subcategory_logo.files?.length > 0)
            fd.append('subcategory_logo', subcategory_logo.files[0])

        const data = await apiCall('subcategory', 'post', fd, true)
        console.log(data)
    }


  return (
    <>
        <div className='settings-pg'>
            <div className='hidden'>
                <SideNav />
            </div>
            <Head>
                <title>Add Sub Category</title>
            </Head>
            <div id="video-post-container" className="py-5">
                <span className='settings-profile'>
                    <Link href={'/settings/subcategory/'+id}>
                        <div className='settings-back'>
                            <IoChevronBackCircleOutline className='mt-[1px]'/> 
                            <span>Back</span>
                        </div>
                    </Link>
                </span>
                <div className='text-center'>
                    <h4 className='font-semibold'>Add a sub category</h4>
                </div>
                <div className='p-2'>
                    <div className='settings-page'>
                        <div className='mt-3'>
                            <label htmlFor="" className=' company-form'>Sub Category name</label>
                            <input type="text"
                            className='settings-ph'
                            placeholder='Enter a sub category name'
                            onChange={(e)=>{
                                setSubCategoryForm({...subCategoryForm, subcategory_name: e.target.value})
                            }}/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className=' company-form'>Sub Category logo</label>
                            <input type="file"
                            id='subcategory-logo'
                            className='settings-ph'/>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className=' company-form'>Sub Category description</label>
                            <textarea name="" id="" cols={30} rows={10}
                            className='settings-ph'
                            placeholder='Enter a sub category description'
                            onChange={(e)=>{
                                setSubCategoryForm({...subCategoryForm, subcategory_description: e.target.value})
                            }}
                            ></textarea>
                        </div>
                        <div className='save-button'>
                            <button className='save-btn'
                            onClick={e=>{window.location.href='/settings/subcategory/add/'+id}}
                           >Save</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>  
    </>
  )
}

export default AddSubCategory
