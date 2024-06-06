import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from "react-icons/io5";



const GetQuoteForm = () => {
  return (
    <>
    <div id="video-post-container" className="py-5 w-full">
        <span className='get-quote-back'>
            <Link href={'/'}>
                <div className='flex items-center'>
                    <IoChevronBackCircleOutline className='mt-[1px]'/> 
                    <span>Back</span>
                </div>
            </Link>
        </span>
        <Head>
            <title> Quotation </title>
        </Head>
        <div>
            <Image className='get-quote-img' src={"https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"}
            alt='' width={100} height={100} />
            <h3 className='text-center font-bold mt-2'>Aristo Coimbatore</h3>
            <p className='px-5'>Please Share your details below and our product expert will
             attend your inquiry promptly!</p>
        </div>
        <div className='p-2'>
            <div className='p-3'>
                <div className=''>
                    <label htmlFor="" className='get-quote-title'>Full name</label>
                    <input type="text" placeholder='Enter Your name'
                    className='gq-form'
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='get-quote-title'>Mobile Number</label>
                    <input type="text" placeholder='Enter your Mobile Number '
                    className='gq-form'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='get-quote-title'>Email</label>
                    <input type="email" 
                    className='gq-form'
                    placeholder='Enter your E-mail address'/>
                </div>
                <div>
                    <div className='mt-3 '>
                        <label htmlFor="" className='get-quote-title'>City</label>
                        <input type="text" 
                        className='gq-form'
                        placeholder='Enter your City'/>
                    </div>
                </div>
                <p className='mt-3 text-xs opacity-90'>By clicking submit, you agree to send your
                 info to the company who agrees to use it according to their privacy policy.
                  The Home Ideas will also use it subject to our Privacy Policy</p>
                <div className='save-button'>
                    <button className='bg-green-500  text-white rounded-xl'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GetQuoteForm