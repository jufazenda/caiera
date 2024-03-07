import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavLink from '../atoms/NavLink'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import MenuOpen from '../atoms/MenuOpen'

const navLinks = [
  { title: 'Sobre', href: '/#sobre', sectionId: 'sobre' },
  { title: 'Serviços', href: '/#servicos', sectionId: 'servicos' },
  { title: 'Contato', href: '/#contato', sectionId: 'contato' },
  { title: 'Newsletter', href: '/#newsletter', sectionId: 'newsletter' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1200
      if (!isMobileView) {
        setNavbarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={
        header
          ? 'bg-shadow-black w-full fixed z-20 top-0 px-12 md:px-24 lg:px-48 transition-colors duration-400'
          : 'bg-transparent w-full fixed z-20 top-0 px-12 md:px-24 lg:px-48 transition-colors duration-400'
      }
    >
      <div className='flex flex-wrap items-center justify-between mx-auto py-8'>
        <Link href={'/'}>
          <Image
            src='/images/caiera.png'
            alt={'Whatsapp link'}
            width={200}
            height={60}
          />
        </Link>
        <div className='mobile-menu flex lg:hidden'>
          {!navbarOpen ? (
            <IconButton
              className='text-white'
              onClick={() => setNavbarOpen(true)}
            >
              <MenuIcon className='text-4xl' />
            </IconButton>
          ) : (
            <IconButton
              className='text-white'
              onClick={() => setNavbarOpen(false)}
            >
              <CloseIcon className='text-4xl' />
            </IconButton>
          )}
        </div>
        <div className='menu hidden lg:flex lg:w-auto ' id='navbar'>
          <ul className='flex gap-14'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className='text-lg font-semibold hover:text-dark w-20 rounded-md flex justify-center'
              >
                <NavLink
                  href={link.href}
                  title={link.title}
                  sectionId={link.sectionId}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOpen links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
