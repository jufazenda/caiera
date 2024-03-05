import AboutSection from './components/AboutSection'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import ServiceSection from './components/ServiceSection'

export default function Home() {
  return (
    <main className={'flex min-h-screen flex-col w-full '}>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ServiceSection />
    </main>
  )
}
