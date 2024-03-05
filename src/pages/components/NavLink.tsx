import Link from 'next/link'
import React from 'react'
import { PropsNavLink } from './Props'

const NavLink = ({ href, title }: PropsNavLink) => {
  return <Link href={href}>{title}</Link>
}

export default NavLink
