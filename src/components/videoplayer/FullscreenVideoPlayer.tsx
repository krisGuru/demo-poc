import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ShowDescription from './../ShowDescription';

const FullscreenVideoPlayer: React.FC<{
  videoSrc: string;
  description: string;
  onClose: () => void;
  queueOrder: { src: string; description: string }[];
}> = ({ videoSrc, description, onClose, queueOrder }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="fixed inset-0 bg-black z-50 flex" id='fullscreen-overlay'>
      {queueOrder.length > 0 && (
        <>
          {
           (
            <>
              <div className="w-4/5 relative fullscreen-video">
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
                <ShowDescription description={queueOrder[currentVideoIndex].description} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FullscreenVideoPlayer;
