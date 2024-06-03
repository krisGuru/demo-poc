import React from 'react'
import '../app/globals.css'
import Link from 'next/link'


const getquoteform = () => {
  return (
    <>
    <div id="video-post-container" className="py-5">
        <span className='absolute font-semibold text-base pl-2 opacity-50'>
            <Link href={'/'}>
                &lt; Back
            </Link>
        </span>
        <div className='text-center mt-10'>
            <h3 className='font-semibold'>Quotation Form</h3>
        </div>
        <div className='p-2'>
            <div className='mt-5 border border-gray-200 p-3'>
                <div className='mt-3'>
                    <label htmlFor="" className='text-sm'>Name</label>
                    <input type="text"
                    className='w-full p-2 rounded-md border border-gray-400'
                    placeholder='Enter Your name'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='text-sm'>Mobile Number</label>
                    <input type="text" placeholder='Enter your Mobile Number '
                    className='w-full p-2 rounded-md border border-gray-400'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded-md border border-gray-400'
                    placeholder='Enter your E-mail address'/>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <div className='mt-3 '>
                        <label htmlFor="" className='text-sm'>Material Name</label>
                        <input type="text" 
                        className='w-full p-2 rounded-md border border-gray-400'
                        placeholder='Enter Material here'/>
                    </div>
                    <div className='mt-3 ml-10'>
                        <label htmlFor="" className='text-sm mr-2'>Quantity:</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div className='p-3 text-center'>
                    <button className='bg-green-500 text-white rounded-md'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default getquoteform