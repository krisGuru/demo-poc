
import PublisherProfile from '@/components/PublisherProfile';
import './../../app/globals.css';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import ContactActions from '@/components/ContactActions';
import ShowDescription from '@/components/ShowDescription';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const FullvideoPlayer: React.FC = () => {

    const firstVideo = {
        src: '/video/first-video.mp4',
        description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
    };
    const secondVideo = {
        src: '/video/second-video.mp4',
        description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
    };
    const thirdVideo = {
        src: '/video/third-video.mp4',
        description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
    };

    // const queueList = [
    //     [
    //         firstVideo, thirdVideo, secondVideo,
    //     ],
    //     [
    //         secondVideo, firstVideo, thirdVideo,
    //     ],
    //     [
    //         thirdVideo, secondVideo, firstVideo,
    //     ],
    // ];

    const router = useRouter();
    const {id } = router.query;
    console.log(id)

    const [queueOrder , setQueueOrder] = useState<{src: string; description: string}[]>([{
        src: '',
        description: '',
    }]);

    useEffect(() => {
      const firstVideo = {
        src: '/video/first-video.mp4',
        description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
    };
    const secondVideo = {
        src: '/video/second-video.mp4',
        description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
    };
    const thirdVideo = {
        src: '/video/third-video.mp4',
        description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
    };
      const queueList = [
        [
            firstVideo, thirdVideo, secondVideo,
        ],
        [
            secondVideo, firstVideo, thirdVideo,
        ],
        [
            thirdVideo, secondVideo, firstVideo,
        ],
    ];
        if (id) {
            const index = Number(id);
            setQueueOrder(queueList[index]);
        }
    }, [id]);


  // const [currentVideoRef, setCurrentVideoRef] = useState<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);


  const handleTouchVideo = () => {
    setIsMuted(!isMuted);
  };

  const slideChange = (swiper: any) => {
    document.querySelectorAll('video').forEach((video) => video.pause());
    const video = swiper.slides[swiper.activeIndex].querySelector('video');
    if (video) {
      video.muted = isMuted;
      video.play();
    }
  }

  return (
    <div className="video-full">
      {queueOrder.length > 0 && (
        <>
          {
            (
            <div className="mobile-swiper mobile-fullscreen">
              <Swiper
              direction={'vertical'}
              modules={[Pagination]}
              onSlideChange={slideChange}
              className='mySwiper w-full h-full'>
                {queueOrder.map((video, index) => (
                  <SwiperSlide key={index}>
                    <video
                      src={video.src}
                      autoPlay={true}
                      controls={false}
                      muted={isMuted}
                      ref={videoRef}
                      onTouchStart={handleTouchVideo}
                    />
                    <div className="mobile-contact">
                      <div className='text-white mt-3 full-screen'>
                      <ContactActions getQuote={false} />
                      </div>
                    </div>
                    <div className="mobile-description">
                      <div className='mobile-profile'>
                      <PublisherProfile title={'Builder Profile'} />
                      </div>
                      <ShowDescription description={video.description} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            )
          }
        </>
      )}
    </div>
  );
};

export default FullvideoPlayer;
