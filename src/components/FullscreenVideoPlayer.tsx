import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft,
  FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const FullscreenVideoPlayer: React.FC<{
  videoSrc: string;
  description: string;
  onClose: () => void;
  queueOrder: { src: string; description: string }[];
}> = ({ videoSrc, description, onClose, queueOrder }) => {
  const isMobile = window.innerWidth < 768;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(isMobile);

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
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(); // Close the modal
      }
      if (event.key === 'ArrowRight') {
        if ((queueOrder.length - 1) > currentVideoIndex)
          setCurrentVideoIndex(currentVideoIndex + 1);
      }
      if (event.key === 'ArrowLeft') {
        if (currentVideoIndex !== 0)
          setCurrentVideoIndex(currentVideoIndex - 1);
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, currentVideoIndex]);

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
    if (isMobile && videoRef.current) {
      videoRef.current.play();
    }
  }, [isMobile, currentVideoIndex]);

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
          {isMobile ? (
            <div className="w-full h-full relative">
              <video
                ref={videoRef}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                src={queueOrder[currentVideoIndex].src}
                autoPlay={isMobile}
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
          ) : (
            <>
              <div className="w-4/5 relative">
                {currentVideoIndex !== 0 && (
                  <button onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)} className="mt-5 text-white absolute top-1/2 left-2">
                    <FaArrowLeft className="ml-1" />
                  </button>
                )}
                {(queueOrder.length - 1) > currentVideoIndex && (
                  <div className="float-right h-full">
                    <div className="absolute top-1/2 right-2">
                      <button onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)} className="mt-5 text-white ">
                        <FaArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                )}
                <video
                  ref={videoRef}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                  src={queueOrder[currentVideoIndex].src}
                  autoPlay
                  controls={false}
                />
              </div>
              <div className="w-1/5 p-4 bg-gray-800 text-white">
                <div className="float-right">
                  <button onClick={onClose} className="mb-4">
                    x
                  </button>
                </div>
                <p>{queueOrder[currentVideoIndex].description}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FullscreenVideoPlayer;
