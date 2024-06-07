import SearchPosts from '@/components/search/SearchPosts'
import SearchProfile from '@/components/search/SearchProfile'
import SideNav from '@/components/SideNav'
import TrendingCarousel from '@/components/search/TrendingCarousel'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import '../app/globals.css'
import Head from 'next/head'

const Search = () => {
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
            <Head>
                <title>Search</title>
            </Head>
            <div className='search-tab'>
                <div id="video-post-container" className="py-5">
                    <input className='search-input'
                    type="text" placeholder='  ⌕ Search by category / name'
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
            </div>
        </>
    )
}

export default Search
