// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector,useDispatch } from "react-redux";
import OneCard from "../components/card/OneCard";
import i18next, { t } from "i18next";
import useCardCalls from "../hooks/useCardCalls";
import { Dots } from "react-activity";
import { MultiSelectItem } from "@tremor/react";
import { MultiSelect } from "@tremor/react";




function Departments() {

  const { allDepartments } = useSelector((state) => state.info);
  const { getAllDepartments } = useInfoCalls();
  const [department, setDepartment] = useState();
  const { searchParameters } = useSelector((state) => state.card);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    getAllDepartments();
  }, []);


  useEffect(() => {
    
    if (searchParameters?.selectedDepartments ) {
       

      // const filteredDepartments = allDepartments.filter((d) => {
      //   return (
      //     selectedDepartments.map((sd) => sd.id).indexOf(d.department.code) !==
      //       -1 && selectedCities.map((sc) => sc.id).indexOf(d.city.code) !== -1
      //   );
      // });

      // console.log(" filtered ", filteredDepartments);
      // setDepartment(filteredDepartments);

     return setDepartment(searchParameters?.selectedDepartments);

    } else {

     return setDepartment(allDepartments?.slice(71, 89));
    }
  }, [searchParameters]);

  




  if(!allDepartments ) return <Dots />


  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
       
          
            <div className="m-5 md:right-36  flex md:flex-col sm:flex-row  sm:items-center lg:w-[38%] md:w-[70%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
            <Selections  />


           </div>

          {/* <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
            <form
              method="POST"
              className="border shadow-lg md:mt-36 rounded-lg "
            >
              {!(searchParameters?.selectedCities?.length > 0) && (
                <>
                  <Selections />
                  <div className="flex flex-row  justify-end sm:justify-start md:justify-center md: w-full bg-green-dark rounded ">
                    <button
                      name="searchDepartments"
                      type="submit"
                      className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm  max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 sm:w-24 font-bold hover:bg-red-retro shadow-md md:p-4 md:w-full rounded-md"
                    >
                      {t("Search")}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div> */}

          {/* <div className="absolute bottom-20  md:right-36  flex md:flex-col sm:flex-row  sm:items-center lg:w-[38%] md:w-[70%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
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
      </div> */}


          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">
                  {t("Our Departments")}
                </h2>
                <p>
                  {t("Our Departments")} {t("Our Departments")}{" "}
                  {t("Our Departments")}...
                </p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">
              {department?.map((element) => {
                return (
                  <OneCard
                    key={element.id}
                    item={element}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Departments;
