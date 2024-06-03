import React from 'react'
import Link from 'next/link'
import { IoSettingsOutline,IoSearch, IoHomeOutline } from "react-icons/io5";
import { MdTrendingUp } from "react-icons/md";

const SideNav = () => {
  return <>
    <div id='side-menu'>
        <ul>
            <li>
                <Link href="/">
                  <IoHomeOutline className='text-2xl' />
                  <span className='menu-label'>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/search">
                  < IoSearch  className='text-2xl' />
                  <span className='menu-label'>Search</span>
                </Link>
            </li>
            <li>
                <Link href="/trending">
                  <MdTrendingUp className='text-2xl' />
                  <span className='menu-label'>Trending</span>
                </Link>
            </li>
            <li>
                <Link href="settings">
                  <IoSettingsOutline  className='text-2xl' />
                  <span className='menu-label'>Settings</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
};

export default SideNav;
