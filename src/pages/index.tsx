import AboutSection from './components/organs/AboutSection'
import MainSection from './components/organs/MainSection'
import Navbar from './components/organs/Navbar'
import ServiceSection from './components/organs/ServiceSection'
import ContactSection from './components/organs/ContactSection'
import NewsletterSection from './components/organs/NewsletterSection'
import Footer from './components/organs/Footer'
import { useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={'flex min-h-screen flex-col w-full '}>
        <MainSection />
        <AboutSection />
        <ServiceSection />
        <ContactSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  )
}
