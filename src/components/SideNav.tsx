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
                  <span>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/search">
                  <FaSearch className='text-2xl' />
                  <span>Search</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaPlus className='text-2xl' />
                  <span>Add Post</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <FaFilm className='text-2xl' />
                  <span>Reel</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
};

export default SideNav;
