import React from 'react'
import { PropsMenuOpen } from '../Props'
import NavLink from './NavLink'

const MenuOpen = ({ links }: PropsMenuOpen) => {
  return (
    <ul className='flex flex-col gap-14 p-8 items-center '>
      {links.map((link, index) => (
        <li
          key={index}
          className='font-semibold hover:text-dark w-20 rounded-md flex justify-center'
        >
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOpen
