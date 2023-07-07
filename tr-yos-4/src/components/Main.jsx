import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../images/education.jpg'
import image2 from '../images/education2.jpg'
import { useState } from "react";
import Select from "react-tailwindcss-select";





const Main = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div className='w-full relative'>
        <Slider {...settings}>
          <div>
            <img className='w-full h-[45rem]' src={image1}></img>
          </div>
          <div>
            <img className='w-full h-[45rem]' src={image2}></img>
          </div>
     
        </Slider>

    </div>
  )
}

export default Main