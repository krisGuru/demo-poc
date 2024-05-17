import React, { useEffect, useState } from 'react'

const ShowDescription: React.FC<{description: string}> = ({description}) => {
    const [isEllipsis, setIsEllipsis] = useState(false);
    const readMore = () => {
        setIsEllipsis(false);
    }
    useEffect(() => {
        if (description.length > 100) {
            setIsEllipsis(true);
        }
    }, [description]);

    return <>
        {
            isEllipsis ? <>
                <p>{description.substring(0, 100)}... <button style={{border: 'none'}}
                    onClick={readMore}>Read More</button></p>
            </> : <p>{description}</p>
        }
    </>
}

export default ShowDescription