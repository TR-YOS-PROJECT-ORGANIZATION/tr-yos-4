import React from 'react'
import Slider from "react-slick";
import image1 from '../images/DepartmentFoto.jpg'


const Main = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 550,
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
            <img className='w-full h-[45rem]' src={image1}></img>
          </div>

        </Slider>

    </div>
  )
}

export default Main