import Image from 'next/image'
import React from 'react'

const PublisherProfile: React.FC<{
  title: string
}> = ({title}) => {
  return (
    <>
    <div className='view-more'
    onClick={e=>{window.location.href='/profilescreen'}}>
      <Image src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
      alt="" width={100} height={100} className='rounded w-8'/>
      <strong className='view-more-title'>{title}</strong>
      <button  className='view-more-btn'>View More</button>
    </div>
    </>
  )
}

export default PublisherProfile;
  