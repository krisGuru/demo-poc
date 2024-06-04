import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'


const GetQuoteForm = () => {
  return (
    <>
    <div id="video-post-container" className="py-5">
        <span className='absolute font-semibold text-base pl-2 opacity-50'>
            <Link href={'/'}>
                &lt; Back
            </Link>
        </span>
        <div>
            <Image className='rounded-full m-auto w-20 h-20 mt-5' src={"https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"}
            alt='' width={100} height={100} />
            <h3 className='text-center font-bold mt-2'>Aristo Coimbatore</h3>
            <p className='px-5'>Please Share your details below and our product expert will
             attend your inquiry promptly!</p>
        </div>
        <div className='p-2'>
            <div className=' p-3'>
                <div className=''>
                    <label htmlFor="" className='text-sm'>Full name</label>
                    <input type="text"
                    className='w-full p-2 rounded-xl border border-gray-400'
                    placeholder='Enter Your name'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='text-sm'>Mobile Number</label>
                    <input type="text" placeholder='Enter your Mobile Number '
                    className='w-full p-2 rounded-xl border border-gray-400'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded-xl border border-gray-400'
                    placeholder='Enter your E-mail address'/>
                </div>
                <div>
                    <div className='mt-3 '>
                        <label htmlFor="" className='text-sm'>City</label>
                        <input type="text" 
                        className='w-full p-2 rounded-xl border border-gray-400'
                        placeholder='Enter your City'/>
                    </div>
                </div>
                <p className='mt-3 text-xs opacity-90'>By clicking submit, you agree to send your info to the company who agrees to use it according to their privacy policy. The Home Ideas will also use it subject to our Privacy Policy</p>
                <div className='p-3 text-center'>
                    <button className='bg-green-500  text-white rounded-xl'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GetQuoteForm