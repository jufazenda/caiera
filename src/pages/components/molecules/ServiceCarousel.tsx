import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from '@mui/icons-material'

interface Item {
  text: string
}

const ServiceCarousel: React.FC = () => {
  const items: Item[] = [
    {
      text: 'Quero expressar minha imensa gratidão à equipe da Caiera Dev. Com vocês, cada desafio se tornou uma oportunidade para inovar. Agradeço pela paciência, criatividade e dedicação que trouxeram a nosso projeto. Vocês não apenas atenderam nossas expectativas, mas as superaram!',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dignissim pellentesque. Vestibulum vitae leo vel tellus condimentum auctor et eget velit. Maecenas at metus vehicula mi auctor suscipit. Suspendisse sed ligula eu ipsum aliquam euismod sed sed arcu. Ut eleifend urna non suscipit commodo. Suspendisse viverra pellentesque dignissim. Aliquam finibus orci ac odio vulputate, elementum consectetur velit volutpat. Cras eget elit sit amet sapien pretium auctor. Morbi luctus sem nibh, at pellentesque nunc suscipit ac. Morbi tincidunt euismod sem, nec hendrerit sem vestibulum quis. ',
    },
  ]

  const renderCarouselItems = (): JSX.Element[] => {
    return items.map((item, i) => <Item key={i} item={item} />)
  }

  const Item: React.FC<{ item: Item }> = ({ item }) => {
    return (
      <div className='flex w-full flex-col min-h-max lg:h-400 justify-center items-center'>
        <div>
          <Image
            src='/images/quotation.svg'
            alt={'Quotation Icon'}
            width={60}
            height={60}
          />
        </div>

        <span className='text-dark px-24 sm-xl:px-32 md:px-40 lg:px-96 text-center py-16 '>
          {item.text}
        </span>
      </div>
    )
  }

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      navButtonsProps={{
        style: {
          borderRadius: '50%',
        },
      }}
      NextIcon={
        <KeyboardArrowRightOutlined
          style={{
            color: 'rgb(156 163 175)',
            fontSize: 50,
          }}
        />
      }
      PrevIcon={
        <KeyboardArrowLeftOutlined
          style={{
            color: 'rgb(156 163 175)',
            fontSize: 50,
          }}
        />
      }
    >
      {renderCarouselItems()}
    </Carousel>
  )
}

export default ServiceCarousel
