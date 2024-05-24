import React from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TrendingCarousel = () => {
    const trending_tags = [
        'Traditional',
        'Modern',
        'Coastal',
        'Doors',
        'Interior Designs',
        'Kitchen',
        'Bathroom',
        'Traditional',
        'Modern',
        'Coastal',
        'Doors',
        'Interior Designs',
        'Kitchen',
        'Bathroom',
        'Traditional',
        'Modern',
        'Coastal',
        'Doors',
        'Interior Designs',
        'Kitchen',
        'Bathroom',
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
