import React from "react";
import backgroundImage from "../images/university.jpg";
import UniversityCard from "../components/card/UniversityCard";
import university from "../images/university.jpg";
import { useEffect } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getUniSuccess } from "../features/infoSlice";
import axios from "axios";
import { useTranslation } from "react-i18next";

const UniversitiesPage = () => {
  const { getUni } = useInfoCalls();
  const{ univercities} = useSelector((state) => state.info);
  const {t} = useTranslation();

  useEffect(() => {
    getUni();
  }, []);

  console.log(univercities);

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
        </div>{" "}
      { univercities &&  <UniversityCard univercities={univercities} />}
      </div>
    </>
  );
};
export default UniversitiesPage;
