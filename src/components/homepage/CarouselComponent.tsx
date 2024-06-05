import React from 'react'
import PublisherProfile from '../PublisherProfile'
import CarouselSlider from './CarouselSlider'
import ContactActions from '../ContactActions'
import ShowDescription from '../ShowDescription'
import GetQuote from '../GetQuote'

const CarouselComponent: React.FC<{
    title: string,
    description: string,
    queue_images: { id: number; image: string; alt: string }[]
}> = ({title, description, queue_images}) => {
  return <div className='mt-5'>
  <div className='flex gap-2 mt-5 items-center'>
    <PublisherProfile title='Home'/>
  </div>
  <div>
  
    <CarouselSlider slides={queue_images}/>
    <GetQuote />
    <div className='p-[10px]'>
    <ContactActions getQuote={true} />
    <p className='mt-2 text-base '><strong>{title}</strong></p>
    <ShowDescription description={description} />
    <p className='relative text-xs mt-1 opacity-80'>2 hours ago</p>
    </div>
  </div>
</div>
}

export default CarouselComponent