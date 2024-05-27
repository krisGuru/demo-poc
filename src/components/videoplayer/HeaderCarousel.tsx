import React from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeaderCarousel = () => {
    const images = [
        { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: 'Interior Design' },
        { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'CNC Work' },
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
  return (
    <Swiper className="image-carousel" modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
        {
            images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='images-card'>
                      <div>
                          <img key={index} src={image.src} alt={image.alt} />
                      </div>
                      <div>
                          <span>{image.title}</span>
                      </div>
                  </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};

export default HeaderCarousel;
