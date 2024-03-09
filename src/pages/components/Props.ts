// @ts-nocheck
// pages/components/Props.ts

export interface PropsNavLink {
  href: string
  title: string
  sectionId?: string
}

export interface PropsMenuOpen {
  links: PropsNavLink[]
}

export interface PropsServiceInfo {
  type: string
  title: string
  text: string
}
export interface PropsServiceNumbers {
  number: string
  text: string
}

export interface PropsEmailButton {
  email: string
  subject?: string
  text: string
}

export interface PropsStanInput {
  placeholder: string
  button: boolean
  nameButton: string
}
