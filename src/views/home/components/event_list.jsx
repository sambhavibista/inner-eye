import React from 'react'
import EventCard from './event_card'
import { Box  } from '@mui/material'
import Slider from 'react-slick';

function EventList() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        autoPlay:true,
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
        <Slider{...settings}>
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    </Slider>
    </div>
  )
}

export default EventList