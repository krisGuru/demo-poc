import SideNav from '@/components/SideNav'
import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import SearchPosts from '@/components/search/SearchPosts'
import { GrCamera, GrGrid } from "react-icons/gr";
import Head from 'next/head'

const ProfileScreen = () => {
  return (
    <>
    <SideNav/>
    <Head>
        <title>Profile</title>
    </Head>
    <div id="video-post-container" className="py-5">
    <span className='absolute font-semibold text-base pl-2 opacity-50'>
          <Link href={'/'}>
              &lt; Back
          </Link>
      </span>
      <div className=' mt-10 border-b-2 border-solid border-gray-400 pb-4'>
          <div className='grid grid-cols-4 text-center items-center'>
          <Image className='w-20 h-20 rounded-full' src={"https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"} alt='' width={100} height={100} />
          <div><h2 className=' font-bold'>50</h2>Posts</div>
          <div><h2 className=' font-bold'>20</h2>Videos</div>          
          <div><h2 className=' font-bold'>30</h2>Images</div>
          </div>
            <h3 className='font-semibold'>Aristo Coimbatore</h3>
            <p className='w-full'>The art of managing sound within the home cinema space,
             for an enthralling sound cinema watching experience</p>
             <div className='flex items-center mt-5'>
             <GrGrid className='w-1/2'/> <GrCamera className='w-1/2'/>
             </div>
      </div>   
    <SearchPosts/>
    </div>
    </>
  )
}

export default ProfileScreen