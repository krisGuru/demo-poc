import React, { useEffect, useState } from 'react'

const ShowDescription: React.FC<{description: string}> = ({description}) => {
    const [isEllipsis, setIsEllipsis] = useState(false);
    const readMore = () => {
        setIsEllipsis(false);
    }
    useEffect(() => {
        if (description.length > 50) {
            setIsEllipsis(true);
        }
    }, [description]);

    return <>
        {
            isEllipsis ? <>
                <p className='text-sm'>
                    {description.substring(0, 50)}...
                    <button className='decription-btn'
                        onClick={readMore}>Read More</button>
                </p>
            </> : <p className='text-sm'>{description}</p>
        }
    </>
}

export default ShowDescription