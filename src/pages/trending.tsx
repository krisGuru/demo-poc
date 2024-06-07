import SideNav from '@/components/SideNav'
import React, { useState, useEffect } from 'react'
import '../app/globals.css'
import SearchPosts from '@/components/search/SearchPosts'
import Head from 'next/head'

const Trending = () => {
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
      <Head>
         <title>Trending</title>
      </Head>
      <div id="video-post-container" className="py-5">
        {activeCategory && (
          <div className="flex justify-start">
            <button
              className="trending-btn"
              onClick={handleBackClick}>
              &lt;
            </button>
          </div>
        )}
        {!activeCategory && (
          <div className='trending-grid'>
            <div className=' py-20 trending-img'>
              <h1
                className='trending-grid-col'
                onClick={() => handleCategoryClick('new-arrival')}>
                New Arrival
              </h1>
            </div>
            <div className=' py-20 trending-img-I  '>
              <h1
                className='trending-grid-col'
                onClick={() => handleCategoryClick('most-purchased')}>
                Most Purchased
              </h1>
            </div>
            <div className=' py-20 trending-img-I '>
              <h1
                className='trending-grid-col'
                onClick={() => handleCategoryClick('kitchen')}>
                Kitchen
              </h1>
            </div>
            <div className=' py-20 trending-img '>
              <h1
                className='trending-grid-col'
                onClick={() => handleCategoryClick('bedroom')}>
                Bedroom
              </h1>
            </div>
          </div>
        )}
        {activeCategory && <SearchPosts />}
      </div>
    </>
  )
}

export default Trending