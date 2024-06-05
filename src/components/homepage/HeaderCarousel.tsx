import React, {  useState } from 'react';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

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
      { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: 'Auto lock doors' },
    ]

    const [showSubCategory, setShowSubCategory] = useState(false)
    const [categorySlideCount, setCategorySlideCount] = useState(3)


    const handleClick = (index: number) => {
        setShowSubCategory(true)
        document.querySelector
        let images = document.getElementsByClassName('category-images');
        for(let i=0; i<images.length; i++){
            images[i].classList.add('mini')
        }
        setCategorySlideCount(6)
    };

    const revertBack = (index: number) => {
      setShowSubCategory(false)
      let images = document.getElementsByClassName('category-images');
      for(let i=0; i<images.length; i++){
          images[i].classList.remove('mini')
      }
      setCategorySlideCount(3)
    }

  return (
    <>
      <Swiper
        className="image-carousel mini"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={categorySlideCount}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleClick(index)}>
            <div className='images-card category-images '>
              <div className='flex justify-center'>
                <Image src={image.src} alt={image.alt} className='w-5 border-2  border-gray-400' width={100} height={100} />
              </div>
              <div className='text-guide'>
                <span className='text-xs'>{image.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {
            showSubCategory && <>
        <Swiper 
        className="image-carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {subImages.map((image, index) => (
          <SwiperSlide key={index} onClick={() => revertBack(index)}>
              <div className='images-card px-2'>
                <div>
                  <Image src={image.src} alt={image.alt} width={100} height={100}/>
                </div>
                <div>
                  <span className='text-sm'>{image.title}</span>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
            </>
        }
      
    </>
  );
};

export default HeaderCarousel;