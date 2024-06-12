import React from 'react'

const SearchPosts:React.FC<{videoList: {
  post_content: {
    file_type: string; file_url: string;
  }[];
}[]}> = ({videoList}) => {

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
          videoList.length > 0 && videoList.map((video: { post_content: {
            file_type: string; file_url: string; 
}[]; }, index: React.Key | null | undefined) => <div
            key={index}
            className={`video-container `+((index===2||index===5) ? `row-span-2 h-full`: `h-48`)}
            >
              {
                video.post_content[0].file_type === 'video' ? <video
                src={"http://d1o5ovax38ru7n.cloudfront.net/"+video.post_content[0].file_url}
                onClick={(e)=>{
                  window.location.href=`/mobile_view/0`
                }} muted={true} autoPlay={false} controls={false}></video> :
                <img src={"http://d1o5ovax38ru7n.cloudfront.net/"+video.post_content[0].file_url}
                alt="thumbnail" />
              }
            </div>)
        }
      </div>
    </div>
  )
}

export default SearchPosts
