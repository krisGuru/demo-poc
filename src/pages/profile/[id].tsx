import SideNav from '@/components/SideNav'
import React, { useEffect, useState } from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import SearchPosts from '@/components/search/SearchPosts'
import { GrCamera, GrGrid } from "react-icons/gr";
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'
import apiCall from '@/utils/apiCall'

const ProfileScreen = () => {
  const router = useRouter();
  const {id} = router.query;

  const [companyData, setCompanyData] = useState<{
    company_name: string,
    company_description: string,
  }>({
    company_name: '',
    company_description: '',
  })
  console.log(companyData.company_name)

  const [companyPostData, setCompanyPostData] = useState<[]>([])

  const getCompanyDetail = async()=>{
    const data = await apiCall(`company/${id}/details`,'GET')
    setCompanyData({
      company_name: data.data.Item.company_name,
      company_description: data.data.Item.company_description,
    })
  }

  const getCompanyPosts = async()=>{
    const data = await apiCall(`company/${id}/posts`,'GET')
    setCompanyPostData(data.data.Items)
    console.log(data, "company_posts")
  }

  function capitalizeFirstLetter(stringInput:string) {
    return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
  }
  
  useEffect(()=>{
    if(id){
      getCompanyDetail();
      getCompanyPosts();
    }
  },[id])

  return (
    <>
    <SideNav/>
    <Head>
        <title>Profile</title>
    </Head>
    <div id="video-post-container" className="py-5">
    <span className='settings-profile flex'>
          <Link href={'/'}>
          <div className='flex items-center'>
          <IoChevronBackCircleOutline className='mt-[1px]'/> 
          <span>Back</span>
          </div>
          </Link>
      </span>
      <div className=' profile-screen'>
          <div className='grid grid-cols-4 text-center items-center'>
          <Image className='profilee-screen'
           src={"https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"} 
           alt='' width={100} height={100} />
          <div><h2 className=' font-bold'>
            {
              companyPostData.length
            }
            </h2>Posts</div>
          <div><h2 className=' font-bold'>
            {
              companyPostData.length
            }
            </h2>Videos</div>          
          <div><h2 className=' font-bold'>
            {
              companyPostData.length
            }
            </h2>Images</div>
          </div>
            <h3 className='font-semibold'>
              {
                capitalizeFirstLetter(companyData.company_name)
              }
            </h3>
            <p className='w-full'>
              {
                companyData.company_description
              }</p>
             <button className='bg-gray-100 w-full p-2 rounded-md'
                onClick={e=>{window.location.href='/addpost/'+id}}>
             Add Post</button>
             {/* <div className='profile-icons'>
             <GrGrid className='w-1/2'/> <GrCamera className='w-1/2'/>
             </div> */}
      </div>   
    <SearchPosts videoList={companyPostData} />
    </div>
    </>
  )
}

export default ProfileScreen
