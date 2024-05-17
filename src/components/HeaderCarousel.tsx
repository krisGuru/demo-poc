import React from 'react';

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
    <div className="image-carousel">
      {images.map((image, index) => (
        <>
        <div className='images-card'>
            <div>
                <img key={index} src={image.src} alt={image.alt} />
            </div>
            <div>
                <span>{image.title}</span>
            </div>
        </div>
        </>
      ))}
    </div>
  );
};

export default HeaderCarousel;
