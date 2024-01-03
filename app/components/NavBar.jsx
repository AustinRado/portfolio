'use client';
import Link from 'next/link';
import NavLink from './NavLink';
import React, { useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title:'Home',
        path:'#home'
    },
    {
        title:'About',
        path:'#about'
    },
    {
        title:'Skills',
        path:'#skills'
    },
    {
        title:'Projects',
        path:'#projects'
    },
    {
        title:'Contact',
        path:'#contacts'
    },
]

const NavBar = () => {

  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-100 text-[#030303]'>
        <div className='flex justify-center items-center mx-auto p-6'>   
            <div className='mobile-menu block md:hidden'>
                {
                    !navBarOpen ? (
                        <button 
                        onClick={()=>setNavBarOpen(true)}
                        className='flex items-center px-3 py-2 rounded border-slate-200 text-[#030303] hover:text-white hover:border-white'>
                            <Bars3Icon
                            className='h-5 w-5'
                            />
                        </button>
                    ) : (
                        <button
                        onClick={()=>setNavBarOpen(false)}
                        className='flex items-center px-3 py-2 rounded border-slate-200 text-[#030303] hover:text-white hover:border-white'>
                            <XMarkIcon
                            className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
                    {navLinks.map((link,index)=>(
                        <li    key={index}>
                            <NavLink href={link.path} title={link.title}></NavLink>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
        {navBarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default NavBar