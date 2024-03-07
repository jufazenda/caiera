import { Button } from '@mui/material'
import React from 'react'
import { PropsEmailButton } from '../Props'

const EmailButton = ({ email, subject, text }: PropsEmailButton) => {
  const handleEmailClick = () => {
    caches

    const mailtoLink = subject
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`

    window.location.href = mailtoLink
  }

  return (
    <Button
      variant='contained'
      onClick={handleEmailClick}
      className='normal-case text-black max-w-52 h-12 font-bold rounded-sm bg-white hover:bg-slate-100'
    >
      {text}
    </Button>
  )
}

export default EmailButton
