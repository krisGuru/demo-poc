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
    <div className="settings-menu p-5">
    <div id="video-post-container" className="py-5 ">
        <div className='settings-pg'
        style={{borderBottom: '1px solid #ccc'}}>
            <h6 className='settings-title'>
                <Link href="/settings/addcompany">
                    <span className='float-right'>&gt;</span>
                    Add a company
                </Link>
            </h6>
        </div>
        <div className='settings-pg mt-2'
        style={{borderBottom: '1px solid #ccc'}}>
            <h6 className='settings-title'>
                <Link href="/settings/category">
                    <span className='float-right'>&gt;</span>
                    Category Manager
                </Link>
            </h6>
        </div>
        <div className='settings-pg mt-10'>
            <h6 className='settings-title'>   
                Logout
            </h6>
            <span className=''><RiLogoutCircleLine /></span>
        </div>
    </div>
    </div>
    </>
  )
}

export default index