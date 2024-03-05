import React from 'react'
import ServiceInfo from './ServiceInfos'

const infos = [
  {
    type: 'Consultoria',
    title: 'Orientação Estratégica',
    text: 'Nossa consultoria especializada navega pela complexidade tecnológica para impulsionar a transformação digital do seu negócio.',
  },
  {
    type: 'Integrações',
    title: ' Conexões que Impulsionam',
    text: 'Criamos integrações de APIs com alto desempenho para unificar seus sistemas e acelerar o crescimento empresarial.',
  },
  {
    type: 'Arquitetura',
    title: 'Estruturas para o Futuro',
    text: 'Desenhamos arquiteturas de sistemas que são o alicerce para soluções escaláveis, seguras e inovadoras.',
  },
]

const ServiceSection = () => {
  return (
    <section className='w-full mx-auto px-12 py-6 md:px-24 md:py-12 lg:px-48 lg:py-16 bg-white'>
      <div className='flex justify-center flex-col items-center lg:items-start lg:h-screen my-20 md:my-16 lg:my-0 gap-20 text-dark'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-36 w-f'>
          {infos.map((info, index) => (
            <ServiceInfo
              type={info.type}
              title={info.title}
              text={info.text}
              key={index}
            />
          ))}
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default ServiceSection
