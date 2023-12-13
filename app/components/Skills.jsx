import React from 'react'
import { skillsData } from '../lib/data'

const Skills = () => {
  return (
    <section>
        <div className='mt-[25px] pt-6'>
        <h1 className='text-center my-6' >Skills</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
            <li
                className="bg-white borderWhite rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
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