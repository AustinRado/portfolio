"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section> 
      <div className='flex justify-center'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Hello, I am {''}</span>
              <br/>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Austin Rado',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'a react developer',
                  1500,
                  'a software engineer',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisud voluptatum.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Socials</button>
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