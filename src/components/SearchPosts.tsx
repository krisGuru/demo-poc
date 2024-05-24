import React from 'react'

const SearchPosts = () => {
  const videoList = [
    {
      id: 1,
      title: 'video 1',
      description: 'description 1',
      thumbnail: './video/thumbnail-1.mp4',
      video: './video/first-video.mp4',
    },
    {
      id: 2,
      title: 'video 2',
      description: 'description 2',
      thumbnail: './video/thumbnail-2.mp4',
      video: './video/second-video.mp4',
    },
    {
      id: 3,
      title: 'video 3',
      description: 'description 3',
      thumbnail: './video/thumbnail-3.mp4',
      video:'./video/third-video.mp4',
    },
    {
      id: 4,
      title: 'video 4',
      description: 'description 4',
      thumbnail: './video/thumbnail-1.mp4',
      video: './video/first-video.mp4',
    },
    {
      id: 5,
      title: 'video 5',
      description: 'description 5',
      thumbnail: './video/thumbnail-2.mp4',
      video: './video/second-video.mp4',
    },
    {
      id: 1,
      title: 'video 1',
      description: 'description 1',
      thumbnail: './video/thumbnail-3.mp4',
      video:'./video/third-video.mp4',
    },
    {
      id: 2,
      title: 'video 2',
      description: 'description 2',
      thumbnail: './video/thumbnail-1.mp4',
      video: './video/first-video.mp4',
    },
    {
      id: 3,
      title: 'video 3',
      description: 'description 3',
      thumbnail: './video/thumbnail-2.mp4',
      video: './video/first-video.mp4',
    },
    {
      id: 4,
      title: 'video 4',
      description: 'description 4',
      thumbnail: './video/thumbnail-3.mp4',
      video: './video/first-video.mp4',
    },
    {
      id: 5,
      title: 'video 5',
      description: 'description 5',
      thumbnail: './video/thumbnail-1.mp4',
      video: './video/first-video.mp4',
    },
  ]

  const randomVideo = () => {
    setTimeout(()=>{
      const videos = document.querySelectorAll(`.row-span-2 video`)
      for(let i=0; i<videos.length; i++) {
        setTimeout(()=>{
          let video = videos[i] as HTMLVideoElement
          video.play()  
        }, (i * 2500))
      }
    }, 1000);
  }

  React.useEffect(() => {
    randomVideo()
  }, [])

  return (
    <div id="posts-component" className='mt-2'>
      <div className='grid grid-cols-3'>
        {
          videoList.length > 0 && videoList.map((video, index) => <div
            key={index}
            className={`video-container `+((index===2||index===5) ? `row-span-2 h-full`: `h-48`)}
            >
                <video src={video.thumbnail} muted={true}
                autoPlay={false} controls={false}></video>
            </div>)
        }
      </div>
    </div>
  )
}

export default SearchPosts
