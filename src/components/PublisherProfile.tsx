import React from 'react'

const PublisherProfile: React.FC<{
  title: string
}> = ({title}) => {
  return (
    <>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" className='rounded w-8'/>
        {/* <strong className='text-sm'>Builder Profile</strong> */}
        <strong className='text-base'>{title}</strong>
        <button className='text-xs p-0 px-2 rounded'>View More</button>
    </>
  )
}

export default PublisherProfile;
