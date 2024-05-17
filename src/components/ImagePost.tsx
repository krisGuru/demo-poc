import React from 'react'
import ContactActions from './ContactActions'
import PublisherProfile from './PublisherProfile'
import ShowDescription from './ShowDescription'

const ImagePost: React.FC<{
    title: string,
    description: string,
    src: string
}> = ({title, description, src}) => {
    return <div className='mt-5'>
        <div className='flex gap-2 items-center'>
            <PublisherProfile title={title} />
        </div>
        <img src={src} alt="" className='w-full h-full'/>
        <div>
        <ContactActions getQuote={true} />
        <p className='text-xl mt-2 lg:text-base '><strong>{title}</strong></p>
        <ShowDescription description={description} />
        <p className='relative  text-base opacity-80'>2 hours ago</p>
        </div>
    </div>
}

export default ImagePost