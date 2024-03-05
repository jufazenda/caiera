import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const MainSection = () => {
  const handleEmailClick = () => {
    const email = 'exemplo@email.com' // inserir email correto
    const subject = 'Orçamentos'

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`

    window.location.href = mailtoLink
  }
  return (
    <section className='flex justify-between flex-col '>
      <div className='flex flex-col gap-5 justify-center items-center lg:items-start h-96 mb-24 md:mb-16 lg:mb-10'>
        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-bold text-center lg:text-start'>
          Caiera Dev
          <span>
            <TypeAnimation
              sequence={[', Inovação Agora', 1000]}
              wrapper='span'
              speed={50}
              className='text-4xl lg:text-6xl'
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className='text-white text-lg lg:text-xl text-center lg:text-start'>
          Consultorias e integrações de APIs ágeis para seu crescimento.
          Caiera Dev é a ponte para seu sucesso digital.
        </p>
        <Button
          variant='contained'
          onClick={handleEmailClick}
          className='normal-case text-black max-w-52 h-12 bg-white hover:bg-slate-100'
        >
          Faça um orçamento
        </Button>
      </div>
      <div className='flex justify-center absolute bottom-5 left-2/4 '>
        <Link href={''}>
          <Image
            src='/images/arrow.svg'
            alt={'Arrow Down'}
            width={10}
            height={10}
          />
        </Link>
      </div>
      <div className='flex justify-center absolute bottom-5 right-5 '>
        <Link href={''}>
          <Image
            src='/images/whats2.png'
            alt={'Whatsapp link'}
            width={60}
            height={60}
            className=' right-5'
          />
        </Link>
      </div>
    </section>
  )
}

export default MainSection
