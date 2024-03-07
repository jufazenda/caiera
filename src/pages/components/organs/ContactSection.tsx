import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import EmailButton from '../molecules/EmailButton'

const ContactSection = () => {
  return (
    <section id='contato' className='w-full bg-gradient-to-br from-pink to-purple flex justify-center flex-col items-center h-section'>
      <div className=" w-full h-full bg-[url('/images/wavy-bg.svg')]  bg-no-repeat bg-center bg-cover  ">
        <div className='w-full h-full flex justify-center items-center flex-col gap-11 px-10'>
          <span className='text-center text-3xl font-bold text-white text-wrap '>
            Preparado para começar ?
          </span>
          <EmailButton
            email='exemplo@email.com'
            text='Entre em Contato!'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
