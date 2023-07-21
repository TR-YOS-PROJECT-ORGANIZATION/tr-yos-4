import React, { useEffect, useState, useTransition } from "react";
import Slider from "react-slick";
import image1 from "../images/studentG.jpg";
import image2 from "../images/graduate.jpg";
import Select from "react-select";
import "../index.css";

import { useTranslation } from "react-i18next";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import { MultiSelect,MultiSelectItem , SelectItem} from "@tremor/react";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import '../../src/App.css'



const Main = () => {

  const { t, i18n } = useTranslation();

  
  const {getUni , getCities, getDepartments} = useInfoCalls();

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedUnivercities, setSelectedUnivercities] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);



  useEffect(()=>{
  
    getUni(),
    getCities(),
    getDepartments()
 
  },[])

  const {univercities, cities, departments , loading} = useSelector((state)=>state.info);

 console.log(univercities,cities,departments);

  console.log(selectedUnivercities);
  console.log(selectedCities);

  const filteredCities = selectedCities.length > 0 && cities?.filter((item) => item?.en === (selectedCities?.map((item)=>item)));

  // const filteredUnivercities = univercities.filter((item)=> item?.code === filteredCities[0]?.id)

console.log(filteredCities);

console.log(loading);




//     const filteredUnivercities = univercities?.filter((item)=>filteredCities?.includes(item?.code));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   const citiest = [
     { value: "Ankara", label: "Ankara" },
     { value: "Erzurum", label: "Erzurum" },
     { value: "Afyonkarahisar", label: "Afyonkarahisar" },
     { value: "Biology", label: "Biology" },
     { value: "Chemistry Engineering", label: "Chemistry Engineering" },
     { value: "Archeology", label: "Archeology" },
   ]

   
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
              {t("Join this educational journey")} <br></br> {t("with us")} <br></br> {t("and discover your data!")}
            </p>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[45rem] object-cover mt-20" src={image2}></img>
          <div className="absolute bg-gray-base bg-opacity-50  text-center  left-20 text-2xl w-96  top-0 rounded pt-64 h-[45rem]">
            <p className=" leading-relaxed italic font-serif font-bold">
            {t("Join this educational journey")} <br></br> {t("with us")} <br></br> {t("and discover your data!")}
            </p>
          </div>
        </div>
      </Slider>

    

       <div className="absolute bottom-20  md:right-36  flex md:flex-col sm:flex-row  sm:items-center lg:w-[38%] md:w-[70%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
      
       { loading  &&
           <Dots color="#ffffff" size={32} speed={1} animating={true} />
      }
      
      
      { cities?.length > 0 &&
       <MultiSelect
          className="max-w-full rounded-lg sm:max-w-md bg-white-500 p-2  border border-green-dark"
          onValueChange={"" || setSelectedCities}
          placeholder="Select City"
        >
          {cities?.map((item,index) => (
            <MultiSelectItem className=" rounded-md bg-white-500" key={index} value={item.en}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect> }

        { univercities?.length > 0 &&
       <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2  border border-green-dark"
          onValueChange={"" || setSelectedUnivercities}
          placeholder="Select Univercity"
        >
          {univercities?.map((item,index) => (
            <MultiSelectItem className="bg-white-500 " key={index} value={item.en}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect> }

        { departments?.length > 0 &&
       <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2 border border-green-dark mb-5"
          onValueChange={setSelectedDepartments}
          placeholder="Select Department"
        >
          {departments?.map((item) => (
            <MultiSelectItem className="bg-white-500 " key={item.id} value={item.en}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect> }
{/* 
        <MultiSelect
          className="max-w-full sm:max-w-md bg-white-500"
          onValueChange={setSelectedUnivercities}
          placeholder="Select University"
        >
          {univercities?.map((item) => (
            <MultiSelectItem className="bg-white-500" key={item.en} value={item.en}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        */}
       
       
       
        {/* <div>
          <Select
            defaultValue={[citiest[0]]}
            isMulti
            name="selectCity"
            options={citiest}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2 max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px]  max-sm:pt-2"
            classNamePrefix="select"
            placeholder="Select City"
          />

          <Select
            defaultValue={[citiest[0]]}
            isMulti
            name="selectUniversity"
            options={citiest}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2  max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px] "
            classNamePrefix="select"
            placeholder="Select Univercity"
          />

          <Select
            defaultValue={[citiest[0]]}
            isMulti
            name="selectDepartment"
            options={citiest}
            className="basic-multi-select  max-sm:text-xs md:m-5 sm:m-2 max-sm:m-1 text-left shadow-md lg:text-sm md:text-sm sm:text-xs sm:w-[500px] lg:w-96 max-sm:w-[400px] "
            classNamePrefix="select"
            placeholder="Select Department"
            
          />
        </div>
 */}
        <div>
          <button className="mx-auto   max-sm:m-12 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-24 font-bold rounded  hover:bg-red-retro shadow-md">
            {t("Search")}
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
