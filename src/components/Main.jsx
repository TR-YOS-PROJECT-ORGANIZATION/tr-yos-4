import React from "react";
import Slider from "react-slick";
import image1 from "../images/studentG.jpg";
import image2 from "../images/graduate.jpg";
import Select from "react-select";
import "../index.css";
import Checks from "./departmentComponents/Checks";
import Selections from "./departmentComponents/Selections";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cities = [
    { value: "Ankara", label: "Ankara" },
    { value: "Erzurum", label: "Erzurum" },
    { value: "Afyonkarahisar", label: "Afyonkarahisar" },
  ];

  const departments = [
    { value: "Biology", label: "Biology" },
    { value: "Chemistry Engineering", label: "Chemistry Engineering" },
    { value: "Archeology", label: "Archeology" },
  ];

  const universities = [
    {
      value: "Acıbadem Mehmet Ali Aydınlar Üniversity",
      label: "Acıbadem Mehmet Ali Aydınlar Üniversitesi",
    },
    {
      value: "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversity",
      label: "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversity",
    },
    { value: "Afyon Kocatepe University", label: "Afyon Kocatepe University" },
  ];

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="w-full h-[45rem] object-cover mt-20 "
            src={image1}
          ></img>
          <div className="absolute bg-gray-base bg-opacity-50 leading-relaxed text-center left-20 text-2xl w-96  top-0 rounded pt-64 h-[45rem]">
            <p className="leading-relaxed italic font-serif font-bold">
              Join this educational journey <br></br> with us <br></br> and
              discover your data!
            </p>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[45rem] object-cover" src={image2}></img>
          <div className="absolute bg-gray-base bg-opacity-50  text-center  left-20 text-2xl w-96  top-0 rounded pt-64 h-[45rem]">
            <p className=" leading-relaxed italic font-serif font-bold">
              Join this educational journey <br></br> with us <br></br> and
              discover your data!
            </p>
          </div>
        </div>
      </Slider>

      <div className="absolute bottom-20 md:right-36  flex md:flex-col sm:flex-row  sm:items-center lg:w-[38%] md:w-[70%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
        <div>
          <Select
            defaultValue={[cities[0]]}
            isMulti
            name="selectCity"
            options={cities}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2 max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px]  max-sm:pt-2"
            classNamePrefix="select"
            placeholder="Select City"
          />

          <Select
            defaultValue={[universities[0]]}
            isMulti
            name="selectUniversity"
            options={universities}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2  max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px] "
            classNamePrefix="select"
            placeholder="Select Univercity"
          />

          <Select
            defaultValue={[departments[0]]}
            isMulti
            name="selectDepartment"
            options={departments}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2 max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px] "
            classNamePrefix="select"
            placeholder="Select Department"
          />
        </div>

        <div>
          <button className="mx-auto  max-sm:m-12 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-24 font-bold rounded  hover:bg-red-retro shadow-md">
            Search
          </button>
        </div>
      </div>

      {/* <div className='absolute bottom-20 right-20 flex justify-evenly bg-green-dark rounded p-2'>
        <Select options={cities} className='w-48 m-2'/>
        <Select options={departments} className='w-48 m-2'/>
        <Select options={universities} className='w-48 m-2'/>
        <button className='m-2 bg-red-warm text-gray-base px-12 py-2 font-bold rounded'>Search</button>


        </div> */}
    </div>
  );
};

export default Main;
