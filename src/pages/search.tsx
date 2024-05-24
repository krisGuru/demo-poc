import SearchPosts from '@/components/SearchPosts'
import SearchProfile from '@/components/SearchProfile'
import SideNav from '@/components/SideNav'
import TrendingCarousel from '@/components/TrendingCarousel'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import '../app/globals.css'

const search = () => {
    const [showFullList, setShowFullList] = useState(false);
    const searchParams = useSearchParams();
    const search = searchParams?.get('search');
    const searchTerm = searchParams?.get('search-term')

    const showAllResult = () => {
        setShowFullList(true);
    }

    const navToTypeSearch = () => {
        if(!search)
            window.location.href = "/search?search=true"
    }

    const searchResult = (e: any) => {
        if(e.key === "Enter")
            window.location.href = `/search?search-term=${e.target.value}`
    }

    return (
        <>
            <SideNav />
            <div id="video-post-container" className="py-5">
                <input className='w-full bg-gray-200 rounded-lg border border-gray-400'
                type="text" placeholder='🔍 Search by category / name'
                onMouseDown={navToTypeSearch} onKeyDown={searchResult}
                />
                {
                    search && <TrendingCarousel /> 
                }
                {
                    searchTerm && <SearchProfile showAllResult={showAllResult} showFullList={showFullList} />
                }
                {
                    (!search && !showFullList) && <SearchPosts />
                }
            </div>
        </>
    )
}

export default search