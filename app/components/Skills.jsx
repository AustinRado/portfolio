import React from 'react'
import { skillsData } from '../lib/data'

const Skills = () => {
  return (
    <section>
        <div className='mt-[25px] pt-6'>
        <h1 className='text-2xl text-[#030303] mb-4 text-center' >Skills
        <hr className='w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>  
        </h1>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {skillsData.map((skill, index) => (
            <li
                className="bg-white border border-[#33353F] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                custom={index}
            >
                {skill}
            </li>
            ))}
        </ul>
        </div>
    </section>
  )
}

export default Skills