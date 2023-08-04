
// eslint-disable-next-line no-unused-vars
import React from "react";
import UniDetailSlider from "react-slick";


import image1 from "../../images/unidet5.jpeg"
import image2 from "../../images/unidet2.jpeg"
import image3 from "../../images/unidet4.jpeg"
import image4 from "../../images/unidet3.jpeg"


const UniSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    
  };
  return (
    <div className="mt-32">
      <UniDetailSlider {...settings}>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src={image1}></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src={image2}></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src={image3}></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src={image4}></img>
        </div>
      </UniDetailSlider>
    </div>
    
  );
};
export default UniSlider;