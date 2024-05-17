
import PublisherProfile from '@/components/PublisherProfile';
import './../../app/globals.css';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ContactActions from '@/components/ContactActions';
import ShowDescription from '@/components/ShowDescription';

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
    onSwipedDown: (eventData) => {
      if (currentVideoIndex !== 0 && eventData.absY > eventData.absX) {
        setCurrentVideoIndex(currentVideoIndex - 1);
      }
    },
    onSwipedUp: (eventData) => {
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
            <div className="w-full h-full relative mobile-fullscreen">
              <video
                ref={videoRef}
                src={queueOrder[currentVideoIndex].src}
                autoPlay={true}
                controls={false}
                muted={isMuted}
                onTouchStart={handleTouchVideo}
              />
              <div className="absolute right-0 p-2 text-shadow" style={{ bottom: '130px'}}>
                <div className='text-white mt-3'>
                <ContactActions getQuote={false} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 text-white text-shadow">
                <div className='flex gap-2 items-center'>
                <PublisherProfile title={'Builder Profile'} />
                </div>
                <ShowDescription description={queueOrder[currentVideoIndex].description} />
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
