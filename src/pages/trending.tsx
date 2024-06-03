import SideNav from '@/components/SideNav'
import React, { useState, useEffect } from 'react'
import '../app/globals.css'
import SearchPosts from '@/components/search/SearchPosts'

const trending = () => {
  const [activeCategory, setActiveCategory] = useState('')

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  }

  const handleBackClick = () => {
    setActiveCategory('');
  }

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCategory('');
      }
    }

    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    }
  }, []);

  return (
    <>
      <SideNav />
      <div id="video-post-container" className="py-5">
        {activeCategory && (
          <div className="flex justify-start">
            <button
              className="bg-gray-300 text-white  py-1 px-2 rounded"
              onClick={handleBackClick}>
              &lt;
            </button>
          </div>
        )}
        {!activeCategory && (
          <div className='grid grid-cols-2 gap-2 py-5'>
            <div className=' py-20 bg-gray-400 rounded-3xl'>
              <h1
                className='text-center text-white font-bold text-xl cursor-pointer'
                onClick={() => handleCategoryClick('new-arrival')}>
                New Arrival
              </h1>
            </div>
            <div className=' py-20 bg-blue-400 rounded-3xl '>
              <h1
                className='text-center text-white font-bold text-xl cursor-pointer'
                onClick={() => handleCategoryClick('most-purchased')}>
                Most Purchased
              </h1>
            </div>
            <div className=' py-20 bg-red-400 rounded-3xl'>
              <h1
                className='text-center text-white font-bold text-xl cursor-pointer'
                onClick={() => handleCategoryClick('kitchen')}>
                Kitchen
              </h1>
            </div>
            <div className=' py-20 bg-violet-400 rounded-3xl'>
              <h1
                className='text-center text-white font-bold text-xl cursor-pointer'
                onClick={() => handleCategoryClick('bedroom')}>
                Bedroom
              </h1>
            </div>
          </div>
        )}
        {activeCategory && <SearchPosts selectedCategory={activeCategory} />}
      </div>
    </>
  )
}

export default trending