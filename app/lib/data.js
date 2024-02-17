import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

export const skillsData = [
    "TypeScript",
    "Express",
    "Git",
    "Bash",
    "Redux",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Postman",
    "Tailwind",
    "Material UI",
    "Bootstrap",
    "Framer Motion",
  ];

  export const socialLinks = [
    {
      path: "https://github.com/AustinRado/",
      display:<AiFillGithub className='hover:-translate-y-1 transition-transform w-7 h-7'/>,
    },
    {
      path: "https://twitter.com/omburo_",
      display: <AiFillTwitterCircle className='hover:-translate-y-1 transition-transform w-7 h-7' />,
    },
    {
      path: "https://www.linkedin.com/in/austin-omburo-527919268/",
      display: <RiLinkedinFill className='hover:-translate-y-1 transition-transform w-7 h-7' />,
    },
  ]

  export const projects = [
    {
      name:"Medicare",
      description:"Medical booking application",
      image:"",
      github:"https://github.com/AustinRado/medicare",
      link:"",
    },
    {
      name:"Portfolio",
      description:"Personal portfolio website",
      image:"",
      github:"https://github.com/AustinRado/portfolio",
      link:"",
    },
    {
      name:"",
      description:"",
      image:"",
      github:"",
      link:"",
    },
  ]