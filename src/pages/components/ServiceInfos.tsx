import React from 'react'

import { Raleway } from 'next/font/google'
import { PropsServiceInfo } from './Props'

const raleway = Raleway({ subsets: ['latin'], weight: '500' })

const ServiceInfo = ({ type, title, text }: PropsServiceInfo) => {
  return (
    <div className='flex flex-col gap-5 '>
      <span
        className={`${raleway.className} uppercase text-gray-400 text-sm tracking-widest`}
      >
        {type}
      </span>
      <span className=' text-3xl font-bold '>{title} </span>
      <span className='text-justify '>{text}</span>
    </div>
  )
}

export default ServiceInfo
