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
                <p>
                    {description.substring(0, 50)}...
                    <button className='p-0 m-0 border px-2 text-blue-600 font-semibold border-gray-300'
                        onClick={readMore}>Read More</button>
                </p>
            </> : <p>{description}</p>
        }
    </>
}

export default ShowDescription