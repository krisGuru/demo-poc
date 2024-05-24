import React from 'react'
import Link from 'next/link'
import { FaHome, FaSearch, FaFilm, FaPlus } from 'react-icons/fa';

const SideNav = () => {
  return <>
    <div id='side-menu'>
        <ul>
            <li>
                <Link href="/videoplayer">
                  <FaHome className='text-2xl' />
                  <span className='menu-label'>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/search">
                  <FaSearch className='text-2xl' />
                  <span className='menu-label'>Search</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaPlus className='text-2xl' />
                  <span className='menu-label'>Add Post</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaFilm className='text-2xl' />
                  <span className='menu-label'>Reel</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
};

export default SideNav;
