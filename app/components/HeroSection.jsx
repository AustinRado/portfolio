"use client"

import React from 'react'
import { socialLinks } from '../lib/data';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section> 
      <div className='flex justify-center mt-9 pt-[40px]'>
        <div className='col-span-7 place-self-center sm:text-left'>
            <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-4xl font-extrabold text-center">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Welcome, My name is Austin Rado</span>
              <br/>
            </h1>
            <p className='text-white text-base sm:text-lg mb-6 lg:text-xl text-center'>
              I am a <span>full stack developer</span> with 3 years of experience. I enjoy problem-solving, building applications and websites. My focus is React(Next.js), NodeJs, APIs, AWS and Python (Flusk, Django). I am always open to new experiences.
            </p>
            <div className='text-center flex flex-row items-baseline justify-center'>
                <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Contact me</button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span>
                </button>
                </div>
                <div className='flex items-center  gap-3 mt-4'>
                Github...LinkedIn...Twitter
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection