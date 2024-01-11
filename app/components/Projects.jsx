import React from 'react';
import Image from "next/image";
import { projects } from '../lib/data';

const Projects = () => {
  return (
    <section>
    <h1 className="text-2xl text-[#030303] mt-[30px] text-center relative">Projects
        <hr className='w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
    </h1>
    <div className='flex flex-col space-y-20'>
        {projects.map((idx, link) => {
            return (
                <div key={idx}>
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        <div className='md:w-1/2'>
                            <Image/>
                        </div>
                        <div></div>
                    </div>
                </div>) })}
    </div>
    </section>
  )
}

export default Projects