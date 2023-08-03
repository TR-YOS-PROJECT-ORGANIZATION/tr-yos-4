import React from 'react'
import useInfoCalls from "../../hooks/useInfoCalls";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { setSearchParameters } from "../../features/cardSlice";


const Selections = () => {

  const { getUni, getCities, getAllDepartments } = useInfoCalls();
const [selectedCities, setSelectedCities] = useState([]);
const [selectedStatus, setSelectedStatus] = useState("all");
const [selectedUnivercities, setSelectedUnivercities] = useState(["kmlml"]);
const [selectedDepartments, setSelectedDepartments] = useState([]);
const { t, i18n } = useTranslation();
const dispatch = useDispatch();



  useEffect(() => {
    getUni();
    getCities();
    getAllDepartments();
  }, []);

  const { univercities, cities, allDepartments} = useSelector((state) => state.info);

  const filteredUniversities =
  selectedCities?.length > 0
    ? univercities?.filter(
        (uni) =>
          selectedCities
            ?.map((item) => {
             return item?.id;
            })
            .indexOf(uni.city) !== -1
      )
    : univercities;

const filteredDepartments =
  selectedUnivercities?.length > 0
    ? allDepartments?.filter(
        (department) =>
          selectedUnivercities
            ?.map((item) => {
              return item?.code;
            })
            .indexOf(department?.university.code) !== -1
      )
    : allDepartments?.filter(
        (department) =>
          filteredUniversities
            ?.map((item) => {
              return item?.code;
            })
            .indexOf(department?.university.code) !== -1
      );
      
      const handleSearchClick = () => {
        const searchObject = {
          selectedCities,
          selectedUnivercities,
          selectedDepartments,
        };
    
        dispatch(setSearchParameters(searchObject));
      };
    


  return (
   <>
      <MultiSelect
          className="max-w-full rounded-lg sm:max-w-md bg-white-500 p-2  border border-green-dark"
          onValueChange={setSelectedCities}
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
          onValueChange={setSelectedUnivercities}
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
          onValueChange={setSelectedDepartments}
          placeholder="Select Department"
        >
          {filteredDepartments?.map((item, index) => {
            return (
              <MultiSelectItem
                className="bg-white-500 "
                key={index}
                value={item}
              >
                {item?.department.en}
              </MultiSelectItem>
            );
          })}
        </MultiSelect>

        <div>
          <button
            onClick={handleSearchClick}
            className="mx-auto   max-sm:m-12 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-24 font-bold rounded  hover:bg-red-retro shadow-md"
          >
            {t("Search")}
          </button>
        </div>
   </>
  )
}

export default Selections