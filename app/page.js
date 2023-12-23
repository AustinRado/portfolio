import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <NavBar/>
      <div className='container mx-auto px-12 py-4'>
      <HeroSection />
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  )
}
