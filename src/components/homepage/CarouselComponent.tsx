import React from 'react'
import PublisherProfile from '../PublisherProfile'
import CarouselSlider from './CarouselSlider'
import ContactActions from '../ContactActions'
import ShowDescription from '../ShowDescription'
import GetQuote from '../GetQuote'

const CarouselComponent: React.FC<{
    title: string,
    description: string,
    company_id: string,
    queue_images: { id: number; image: string; alt: string }[]
}> = ({title, description, company_id, queue_images}) => {
  return <div className='mt-5'>
  <div className='carousal-header'>
    <PublisherProfile title={title}
    company_id={company_id} />
  </div>
  <div>
  
    <CarouselSlider slides={queue_images}/>
    <GetQuote />
    <div className='p-[10px]'>
    <ContactActions getQuote={true} />
    <p className='carousal-title'><strong>{title}</strong></p>
    <ShowDescription description={description} />
    <p className='post-time'>2 hours ago</p>
    </div>
  </div>
</div>
}

export default CarouselComponent