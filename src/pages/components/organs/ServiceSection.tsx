import React from 'react'
import ServiceInfo from '../molecules/ServiceInfos'
import ServiceNumbers from '../molecules/ServiceNumbers'
import MyCarousel from '../molecules/ServiceCarousel'
import ServiceCarousel from '../molecules/ServiceCarousel'

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

const numbers = [
  { number: '+12k', text: 'Requisições Diárias' },
  { number: '+20', text: 'Clientes Satisfeitos' },
  { number: '4', text: 'Anos de Experiência' },
  { number: '24h', text: 'Suporte' },
]

const ServiceSection = () => {
  return (
    <section
      id='servicos'
      className='w-full mx-auto px-12 md:px-24 md:py-12 lg:px-48 lg:py-16 bg-white text-dark'
    >
      <div className='flex justify-center flex-col items-center lg:items-start lg:h-section w-full my-20 md:my-16 lg:my-0 gap-20 text-dark'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-36 w-full'>
          {infos.map((info, index) => (
            <ServiceInfo
              type={info.type}
              title={info.title}
              text={info.text}
              key={index}
            />
          ))}
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-36 w-full'>
          {numbers.map((number, index) => (
            <ServiceNumbers
              number={number.number}
              text={number.text}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className='w-full pb-12 '>
        <ServiceCarousel />
      </div>
    </section>
  )
}

export default ServiceSection
