import React from 'react'
import ContactActions from '../ContactActions'
import PublisherProfile from '../PublisherProfile'
import ShowDescription from '../ShowDescription'
import GetQuote from '../GetQuote'
import Image from 'next/image'

const ImagePost: React.FC<{
    title: string,
    description: string,
    src: string,
    company_id: string
}> = ({title, description, src, company_id}) => {
    return <div className='mt-5 '>
        <div className='mobile-profile'>
            <PublisherProfile title={title}
            company_id={company_id} />
        </div>
        <Image src={src} alt="" className='full-hw' width={100} height={100}/>
        <GetQuote />
        <div className='p-[10px]'>
            <ContactActions  getQuote={true}/>
            <p className='carousal-title'><strong>{title}</strong></p>
            <ShowDescription description={description} />
            <p className='post-time'>2 hours ago</p>
        </div>
    </div>
}

export default ImagePost