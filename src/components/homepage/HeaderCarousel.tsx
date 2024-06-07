import React, { useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const HeaderCarousel = () => {
  const images = [
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Interior Design' },
    { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: 'Ceiling works' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: 'Floor works' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Partition works' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'Staircase works' },
    { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: 'Wood works' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: 'Wall works' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Stickers work' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'Painting work' },
    { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: 'Ceiling Properties' },
    { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: 'Table Properties' },
]

const subImages = [
  { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Glass Door' },
  { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'Wooden Door' },
  { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: 'Plastic Door' },
  { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: 'Net Door' },
  { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Fiber Door' },
  { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'sensor doors' },
]
const [showSubCategory, setShowSubCategory] = useState(false);
const [categorySlideCount, setCategorySlideCount] = useState(3);
const subCarouselRef = useRef<HTMLDivElement>(null);

const handleClick = (index: number) => {
  setShowSubCategory(true);
  let images = document.getElementsByClassName('category-images');
  for (let i = 0; i < images.length; i++) {
    (images[i] as HTMLElement).classList.add('mini');
  }
  setCategorySlideCount(6);
  document.body.classList.add('blur-background');
  setTimeout(() => {
    if (subCarouselRef.current) {
      subCarouselRef.current.classList.add('show');
    }
  }, 100);
};

const revertBack = () => {
  if (subCarouselRef.current) {
    subCarouselRef.current.classList.remove('show');
  }
  setTimeout(() => {
    setShowSubCategory(false);
    let images = document.getElementsByClassName('category-images');
    for (let i = 0; i < images.length; i++) {
      (images[i] as HTMLElement).classList.remove('mini');
    }
    setCategorySlideCount(3);
    document.body.classList.remove('blur-background');
  }, 300);
};

return (
  <div className="carousel-container py-7">
    {showSubCategory && (
      <div className="sub-carousel-overlay" ref={subCarouselRef}>
        <Swiper
          className="sub-carousel"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {subImages.map((image, index) => (
            <SwiperSlide key={index} onClick={revertBack}>
              <div className="images-card">
                <div>
                  <Image
                    className="header-mini-img"
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <span className="header-title">{image.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}

    <Swiper
      className={`image-carousel ${showSubCategory ? 'mini' : ''}`}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={categorySlideCount}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} onClick={() => handleClick(index)}>
          <div className="images-card category-images">
            <div className="header-carousal">
              <Image
                className="header-img"
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
              />
            </div>
            <div className="text-guide">
              <span className="text-xs">{image.title}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default HeaderCarousel;
