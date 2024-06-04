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
            <Image src={slide.image} className="w-full" alt={slide.alt} width={100} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="absolute text-xs top-4 right-4 bg-gray-800 bg-opacity-75 text-white z-[1001] px-1 py-1 rounded-full">
          <span className="font-bold">{currentSlide + 1}</span> / {slides.length}
        </div>
        <div>
            <div className="absolute top-1/2 left-1 transform z-[1001] -translate-y-1/2">
              <button
                className="bg-gray-800 bg-opacity-50 text-white outline-none border-none px-2 py-1 rounded-full"
                onClick={handlePrevSlide}>
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 right-1 transform z-[1001] -translate-y-1/2">
              <button
                className="bg-gray-800 bg-opacity-50 text-white outline-none border-none px-2 py-1 rounded-full"
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