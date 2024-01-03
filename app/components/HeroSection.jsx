"use client"

import React from 'react'
import { socialLinks } from '../lib/data';
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const HeroSection = () => {

  const socialLinks = [
    {
      path: "https://github.com/AustinRado/",
      display:<AiFillGithub className='group-hover:text-white w-7 h-7'/>,
    },
    {
      path: "https://twitter.com/omburo_",
      display: <AiFillTwitterCircle className='group-hover:text-white w-7 h-7' />,
    },
    {
      path: "https://www.linkedin.com/in/austin-omburo-527919268/",
      display: <RiLinkedinFill className='group-hover:text-white w-7 h-7' />,
    },
  ]

  return (
    <section> 
      <div className='flex justify-center mt-9 pt-[40px]'>
        <div className='col-span-7 place-self-center sm:text-left'>
            <h1 className="mb-4 text-2xl sm:text-5xl lg:text-4xl font-extrabold text-center">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Welcome, My name is Austin Rado</span>
              <br/>
            </h1>
            <p className='text-base sm:text-lg mb-6 lg:text-xl text-center'>
              I am a <span>full stack developer</span> with 3 years of experience. I enjoy problem-solving, building applications and websites. My focus is React(Next.js) framework, NodeJs, APIs, AWS and Python (Flask, Django). I am always open to collaborations.
            </p>
            <div className='text-center flex flex-row flex-wrap items-baseline justify-center gap-3'>
                <div>
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Contact me</button>
                  <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span>
                  </button>
                </div>
                <div className='flex items-center gap-3 mt-4'>
                  {socialLinks.map((link, index)=><Link href={`${link.path}`} key={index}>{link.display}</Link>)}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection