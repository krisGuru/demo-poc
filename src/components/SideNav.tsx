import React from 'react'
import Link from 'next/link'
import { FaHome, FaVideo, FaSearch, FaFilm } from 'react-icons/fa';

const SideNav: React.FC<> = () => {
  return <>
    <div id='side-menu'>
        <ul>
            <li>
                <Link href="/videoplayer">
                  <FaHome className='text-2xl' />
                  <label htmlFor="" className='menu-label'>Home</label>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaSearch className='text-2xl' />
                  <label htmlFor="" className='menu-label'>Search</label>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaFilm className='text-2xl' />
                  <label htmlFor="" className='menu-label'>Reel</label>
                </Link>
            </li>
        </ul>
    </div>
    </>
};

export default SideNav;
