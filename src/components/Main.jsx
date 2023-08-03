
// eslint-disable-next-line no-unused-vars
import React, { useEffect} from "react";
import Slider from "react-slick";
import image1 from "../images/studentG.jpg";
import image2 from "../images/graduate.jpg";
import "../index.css";
import { useTranslation } from "react-i18next";
import useInfoCalls from "../hooks/useInfoCalls";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";

import "../../src/App.css";
import Selections from "./departmentComponents/Selections";

const Main = () => {
  const { t } = useTranslation();
  const { getUni, getCities, getAllDepartments } = useInfoCalls();

  useEffect(() => {
    getUni(), getCities(), getAllDepartments();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="w-full h-[45rem] object-cover mt-20 "
            src={image1}
          ></img>
          <div className="absolute bg-gray-base bg-opacity-50 leading-relaxed text-center left-20 text-2xl w-96  top-20 rounded pt-64 h-[45rem]">
            <p className="leading-relaxed italic font-serif font-bold">
              {t("Join this educational journey")} <br></br> {t("with us")}{" "}
              <br></br> {t("and discover your data!")}
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[45rem] object-cover mt-20"
            src={image2}
          ></img>
          <div className="absolute bg-gray-base bg-opacity-50  text-center  left-20 text-2xl w-96  top-0 rounded pt-64 h-[45rem]">
            <p className=" leading-relaxed italic font-serif font-bold">
              {t("Join this educational journey")} <br></br> {t("with us")}{" "}
              <br></br> {t("and discover your data!")}
            </p>
          </div>
        </div>
      </Slider>

      <div className="absolute bottom-20  md:right-36  flex md:flex-col sm:flex-row  sm:items-center lg:w-[38%] md:w-[70%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
   
     <Selections />
    
      </div>

    </div>
  );
};

export default Main;
