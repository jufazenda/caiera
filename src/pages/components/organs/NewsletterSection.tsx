import React from 'react'
import StanInput from '../molecules/StanInput'

const NewsletterSection = () => {
  return (
    <section id='newsletter' className='w-full px-12 py-10 md:px-24 md:py-12  bg-dark flex justify-center flex-col items-center gap-6 md:gap-10 h-section'>
      <span className='text-center text-3xl md:text-4xl font-bold text-white text-wrap '>
        Receba atualizações sobre a Caiera Dev
      </span>
      <span className='text-center text-white text-md'>
        Novos serviços, descontos, novidades e materiais de aprendizado.
      </span>
      <StanInput
        button={true}
        placeholder='Insira seu e-mail'
        nameButton='Inscreva-se'
      />
    </section>
  )
}

export default NewsletterSection
