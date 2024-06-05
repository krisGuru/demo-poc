import React from 'react'
import ContactActions from '../ContactActions'
import PublisherProfile from '../PublisherProfile'
import ShowDescription from '../ShowDescription'
import GetQuote from '../GetQuote'
import Image from 'next/image'

const ImagePost: React.FC<{
    title: string,
    description: string,
    src: string
}> = ({title, description, src}) => {
    return <div className='mt-5 '>
        <div className='flex gap-2 items-center'>
            <PublisherProfile title={title} />
        </div>
        <Image src={src} alt="" className='w-full h-full' width={100} height={100}/>
        <GetQuote />
        <div className='p-[10px]'>
            <ContactActions  getQuote={true}/>
            <p className='mt-2 text-base '><strong>{title}</strong></p>
            <ShowDescription description={description} />
            <p className='relative  text-xs mt-1 opacity-80'>2 hours ago</p>
        </div>
    </div>
}

export default ImagePost