import React, { useState, useEffect } from 'react';
import './../../app/globals.css';
import LoopVideo from '@/components/LoopVideo';
import FullscreenVideoPlayer from '@/components/FullscreenVideoPlayer';

const VideoPlayer: React.FC = () => {
  const [videoSources, setVideoSources] = useState([
    {
      src:'./video/first-video.mp4',
      title:'Aristo Coimbatore',
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [
        {
          src: './video/first-video.mp4',
          description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
        },
        {
          src: './video/third-video.mp4',
          description: 'Third Video',
        },
        {
          src: './video/second-video.mp4',
          description: 'Second Video',
        },
      ]
    },
    {
      src:'./video/second-video.mp4',
      title:'Nine Degree Design Studio',
      description: 'Interior Designer Chirag Mehta of Nine Degree design Studio designed For religious yet fun loving family of five.',
      queue_order: [
        {
          src: './video/second-video.mp4',
          description: 'Second Video',
        },
        {
          src: './video/first-video.mp4',
          description: 'First Video',
        },
        {
          src: './video/third-video.mp4',
          description: 'Third Video',
        },
      ]
    },
    {
      src:'./video/third-video.mp4',
      title: 'The Audio Cube', 
      description: 'The art of managing sound within the home cinema space , for an enthralling sound experience out of every cinema watching experience.',
      queue_order: [
        {
          src: './video/third-video.mp4',
          description: 'Third Video',
        },
        {
          src: './video/first-video.mp4',
          description: 'First Video',
        },
        {
          src: './video/second-video.mp4',
          description: 'Second Video',
        },
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
    description: string;
    queueOrder: { src: string; description: string }[];
  }>({
    videoSrc: '',
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
      video: {description: string, videoSrc: string, queueOrder: {src: string, description: string}[]},
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
    setCurrentVideo({ videoSrc: '', description: '', queueOrder: [] });
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
    <div id="video-post-container" className="p-5">
      {videoFullScreen ? <FullscreenVideoPlayer
      videoSrc={currentVideo.videoSrc}
      description={currentVideo.description}
      onClose={closeModal}
      queueOrder={currentVideo.queueOrder}
      /> : <></>}
      {videoSources.map((data, index) => {
        return (
          <LoopVideo
          key={index}
          data={data} index={index} openModal={openModal}
          handlePlayPauseVideo={handlePlayPauseVideo} />
        );
      })}
    </div>
    </>
  );
};

export default VideoPlayer;
