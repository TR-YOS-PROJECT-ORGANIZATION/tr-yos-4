import React from "react";
import Slider from "react-slick";


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const SliderPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src="images/uni1.jpg"></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src="images/uni3.jpg"></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src="images/uni7.jpg"></img>
        </div>
        <div className="relative">
          <img className="w-full h-[25rem] object-cover" src="images/uni4.jpg"></img>
        </div>
      </Slider>
    </div>
    
  );
};
export default SliderPage;