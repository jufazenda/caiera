export interface PropsNavLink {
  href: string
  title: string
}

export interface PropsMenuOpen {
  links: PropsNavLink[]
}

export interface PropsServiceInfo {
  type: string
  title: string
  text: string
}
