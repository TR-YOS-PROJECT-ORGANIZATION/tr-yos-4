// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
// import backgroundImage from "../images/university.jpg";
import university from "../../images/university.jpg";
import { useEffect } from "react";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getUniSuccess } from "../../features/infoSlice";
import axios from "axios";
import UniCard from "../../components/card/UniCard"
import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";
const UniversitiesPage = () => {
  const { getUni } = useInfoCalls();
  
  const {t} = useTranslation();
  useEffect(() => {
    getUni();
  }, []);
  const{ univercities} = useSelector((state) => state.info);
  const [currentPage, setCurrentPage] = useState(1);
  const [universitiesPerPage, setuniversitiesPerPage] = useState(20)
  console.log(univercities);

  const indexOfLastUni = currentPage * universitiesPerPage;

    const indexOfFirstuni= indexOfLastUni- universitiesPerPage;
    const currentUniversities =univercities?.slice(indexOfFirstuni, indexOfLastUni);
    const totalPagesNum = Math.ceil(univercities?.length / universitiesPerPage)




  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <img className="w-screen h-96" src={university} alt="#" />
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-gray-800 bg-opacity-60">
            <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl m-2 ">
              {t("Universities")}
            </h1>
            <h2 className="text-gray-100 text-xl sm:text-2xl lg:text-3xl m-2">
              {t("You can find all universities and departments in this list.")}
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {
      currentUniversities?.map((item)=>
        <div key={item.id}>
        <UniCard  pages = {totalPagesNum} 
            setCurrentPage  =   {setCurrentPage}
            currentUniversities = {currentUniversities} 
       univercities = {univercities} item={item}  />
        </div>
      ) }
     
        </div>
      </div>
      <Pagination  pages = {totalPagesNum} 
            setCurrentPage  =   {setCurrentPage}
            currentUniversities = {currentUniversities} 
       univercities = {univercities}/>

    </>
  );
};
export default UniversitiesPage;