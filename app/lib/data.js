import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';


export const skillsData = [
    "TypeScript",
    "React",
    "Next.js",
    "Node",
    "Git",
    "Tailwind",
    "Database",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "Python",
    "Django",
    "Flask",
    "Bash",
    "Docker",
    "Puppet",
    "Postman",
    "AWS",
    "Framer Motion",
  ]

  export const socialLinks = [
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
