import React from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TrendingCarousel = () => {
    const trending_tags = [
        'Virat Kohli',
        'Rohit Sharma',
        'Sachin Tendulkar',
        'MS Dhoni',
        'KL Rahul',
        'Rishabh Pant',
        'Suresh Raina',
        'Shikhar Dhawan',
        'Virat Kohli',
        'Rohit Sharma',
        'Sachin Tendulkar',
        'MS Dhoni',
        'KL Rahul',
        'Rishabh Pant',
        'Suresh Raina',
        'Shikhar Dhawan',
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
                  <div className='trending_tags-card py-4'>
                    <span>{trend}</span>
                  </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};

export default TrendingCarousel;
