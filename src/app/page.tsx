import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="gradient-divider" />
        <About />
        <div className="gradient-divider" />
        <Projects />
        <div className="gradient-divider" />
        <Testimonials />
        <div className="gradient-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
