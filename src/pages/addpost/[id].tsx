import React, { useEffect, useState } from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'
import { useRouter } from 'next/router'

const AddPost = () => {
    const router = useRouter();
    const {id} = router.query;

    const [companyID, setCompanyID] = useState('');
    const [categoryID, setCategoryID] = useState<string>('')
    const [subCategoryID, setSubCategoryID] = useState<string>('')
    const [postDescription, setPostDescription] = useState<string>('')
    const [categoryData, setCategoryData] = useState<{
        id: string, category_name: string}[]>([])
    const [subCategoryData, setSubCategoryData] = useState<{
        id: string, subcategory_name: string}[]>([])

    useEffect(()=>{
        getCategory();
    }, [])

    useEffect(()=>{
        if(id){
            setCompanyID(id.toString())
        }
    }, [id])

    const createPost = async () => {
        const fd = new FormData();
        const post_files = document.getElementById('post-file') as HTMLInputElement
        if( post_files.files && post_files.files?.length > 0){
            for(let i=0; i<post_files.files.length; i++){
                fd.append(`post_content`, post_files.files[i])
            }
        }
        fd.append('post_description', postDescription)
        fd.append('category_id', categoryID)
        fd.append('subcategory_id', subCategoryID)
        fd.append('company_id', companyID)
        const data = await apiCall('post', 'post', fd, true)
        console.log(data)
    }

    const getCategory = async() => {
        const category = await apiCall('category', 'get')
        setCategoryData(category.data.Items)
    }

    const getSubCategory = async(category_id: string) => {
        setCategoryID(category_id)
        const subcategory = await apiCall(`category/${category_id}/subcategories`, 'get')
        setSubCategoryData(subcategory.data.Items)
    }

    return (
    <>
        <div id="video-post-container" className='py-5'>
        <span className='settings-profile flex'>
          <Link href={'/profile/'+id}>
            <div className='flex items-center'>
                <IoChevronBackCircleOutline className='mt-[1px]'/> 
                <span>Back</span>
            </div>
          </Link>
      </span>
            <div className=' text-center'>
                <label className='font-semibold' htmlFor="">Add post</label>
                <input type="file" multiple placeholder='Choose a file'
                id='post-file'
                className='mt-5 settings-ph'/>    
            </div>
            <div style={{borderBottom: '1px solid #ccc'}}>
                <input className='mt-10 h-10 w-full border-none outline-none'
                onChange={e=>setPostDescription(e.target.value)}
                 type="text" placeholder='Add a description here' />
            </div>
            <div className='mt-10 h-10 w-full border-none outline-none'
            style={{borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between'}}>
            <label className='mr-10' htmlFor="">Choose a category</label>
                <select id="category" name="category"
                onChange={e=>getSubCategory(e.target.value)}>
                    <option value="">--Choose Category--</option>
                    {
                        categoryData.map(item=><>
                            item.category_name && <option key={item.id}
                            value={item.id}>
                                {item.category_name}
                            </option>
                        </>)
                    }
               </select>
            </div>
            {
                categoryID && <>
            <div className='mt-10 h-10 w-full border-none outline-none'
            style={{borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between'}}>
            <label className='mr-10' htmlFor="">Choose a subcategory</label>
                <select id="category" name="category"
                onChange={e=>setSubCategoryID(e.target.value)}>
                    <option value="">--Choose Subcategory--</option>
                    {
                        subCategoryData.map(item=><>
                            item.subcategory_name && <option key={item.id}
                            value={item.id}>
                                {item.subcategory_name}
                            </option>
                        </>)
                    }
               </select>
            </div>
                </>
            }
            <div className='text-center'>
            <button className='w-[50%] save-btn mt-10'
            onClick={createPost}>Create Post</button>
            </div>
        </div>
    </>
  )
}

export default AddPost
