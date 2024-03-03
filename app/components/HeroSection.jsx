"use client";

import React from 'react';
import Link from "next/link";
import { socialLinks } from "../lib/data";

const HeroSection = () => {

  return (
    <section> 
      <div className='flex justify-center mt-9 pt-[40px]'>
        <div className='col-span-7 place-self-center sm:text-left'>
            <h1 className="mb-4 text-base sm:text-2xl lg:text-3xl font-bold text-center">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Hello, My name is Austin Rado</span>
              <br/>
            </h1>
            <p className='text-xs sm:text-sm mb-6 lg:text-xl text-center'>
              I am a full stack developer with a passion for problem-solving and finding solutions. My forte is Linux, React(Next.js), NodeJs, and APIs.
              <br/> Currently, I am diving into cloud computing, AWS, and exploring the endless opportunities they offer for scalable and efficient solutions
              <br/> I am always open to collaborations and teamwork.
            </p>
            <div className='text-center sm:flex sm:justify-center sm:items-baseline gap-3'>
                <div>
                  <button className='px-1 py-1 w-full sm:w-fit rounded-fulls hover:bg-slate-200 text-black'>
                    <span className='block bg-slate-200 rounded-full px-4 py-2'>Resume</span>
                  </button>
                </div>
                <div className='flex items-center justify-center  gap-3 translate-y-2 '>
                  {socialLinks.map((link, index)=><Link href={`${link.path}`} key={index}>{link.display}</Link>)}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection