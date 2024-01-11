import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const projects = [
    {
      name:"Medicare",
      description:"Medicare is a web app that helps you find a doctor and book an appointment depending on services and location.",
      image:"/medicare.png",
      tags: ["React", "Mongodb", "Express", "Tailwind", "Framer"],
      github:"https://github.com/AustinRado/medicare",
      link:"",
    },
    {
      name:"Portfolio",
      description:"Personal portfolio website",
      image:"/portfolio.png",
      tags: ["React", "Next.js", "Tailwind", "Framer"],
      github:"https://github.com/AustinRado/portfolio",
      link:"",
    },
    {
      name:"",
      description:"",
      image:"",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      github:"",
      link:"",
    },
  ];

const Projects = () => {
  return (
    <section>
    <h1 className="text-2xl text-[#030303] mt-[30px] text-center relative">Projects
        <hr className='w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
    </h1>
    <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
            return (
                <div key={idx}>
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        <div className='md:w-1/2'>
                            <Image
                            src={project.image}
                            alt=''
                            width={1000}
                            height={1000}
                            className='rounded-xl shadow-xl hover:opacity-70'
                            />
                        </div>
                        <div className='mt-8 md:w-1/2'>
                            <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                            
                            {/* Displaying tags */}
                            <div className='flex flex-row align-bottom space-x-2 mb-4'>
                            {project.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className='text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded'>
                            {tag}
                            </span>
                            ))}
                            </div>


                            <div className='flex flex-row align-bottom space-x-4'>
                               <Link href={project.github} target="_blank">
                                <AiFillGithub
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                               </Link>
                               <Link href={project.link} target="_blank">
                                <AiFillTwitterCircle
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                               </Link>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>) 
            })}
    </div>
    </section>
  )
}

export default Projects