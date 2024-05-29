import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ShowDescription from '../ShowDescription';
import ContactActions from '../ContactActions';
import PublisherProfile from '../PublisherProfile';

const FullscreenVideoPlayer: React.FC<{
  videoSrc: string;
  description: string;
  title: string;
  onClose: () => void;
  queueOrder: { src: string; title: string; description: string }[];
}> = ({ videoSrc, description, title, onClose, queueOrder }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(); 
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
              <div className="w-3/4 relative fullscreen-video">
                {currentVideoIndex !== 0 && (
                  <button onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)} className="mt-5 text-white absolute top-1/2 left-2">
                    <FaArrowLeft className="ml-1" />
                  </button>
                )}
                <div className="float-left text-white">
                  <button onClick={onClose} className="mb-4">
                    x
                  </button>
                </div>
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
              <div className="w-1/4 p-4 bg-gray-800 text-white">
                <PublisherProfile title={queueOrder[currentVideoIndex].title} />     
                <ShowDescription description={queueOrder[currentVideoIndex].description} />
                <ContactActions  getQuote={false}/>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FullscreenVideoPlayer;
