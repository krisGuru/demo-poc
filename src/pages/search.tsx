import SearchPosts from '@/components/search/SearchPosts'
import SearchProfile from '@/components/search/SearchProfile'
import SideNav from '@/components/SideNav'
import TrendingCarousel from '@/components/search/TrendingCarousel'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import '../app/globals.css'
import Head from 'next/head'
import apiCall from '@/utils/apiCall'

const Search = () => {
    const [profileList, setProfileList] = useState([])
    const [showFullList, setShowFullList] = useState(false);

    const showAllResult = () => {
        setShowFullList(true);
    }

    const getCompaniesByName = async(term: string) => {
        const data = await apiCall('company/'+term, "GET")
        setProfileList(data.data.Items)
    }

    const searchResult = (e: any) => {
        if(e.key === "Enter")
        {
            getCompaniesByName(e.target.value)
        }
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
                    onKeyDown={searchResult}
                    />
                    {
                        // search && <TrendingCarousel /> 
                    }
                    {
                        profileList.length > 0 && <SearchProfile showAllResult={showAllResult}
                        profileList={profileList}
                        showFullList={showFullList} />
                    }
                    {
                        // (!search && !showFullList) && <SearchPosts />
                    }
                </div>
            </div>
        </>
    )
}

export default Search
