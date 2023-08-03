import React from 'react'
import useInfoCalls from "../../hooks/useInfoCalls";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { setSearchParameters } from "../../features/cardSlice";
import { useNavigate } from 'react-router-dom';

const Selections = () => {
  const { getUni, getCities, getAllDepartments } = useInfoCalls();
  // const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCities, setSelectedCities] = useState();
  const [selectedUnivercities, setSelectedUnivercities] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    getUni();
    getCities();
    getAllDepartments();
  }, []);
  const { univercities, cities, allDepartments } = useSelector((state) => state.info);
  const filteredUniversities =
    selectedCities?.length > 0
      ? univercities?.filter(
        (uni) =>
          selectedCities?.map((item) => {
            return item.id;
          })
            .indexOf(uni.city) !== -1
      ) : univercities;

  const filteredDepartments =
    selectedUnivercities?.length > 0
      ? allDepartments?.filter(
        (department) =>
          selectedUnivercities
            ?.map((item) => {
              return item.code;
            })
            .indexOf(department?.university.code) !== -1
      )
      : allDepartments?.filter(
        (department) => department.en);

  // allDepartments?.filter((department)=>department.department.en)
  // allDepartments?.filter(
  //   (department) =>
  //     filteredUniversities
  //       ?.map((item) => {
  //         return item?.code;
  //       })
  //       .indexOf(department?.university.code) !== -1
  // );


  const handleSearchClick = () => {
    const searchObject = {
      selectedCities,
      selectedUnivercities,
      selectedDepartments,
    };
    dispatch(setSearchParameters(searchObject));
    navigate("/departments")
  };

  return (
  <div className="bottom-20 md:flex md:flex-col md:justify-center md:items-center sm:flex-col  sm:items-center md:w-[100%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
    <MultiSelect
      className="max-w-full rounded-lg sm:max-w-md bg-white-500 p-2  border border-green-dark"
      onValueChange={"" || setSelectedCities}
      placeholder="Select City"
    >
      {cities?.map((item, index) => {
        return (
          <MultiSelectItem
            className="rounded-md bg-white-500"
            key={index}
            value={item}
          >
            {item.en}
          </MultiSelectItem>
        );
      })}
    </MultiSelect>

    <MultiSelect
      className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2  border border-green-dark"
      onValueChange={"" || setSelectedUnivercities}
      placeholder="Select Univercity"
    >
      {filteredUniversities?.map((item, index) => {
        return (
          <MultiSelectItem
            className="bg-white-500 "
            key={index}
            value={item}
          >
            {item.en}
          </MultiSelectItem>
        );
      })}
    </MultiSelect>


    <MultiSelect
      className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-10 p-2 border border-green-dark mb-5"
      onValueChange={"" || setSelectedDepartments}
      placeholder="Select Department"
    >
      {filteredDepartments?.map((item, index) => {
        return (
          <MultiSelectItem
            className="bg-white-500 "
            key={index}
            value={item}
          >
            {item.department.en}
          </MultiSelectItem>
        );
      })}
    </MultiSelect>
    <div>
      <button
        onClick={handleSearchClick}
        className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-96 font-bold rounded  hover:bg-red-retro shadow-md  lg:p-4 md:p-4 mt-5"
      >
        {t("Search")}
      </button>
    </div>
  </div>
)
}
export default Selections