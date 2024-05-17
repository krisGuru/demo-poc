import React, { useEffect, useRef, useState } from 'react'
import { FaVolumeUp, FaVolumeMute, 
    FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { createRoot } from 'react-dom/client';
import PublisherProfile from './PublisherProfile';
import ContactIcons from './ContactIcons';

const LoopVideo:React.FC<{
    data: {
        src: string;
        description: string;
        queue_order: { src: string; description: string }[];
        title: string
    };
    index: number;
    openModal: (
      index: number,
      data: {
        videoSrc: string;
        description: string;
        queueOrder: { src: string; description: string }[];
    }, videoRef: React.RefObject<HTMLVideoElement>) => void;
    handlePlayPauseVideo: (videoRef: React.RefObject<HTMLVideoElement>) => () => void;
}> = ({data, index, openModal, handlePlayPauseVideo}) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        const [isMuted, setIsMuted] = useState(true);
        const [reloadOverlay, setReloadOverlay] = useState<HTMLDivElement | null>(null);

        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.muted = isMuted;
          }
        }, [isMuted]);

        const handleVideoEnded = () => {
          setTimeout(() => {
            const overlay = document.createElement('div');
            overlay.classList.add('reload-overlay');
            overlay.classList.add('text-white');
            overlay.classList.add('flex', 'items-center', 'justify-center');
            overlay.classList.add('absolute', 'inset-0');
            const overlayRoot = document.createElement('div');
            overlay.appendChild(overlayRoot);
            createRoot(overlayRoot).render(<MdRefresh size={48} />);
            overlay.addEventListener('click', () => {
              videoRef.current?.play();
              overlay.remove();
              setReloadOverlay(null);
            });
            videoRef.current?.parentElement?.appendChild(overlay);
            setReloadOverlay(overlay);
          }, 500);
        };
  return (
    <div>
          <div className="my-7" key={index}>
            <div className="video-cards relative">
              <div className='absolute' style={{zIndex: 1000}}>
                <div className='relative flex gap-2 items-center text-white m-3 text-shadow'>
                  {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" className='rounded w-12'/>
                  <strong className='text-base'>{data.title}</strong>
                  <button className='text-base p-1 px-3 rounded-md text-shadow'>
                    <span className='text-shadow'>Follow</span>
                  </button> */}
                  <PublisherProfile src={''} description={''} queue_order={[]} title={data.title}/>
                </div>
              </div>
              <div className='relative w-full flex justify-center align-middle' style={{minHeight: '600px'}}>
              <video
                ref={videoRef}
                autoPlay={true}
                muted={true}
                loop={false}
                controls={false}
                playsInline
                onDoubleClick={e=>openModal(
                index,
                {
                  videoSrc: data.src,
                  description: data.description,
                  queueOrder: data.queue_order
                }, videoRef)}
                onClick={handlePlayPauseVideo(videoRef)}
                onEnded={handleVideoEnded}
              >
                <source src={data.src} type="video/mp4" />
              </video>
              </div>
              <div className="absolute bottom-2 right-2"> 
                <button className="unmute-btn text-white bg-transparent border-none outline-none"
                onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>                
              </div>
            </div>
            <div>
              <a href="#" className='float-right text-sm mr-4 border border-gray-600 px-2 rounded'>
                Get Quote
              </a>
              <div style={{display:"flex", gap: "1rem", marginTop: "1rem", marginLeft: "1rem"}}>
                {/* <FaPhone className='text-2xl fa-phone' />
                <FaWhatsapp className='text-2xl'/>
                <FaShareSquare className='text-2xl' /> */}
                <ContactIcons/>
              </div>
            </div>
            <div className="video-description text-black"> {/* Description container */}
              <p className='text-xl lg:text-base'><strong>{data.title}</strong> {data.description}</p>
            </div>
            <p className='relative mx-2 text-base opacity-80'>2 hours ago</p>
          </div>
    </div>
  )
}

export default LoopVideo;
