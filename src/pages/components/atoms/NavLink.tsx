import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PropsNavLink } from '../../../types/Props'

const NavLink = ({ href, title, sectionId }: PropsNavLink) => {
  const [active, setActive] = useState(false)
  const [colorClass, setColorClass] = useState('text-white')

  useEffect(() => {
    const handleScroll = () => {
      if (sectionId) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section?.getBoundingClientRect()
          if (
            rect.top <= window.innerHeight * 0.2 &&
            rect.bottom >= window.innerHeight * 0.2
          ) {
            setActive(true)
          } else {
            setActive(false)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionId])

  useEffect(() => {
    if (sectionId === 'sobre' || sectionId === 'newsletter') {
      setColorClass('text-purple')
    } else {
      setColorClass('text-dark')
    }
  }, [sectionId])

  return (
    <Link
      href={href}
      passHref
      scroll={false}
      className={active ? colorClass : 'text-white'}
    >
      {title}
    </Link>
  )
}

export default NavLink
