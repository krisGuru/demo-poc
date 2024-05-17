import React from 'react'

const FollowButton = (
  data: {
    src: string;
    description: string;
    queue_order: { src: string; description: string }[];
    title: string
}
) => {
  return (
    <>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" className='rounded w-8'/>
        {/* <strong className='text-sm'>Builder Profile</strong> */}
        <strong className='text-base'>{data.title}</strong>
        <button className='text-xs p-0 px-2 rounded'>Follow</button>
    </>
  )
}

export default FollowButton


