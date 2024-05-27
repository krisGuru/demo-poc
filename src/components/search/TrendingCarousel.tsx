import React from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdTrendingUp } from 'react-icons/md';

const TrendingCarousel = () => {
    const trending_tags = [
        'Traditional',
        'Modern',
        'Coastal',
        'Doors',
        'Interior Designs',
        'Kitchen'
    ]
  return (
    <Swiper className="image-carousel" modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
        {
            trending_tags.map((trend, index) => (
                <SwiperSlide key={index}>
                  <div className='flex gap-2'>
                    <MdTrendingUp className='text-lg' />
                    <span className='text-sm truncate'>{trend}</span>
                  </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};

export default TrendingCarousel;
