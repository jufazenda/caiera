import MainSection from './components/MainSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main
      className={
        'flex min-h-screen flex-col w-full bg-gradient-to-br from-purple to-pink'
      }
    >
      <Navbar />
      <div className='w-full mx-auto px-12 py-6 md:px-24 md:py-12 lg:px-48 lg:py-16  relative'>
        <MainSection />
      </div>
    </main>
  )
}
