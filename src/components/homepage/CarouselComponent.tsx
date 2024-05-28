import React from 'react'
import PublisherProfile from '../PublisherProfile'
import CarouselSlider from './CarouselSlider'
import ContactActions from '../ContactActions'
import ShowDescription from '../ShowDescription'

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
    <div>
      <ContactActions getQuote={true} />
    </div>
    <p className='text-xl mt-2 lg:text-base '><strong>{title}</strong></p>
    <ShowDescription description={description} />
  </div>
  <p className='relative text-base opacity-80'>2 hours ago</p>
</div>
}

export default CarouselComponent