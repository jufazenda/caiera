import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section
      id='sobre'
      className='w-full px-12 py-10 md:px-24 md:py-12 origin-bottom bg-dark flex justify-center flex-col items-center gap-12 lg:gap-20 lg:h-section'
    >
      <div className='w-full flex justify-center'>
        <Image
          src='/images/logo_text.png'
          alt={'Logo com texto'}
          width={600}
          height={500}
        />
      </div>
      <span className='text-center lg:mx-20 text-white text-wrap'>
        Na Caiera Dev, construimos mais do que software; construimos
        confiança. Com quatro anos de atuação no mercado, nossa
        especialidade é fornecer uma arquitetura de software sólida,
        consultoria estratégica, e integrações eficientes, tudo entregue
        com agilidade. Estamos sempre prontos para atender suas
        necessidades, com suporte disponível 24 horas por dia, garantindo
        que sua operação nunca pare. Escolha a parceria que entende a
        importância da confiança na tecnologia.
      </span>
    </section>
  )
}

export default AboutSection
