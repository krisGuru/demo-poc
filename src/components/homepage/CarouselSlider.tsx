import React, { useState } from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const CarouselSlider: React.FC<{
  slides: { id: number; image: string; alt: string }[];
}> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onSwiper={setSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} className='w-full' />
            {/* <Image src={slide.image} className="w-full" alt={slide.alt} width={100} height={100} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="post-count-slider">
          <span className="font-xs"> {currentSlide + 1} </span> / <span>{slides.length}</span>
        </div>
        <div>
            <div className="slider-arrow-left">
              <button
                className="slider-btn"
                onClick={handlePrevSlide}>
                &lt;
              </button>
            </div>
            <div className="slider-arrow-right">
              <button
                className="slider-btn"
                onClick={handleNextSlide}>
                &gt;
              </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;