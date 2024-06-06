import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const last_accessed = localStorage.getItem('last_accessed_time');
        const current_time = new Date().getTime();
        if (!last_accessed) {
            setLoading(true);
        }
        else{
            const interval_time = Number(current_time) - parseInt(last_accessed);
            const allowed_hours = 4;
            const allowed_time = 1000 * 60 * 60 * allowed_hours;
            if(interval_time > allowed_time)
                setLoading(true);
        }
        localStorage.setItem('last_accessed_time', current_time.toString());

        const handleComplete = () => setLoading(false);
        const timer = setTimeout(() => {
            handleComplete();
        }, 1000);
  
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {
                loading && (<div className="splashScreen">
                    <Image src="https://www.thehomeideas.in/wp-content/uploads/2024/01/thehomeideas.png" alt="" width={100} height={100} />
                    <span className='absolute bottom-5 font-bold text-sm'>The Home Ideas</span>
                </div>)
            }
        </>
    )
};

export default SplashScreen;
