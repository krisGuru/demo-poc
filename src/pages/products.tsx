// import SideNav from '@/components/SideNav'
// import React, { useState } from 'react'
// import '../app/globals.css'
// import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// import {Swiper, SwiperSlide} from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Image from 'next/image';

// const Products = () => {
//     const images = [
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: '' },
//         { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: '' },
//         { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 1', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg', alt: 'Image 2', title: '' },
//         { src: 'https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png', alt: 'Image 3', title: '' },
//         { src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', alt: 'Image 4', title: '' },
//     ]

//   return (
//     <>
//     <SideNav/>
//     <div> 
//     <Swiper
//      className='image-slider py-5 w-2/3'
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         pagination={{ clickable: true }}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}>
//         {images.map((image, index) => (
//         <SwiperSlide key={index}>
//             <div className='images-card px-2'>
//                 <div>
//                     <Image src={image.src} alt={image.alt} />
//                 </div>
//                 <div>
//                     <span className='text-sm'>{image.title}</span>
//                 </div>
//             </div>
//         </SwiperSlide>
//             ))}
//         </Swiper>
//         </div>
//         <Swiper
//             className='image-slider py-5 w-2/3' 
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 pagination={{ clickable: true }}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}>
//                     {images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                         <div className='images-card px-2'>
//                             <div>
//                                 <Image src={image.src} alt={image.alt} />
//                             </div>
//                             <div>
//                                 <span className='text-sm'>{image.title}</span>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <Swiper
//             className='image-slider py-5 w-2/3'
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 pagination={{ clickable: true }}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}>
//                     {images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                         <div className='images-card px-2'>
//                             <div>
//                                 <Image src={image.src} alt={image.alt} />
//                             </div>
//                             <div>
//                                 <span className='text-sm'>{image.title}</span>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </>
//   )
// }

// export default Products

import React from 'react'
import Head from 'next/head'

const Products = () => {
  return (
    <>
    <Head>
      <title>Products</title>
    </Head>
    <div>
      Content of the page.
    </div>
  </>
  )
}

export default Products

