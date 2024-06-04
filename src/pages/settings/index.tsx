import SideNav from '@/components/SideNav'
import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import './../../app/globals.css';
import Head from 'next/head'
import Link from 'next/link';

const index = () => {
  return (
    <>
    <SideNav/>
    <Head>
         <title>Settings</title>
    </Head>
    <div id="video-post-container" className="py-5">
        <div className='flex items-center gap-5 p-3'
        style={{borderBottom: '1px solid #ccc'}}>
            <h6 className='text-base font-semibold w-full'>
                <Link href="/settings/addcompany">
                    <span className='float-right'>&gt;</span>
                    Add a company
                </Link>
            </h6>
        </div>
        <div className='flex items-center gap-5 p-3 mt-2'
        style={{borderBottom: '1px solid #ccc'}}>
            <h6 className='text-base font-semibold w-full'>
                <Link href="/settings/category">
                    <span className='float-right'>&gt;</span>
                    Category Manager
                </Link>
            </h6>
        </div>
        <div className='flex items-center gap-5 p-3 mt-10'>
            <h6 className='text-base font-semibold w-full'>
                <span className='float-right'><RiLogoutCircleLine /></span>
                Logout
            </h6>
        </div>
    </div>
    </>
  )
}

export default index