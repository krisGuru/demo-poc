
import './../../app/globals.css';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft,
  FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const FullvideoPlayer: React.FC = () => {

    const firstVideo = {
        src: '/video/first-video.mp4',
        description: 'Video 1',
    };
    const secondVideo = {
        src: '/video/second-video.mp4',
        description: 'Video 2',
    };
    const thirdVideo = {
        src: '/video/third-video.mp4',
        description: 'Video 3',
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

    const router = useRouter();
    const {id } = router.query;
    console.log(id)

    useEffect(() => {
        if (id) {
            const index = Number(id);
            setQueueOrder(queueList[index]);
        }
    }, [id]);

  const [queueOrder, setQueueOrder] = useState<{ src: string; description: string }[]>([{
    src: '',
    description: '',
  }]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      if (currentVideoIndex !== 0 && eventData.absY > eventData.absX) {
        setCurrentVideoIndex(currentVideoIndex - 1);
      }
    },
    onSwipedDown: (eventData) => {
      if (currentVideoIndex !== queueOrder.length - 1 && eventData.absY > eventData.absX) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      }
    },
    // preventDefaultTouchmoveEvent: true,
  });

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
  
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
  
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const handleTouchVideo = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div {...handlers} className="fixed inset-0 bg-black z-50 flex">
      {queueOrder.length > 0 && (
        <>
          {
            (
            <div className="w-full h-full relative">
              <video
                ref={videoRef}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                src={queueOrder[currentVideoIndex].src}
                autoPlay={true}
                controls={false}
                muted={isMuted}
                onTouchStart={handleTouchVideo}
              />
              <div className="absolute top-0 right-0 p-4 flex flex-col items-end">
                <FaPhone className="text-6xl text-white align-center " style={{ transform: 'rotate(90deg)', marginTop:'60rem' }} />
                <FaWhatsapp className="text-6xl text-white  mt-10" />
                <FaShareSquare className="text-6xl text-white mt-10" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <p>{queueOrder[currentVideoIndex].description}</p>
              </div>
            </div>
            )
          }
        </>
      )}
    </div>
  );
};

export default FullvideoPlayer;
