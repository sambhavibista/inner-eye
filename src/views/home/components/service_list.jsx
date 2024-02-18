import React from 'react'
import ServiceCard from './service_card'
import Slider from 'react-slick';
import { Box } from '@mui/material'


function ServiceList() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='center__carousel'>
        <Slider {...settings}>
    <ServiceCard />
    <ServiceCard />
    <ServiceCard />
    <ServiceCard />    
    <ServiceCard />    
    <ServiceCard />    
       

    </Slider>
    </div>
  )
}

export default ServiceList