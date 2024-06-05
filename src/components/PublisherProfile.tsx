import Image from 'next/image'
import React from 'react'

const PublisherProfile: React.FC<{
  title: string
}> = ({title}) => {
  return (
    <>
    <div className='flex items-center gap-3'
    onClick={e=>{window.location.href='/profilescreen'}}>
      <Image src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
      alt="" width={100} height={100} className='rounded w-8'/>
      <strong className='text-base truncate'>{title}</strong>
      <button  className='text-xs p-0 px-2 rounded w-24 shadow-md bg-gray-800 bg-opacity-10 '>View More</button>
    </div>
    </>
  )
}

export default PublisherProfile;
  