import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import EmailButton from '../molecules/EmailButton'

const variantMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const MainSection = () => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      }}
      initial='hidden'
      animate='show'
      className='flex justify-between flex-col w-full mx-auto px-10 py-6 md:px-24 md:py-12 lg:px-48 lg:py-16 bg-gradient-to-br from-purple to-pink relative '
    >
      <motion.div
        variants={variantMotion}
        className='flex flex-col gap-5 justify-center items-center lg:items-start h-section mb-24 md:mb-16 lg:mb-10'
      >
        <h1 className='text-white mb-4 text-title lg:text-6xl font-bold text-center lg:text-start'>
          Caiera Dev
          <span>
            <TypeAnimation
              sequence={[', Inovação Agora', 1000]}
              wrapper='span'
              speed={50}
              className='text-title lg:text-6xl'
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className='text-white text-lg lg:text-xl text-center lg:text-start'>
          Consultorias e integrações de APIs ágeis para seu crescimento.
          Caiera Dev é a ponte para seu sucesso digital.
        </p>
        <EmailButton
          email='exemplo@email.com'
          subject='Orçamentos'
          text='Faça um orçamento'
        />
      </motion.div>
      <motion.div
        variants={variantMotion}
        className='flex justify-center absolute bottom-5 left-2/4 '
      >
        <Link href={'/#sobre'}>
          <Image
            src='/images/arrow.svg'
            alt={'Arrow Down'}
            width={10}
            height={10}
          />
        </Link>
      </motion.div>
      <motion.div
        variants={variantMotion}
        className='flex justify-center absolute bottom-5 right-5 '
      >
        <Link href={''}>
          <Image
            src='/images/whats2.png'
            alt={'Whatsapp link'}
            width={60}
            height={60}
            className=' right-5'
          />
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default MainSection
