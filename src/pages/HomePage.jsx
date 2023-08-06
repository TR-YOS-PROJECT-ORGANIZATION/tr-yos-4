// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import WorkUs from "../components/workUs/WorkUs";
import { useTranslation } from "react-i18next";
import "react-activity/dist/library.css";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from "../components/card/OneCard";
import useCardCalls from "../hooks/useCardCalls";
import dummyUniImage from "../assets/dummyImages/3d.jpg";
import { current } from "@reduxjs/toolkit";

const HomePage = () => {
  const { t } = useTranslation();
  const { getAllDepartments } = useInfoCalls();
  const { allDepartments, univercities } = useSelector((state) => state.info);
  const { getUni } = useInfoCalls();
 
  //
  const [depart, setDepart] = useState([]);
  const [listState, setListState] = useState(false);
  //
  useEffect(() => {
    getUni();
  }, []);


  useEffect(() => {
    getAllDepartments();
   
  }, []);


  useEffect(() => {
    if (univercities && allDepartments && !listState) {
      setListState(true);
      // 8 random index oluşturduk
      const randomNumbers = Array?.from({ length: 8 }, () =>
        Math.floor(Math.random() * allDepartments.length - 2)
      );

      // allDepartments tan bu indextekileri çektik
      // univercities datasından
      // ilk resimleri objeye ekledik
      const departmentList = randomNumbers
        .map((rn) => {
          return allDepartments[rn];
        })
        ?.map((d) => {
          const departmentUni = univercities.find(
            (u) => u.code === d.university?.code
          );
          const uniImage =
            departmentUni?.images?.length > 0
              ? departmentUni.images[0]
              : dummyUniImage;
          return {
            ...d,
            dummyImage: uniImage,
          };
        });
      setDepart(departmentList);
    }
  }, [allDepartments, univercities]);

  return (
    <div className="flex flex-col">
      <Main />
      <div className="row mt-16 justify-center-center">
        <div className="sec-heading center">
          <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
          <p>
            {t("Our Departments")} {t("Our Departments")} {t("Our Departments")}
          </p>
        </div>
      </div>
      <div className="xs:m-0 xs:px-0 xs:w-full sm:m-0 sm:px-0 sm:w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 md:px-20">
        {depart?.map((item, index) => (
          <div key={index}>
            <OneCard item={item} />
          </div>
        ))}
      </div>
      <div>
      <WorkUs /></div>
    </div>
  );
};
export default HomePage;
