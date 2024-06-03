import React, { useEffect } from 'react'
import '../../app/globals.css'
import { FaImage, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export const Profile = () => {

  useEffect(()=>{
    document.querySelector('.profile-core')?.classList.add('profile-minimized')
    setTimeout(()=>{
      document.querySelector('.post-summary')?.classList.remove('opacity-0')
      document.querySelector('.post-summary')?.classList.add('ease-in')
      document.querySelector('.post-summary')?.classList.add('duration-700')
      document.querySelector('.post-summary')?.classList.add('opacity-100')
    }, 1000);
    setTimeout(() => {
      document.querySelector('.profile-header')?.classList.toggle('better-fit');
    }, 3000);

    setTimeout(()=>{
      document.querySelector('.profile-img')?.classList.remove('opacity-0')
      document.querySelector('.profile-img')?.classList.add('ease-in')
      document.querySelector('.profile-img')?.classList.add('duration-700')
      document.querySelector('.profile-img')?.classList.add('opacity-100')
    },4000);    
  },[])


  return <>
    <div id="video-post-container" className="py-5">
      <span className='absolute font-semibold text-base pl-2 opacity-50'>
          <Link href={'/'}>
              &lt; Back
          </Link>
      </span>
      <div className='profile-header'>
        <div className='profile-core profile-large'>
            <Image src={"https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"}
            alt='' width={100} height={100} />
            <h3>Aristo Coimbatore</h3>
            <p>The art of managing sound within the home cinema space, for an enthralling sound experience out of every cinema watching experience</p>
        </div>
        <div className='post-summary opacity-0 transition-opacity  mt-5'>
          <div className='grid grid-cols-3'>
            <div>
              <h3> All Posts</h3>
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaImage/> 80
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaVideo/> 20
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <h3> Interior </h3>
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaImage/> 20
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaVideo/> 40
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <h3>Doors</h3>
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaImage /> 20
            </div>
            <div className='flex gap-2 items-center justify-end'>
              <FaVideo /> 20
            </div>
          </div>
        </div>
      </div>
      <div className='profile-img opacity-0 w-full grid grid-cols-3 m-5 transition-opacity gap-2'>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
        <div>
            <Image src={'https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg'}
            alt='' width={100} height={100}/>
        </div>
      </div>
     </div>
  </>
}
export default Profile;