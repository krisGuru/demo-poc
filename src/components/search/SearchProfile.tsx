import Image from 'next/image'
import React from 'react'

const SearchProfile: React.FC<{
    showFullList: boolean, showAllResult: () => void, profileList: {
        company_name: string;
        company_description: string;
        id: string
    }[]
}> = ({showFullList, showAllResult, profileList}) => {
  return (
    <div className='mt-2'>
        {profileList.map((profile, index) => {
            return (
                <>
                    {
                        (index < 3 || showFullList) && <div className='flex items-center gap-4' key={index}
                        onClick={()=>{window.location.href="/profile/"+profile.id}}>
                        <div>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                            alt="" width={100} height={100}
                            className='rounded w-12'/>
                        </div>
                        <div>
                            <div>
                                <strong>{profile.company_name}</strong>
                            </div>
                            <div className='opacity-80 text-sm'>
                                <span >{profile.company_description}</span>
                            </div>
                            {/* <div className='flex gap-2 opacity-80 text-sm'>
                                {
                                    profile.location.map((location, index) => (
                                        <span key={index}>{location}</span>
                                    ))
                                }
                            </div> */}
                        </div>
                    </div>
                    }
                </>
            )
        })}
        {
            (profileList.length>3 && !showFullList) && <>
                <div className='text-center'>
                    <button onClick={showAllResult} className='bg-primary py-2 px-4 rounded-md'>
                        See all search results
                    </button>
                </div>
            </>
        }
    </div>
  )
}

export default SearchProfile