import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black flex justify-center flex-col items-center h-mini-footer sm:h-footer gap-6'>
      <div className='flex flex-col gap-10 '>
        <div className='w-full flex justify-center'>
          <Image
            src='/images/logo.png'
            alt={'Logo com texto'}
            width={100}
            height={100}
          />
        </div>
        <div className='w-full flex justify-center gap-5'>
          <Link href={'https://www.instagram.com/'} target='_blank'>
            <Image
              src='/images/instagram.webp'
              alt={'Logo com texto'}
              width={35}
              height={35}
            />
          </Link>
          <Link href={'https://www.linkedin.com/'} target='_blank'>
            <Image
              src='/images/linkedin.png'
              alt={'Logo com texto'}
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>

      <span className='text-center lg:mx-20 text-gray-300 text-wrap'>
        &copy; Copyright Caiera Dev - Todos os direitos reservados
      </span>
    </footer>
  )
}

export default Footer
