"use client"

import React from 'react'


const HeroSection = () => {
  return (
    <section> 
      <div className='flex justify-center mt-9 pt-[40px]'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-4xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Welcome, My name is Austin Rado</span>
              <br/>
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
              I am a <span>full stack developer</span> with 3 years of experience. I enjoy building applications, sites and good relationships. My focus is React(Next.js), NodeJs, AWS and Python (Flusk, Django). I am always open to new experiences as well as opportunities and collaboration.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Contact me</button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span>
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection