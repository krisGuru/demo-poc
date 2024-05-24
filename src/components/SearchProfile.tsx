import React from 'react'

const SearchProfile: React.FC<{
    showFullList: boolean, showAllResult: () => void
}> = ({showFullList, showAllResult}) => {
    const profileList = [
        {
            name: "Virat",
            location: ["Coimbatore"],
            designation: "Interior Designer"
        },
        {
            name: "Rohit",
            location: ['Chennai', 'Trichy'],
            designation: "Interior Designer"
        },
        {
            name: "Rahul",
            location: ["Coimbatore", "Trichy"],
            designation: "Interior Designer"
        },
        {
            name: "Sachin",
            location: ["Coimbatore"],
            designation: "Interior Designer"
        },
        {
            name: "Kohli",
            location: ["Coimbatore"],
            designation: "Interior Designer"
        }
    ]
  return (
    <div className='mt-2'>
        {profileList.map((profile, index) => {
            return (
                <>
                    {
                        (index < 3 || showFullList) && <div className='flex items-center gap-4' key={index}>
                        <div>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                            alt=""
                            className='rounded w-12'/>
                        </div>
                        <div>
                            <div>
                                <strong>{profile.name}</strong>
                            </div>
                            <div className='opacity-80 text-sm'>
                                <span >{profile.designation}</span>
                            </div>
                            <div className='flex gap-2 opacity-80 text-sm'>
                                {
                                    profile.location.map((location, index) => (
                                        <span key={index}>{location}</span>
                                    ))
                                }
                            </div>
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