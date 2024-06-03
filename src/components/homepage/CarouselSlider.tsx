import React from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const CarouselSlider: React.FC<{
  slides: { id: number; image: string; alt: string }[];
}> = ({slides}) => {

  return (
    <div className="relative">
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Image src={slide.image} className="w-full" alt={slide.alt} width={100} height={100} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default CarouselSlider;