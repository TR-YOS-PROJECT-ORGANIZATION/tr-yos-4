import React, { useEffect, useState} from "react";
import Slider from "react-slick";
import image1 from "../images/studentG.jpg";
import image2 from "../images/graduate.jpg";
import "../index.css";
import { useTranslation } from "react-i18next";
import useInfoCalls from "../hooks/useInfoCalls";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect, MultiSelectItem} from "@tremor/react";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";

import "../../src/App.css";
import { setSearchParameters } from "../features/cardSlice";

const Main = () => {
  const { t, i18n } = useTranslation();
  const { getUni, getCities, getDepartments } = useInfoCalls();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCities, setSelectedCities] = useState();
  const [selectedUnivercities, setSelectedUnivercities] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    getUni(), getCities(), getDepartments();
  }, []);

  const { univercities, cities, departments, loading } = useSelector(
    (state) => state.info
  );

  const filteredUniversities =
    selectedCities?.length > 0
      ? univercities?.filter(
          (uni) =>
            selectedCities?.map((item) => item.id).indexOf(uni.city) !== -1
        )
      : univercities;

  const filteredDepartments =
    selectedUnivercities?.length > 0
      ? departments?.filter(
          (department) =>
            selectedUnivercities
              ?.map((item) => item.code)
              .indexOf(department.id) !== -1
        )
      : departments?.filter(
          (department) =>
            filteredUniversities
              ?.map((item) => item.code)
              .indexOf(department.id) !== -1
        );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSearchClick = () => {
    const searchObject = {
      selectedCities,
      selectedUnivercities,
      selectedDepartments,
    };

    dispatch(setSearchParameters(searchObject));

    navigate('/departments')
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
        <MultiSelect
          className="max-w-full rounded-lg sm:max-w-md bg-white-500 p-2  border border-green-dark"
          onValueChange={"" || setSelectedCities}
          placeholder="Select City"
        >
          {cities?.map((item, index) => (
            <MultiSelectItem
              className="rounded-md bg-white-500"
              key={index}
              value={item}
            >
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2  border border-green-dark"
          onValueChange={"" || setSelectedUnivercities}
          placeholder="Select Univercity"
        >
          {filteredUniversities?.map((item, index) => (
            <MultiSelectItem className="bg-white-500 " key={index} value={item}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2 border border-green-dark mb-5"
          onValueChange={"" || setSelectedDepartments}
          placeholder="Select Department"
        >
          {filteredDepartments?.map((item, index) => (
            <MultiSelectItem className="bg-white-500 " key={index} value={item}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <div>
          <button
            onClick={handleSearchClick}
            className="mx-auto   max-sm:m-12 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-24 font-bold rounded  hover:bg-red-retro shadow-md"
          >
            {t("Search")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
