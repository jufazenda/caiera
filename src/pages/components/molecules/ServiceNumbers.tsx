import React from 'react'
import { PropsServiceNumbers } from '../Props'

const ServiceNumbers = ({ number, text }: PropsServiceNumbers) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <span className=' text-5xl font-semibold '>{number} </span>
      <span className='text-center font-bold '>{text}</span>
    </div>
  )
}

export default ServiceNumbers
