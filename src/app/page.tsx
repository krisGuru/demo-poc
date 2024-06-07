"use client";

import React, { useState, useEffect } from 'react';
import './../app/globals.css';
import LoopVideo from '@/components/homepage/LoopVideo';
import FullscreenVideoPlayer from '@/components/homepage/FullscreenVideoPlayer';
import SideNav from '@/components/SideNav';
import CarouselComponent from '@/components/homepage/CarouselComponent';
import ImagePost from '@/components/homepage/ImagePost';
import HeaderCarousel from '@/components/homepage/HeaderCarousel';
import SplashScreen from '@/components/SplashScreen';

const VideoPlayer: React.FC = () => {
  const [videoSources, setVideoSources] = useState<{
    type: string;
    src: string;
    title: string;
    description: string;
    queue_order: {
      src: string;
      title: string;
      description: string;
    }[];
    queue_images: { id: number; image: string; alt: string }[];
  }[]>([
    {
      type:'video',
      src:'./video/first-video.mp4',
      title:'Aristo Coimbatore',
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [
        {
          src: './video/first-video.mp4',
          title: 'Aristo Coimbatore',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/third-video.mp4',
          title: 'The Audio Cube',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/second-video.mp4',
          title: 'Nine Degree Design Studio',
          description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
        },
      ],
      queue_images: []
    },
    {
      type:'video',
      src:'./video/second-video.mp4',
      title:'Nine Degree Design Studio',
      description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
      queue_order: [
        {
          src: './video/second-video.mp4',
          title: 'Nine Degree Design Studio',
          description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
        },
        {
          src: './video/first-video.mp4',
          title: 'Aristo Coimbatore',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/third-video.mp4',
          title: 'The Audio Cube',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
      ],
      queue_images: []
    },
    {
      type:'video',
      src:'./video/third-video.mp4',
      title: 'The Audio Cube', 
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [
        {
          src: './video/third-video.mp4',
          title: 'The Audio Cube',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/first-video.mp4',
          title: 'Aristo Coimbatore',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/second-video.mp4',
          title: 'Nine Degree Design Studio',
          description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
        },
      ],
      queue_images: []
    },
    {
      type: 'image',
      src: 'https://www.trade4asia.com/ProductImg/inf.jpg',
      title: 'The Audio Cube',
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [],
      queue_images: []
    },
    {
      type: 'gallery',
      src: '',
      title: 'The Audio Cube',
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [],
      queue_images: [
        { id: 1, image: '/images/image-1.jpg', alt: 'Slide 1' },
        { id: 2, image: '/images/image-3.jpg', alt: 'Slide 2' },
      ]
    },
  ]);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const [videoFullScreen, setVideoFullScreen] = useState(false);

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isTabletDevice, setIsTabletDevice] = useState(false);
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);

  useEffect(() => {
    // width wise mobile or tablet detect
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobileDevice(true);
    } else if (width < 1024) {
      setIsTabletDevice(true);
    } else {
      setIsDesktopDevice(true);
    }
  }, []);

  const [currentVideo, setCurrentVideo] = useState<{
    videoSrc: string;
    title: string;
    description: string;
    queueOrder: { src: string; title: string; description: string }[];
  }>({
    videoSrc: '',
    title: '',
    description: '',
    queueOrder: []
  });
  const [pausedVideo, setPausedVideo] = useState<HTMLVideoElement | null>(null);

  const handlePlayPauseVideo = (videoRef: React.RefObject<HTMLVideoElement>) => () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        // react pause all videos
        document.querySelectorAll('video').forEach((video) => video.pause());
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const openModal = (
      index: number,
      video: {description: string, title: string, videoSrc: string, queueOrder: {src: string, title: string, description: string}[]},
      currentVideo: React.RefObject<HTMLVideoElement>
    ) => {
      if ((isMobileDevice || isTabletDevice)) {
        window.location.href=`/mobile_view/${index}`
      }
      else{
        document.querySelectorAll('video').forEach((video) => video.pause());
        setCurrentVideo(video);
        setVideoFullScreen(true);
        setPausedVideo(currentVideo.current);    
      }
  };

  const closeModal = () => {
    setCurrentVideo({ videoSrc: '', description: '', title: '', queueOrder: [] });
    setVideoFullScreen(false);
    const video = pausedVideo;
    if (video) {
      if (video.paused) {
        video.play();
      }
    }
    setPausedVideo(null);
  };

  const handleMuteUnmute = (videoRef: React.RefObject<HTMLVideoElement>) => () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        const isVisible = entry.intersectionRatio >= 0.8;
        if (isVisible && autoplayAllowed) {
          document.querySelectorAll('video').forEach((video) => video.pause());
          video.play().catch(() => {
            console.log('Autoplay was prevented by the browser');
          });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.8, rootMargin: '0px 0px -100px 0px' });

    const currentVideoRefs = document.querySelectorAll('video');
    currentVideoRefs.forEach((videoElement) => {
      observer.observe(videoElement);
    });

    return () => {
      observer.disconnect();
    };
  }, [videoSources, autoplayAllowed]);

  useEffect(() => {
    setAutoplayAllowed(true);
  }, []);

  return (
    <>
    <SplashScreen />
    <SideNav/>
    <div id="video-post-container" className="py-5 vdo-tab">
      <HeaderCarousel />
      {
        videoFullScreen && <FullscreenVideoPlayer
        videoSrc={currentVideo.videoSrc}
        description={currentVideo.description}
        onClose={closeModal}
        title={currentVideo.title}
        queueOrder={currentVideo.queueOrder}
        />
      }
      {videoSources.map((data, index) => {
        if (data.type==='video')
          return <LoopVideo key={index} data={data}
            index={index} openModal={openModal}
            handlePlayPauseVideo={handlePlayPauseVideo} />
        else if(data.type==='image')
          return <ImagePost key={index} src={data.src}
            title={data.title} description={data.description} />
        else if(data.type==='gallery')
          return <CarouselComponent title={data.title} key={index}
            description={data.description} queue_images={data.queue_images} />
      })}
    </div>
    <div className='mt-10'>&nbsp;</div>
    </>
  );
};

export default VideoPlayer;
