import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CarouselSlider: React.FC<{
  slides: { id: number; image: string; alt: string }[];
}> = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative">
      <div className="carousel">
        <div className="carousel-inner relative overflow-hidden w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item float-left w-full ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <img src={slide.image} className="w-full" alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-black-100 text-white p-1 rounded-r"
        onClick={prevSlide}
      >
        <FaAngleLeft />
      </button>
      <button
        className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-black-100 text-white p-1 rounded-l"
        onClick={nextSlide}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default CarouselSlider;