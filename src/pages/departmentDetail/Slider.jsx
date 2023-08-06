import React from "react";
import Slider from "react-slick";
import image1 from "../../images/uni1.jpg"
import image2 from "../../images/uni3.jpg"
import image3 from "../../images/uni4.jpg"
import image4 from "../../images/uni7.jpg"



const SliderPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    
    // initialSlide: 0,
    
  };
  return (
    <div className="mt-32">
      <Slider {...settings}>
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
      </Slider>
    </div>
    
  );
};
export default SliderPage;