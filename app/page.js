import Image from 'next/image';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center" >
      <NavBar/>
      <div className='container mx-auto px-12 py-4'>
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  )
}
