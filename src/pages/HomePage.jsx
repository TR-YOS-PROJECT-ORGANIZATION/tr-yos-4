// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Main from "../components/Main";
import WorkUs from "../components/workUs/WorkUs";
import { useTranslation } from "react-i18next";
import "react-activity/dist/library.css";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from "../components/card/OneCard";
import useCardCalls from "../hooks/useCardCalls";
import i18next from "i18next";
const HomePage = () => {
  const { t } = useTranslation();
  const { getAllDepartments } = useInfoCalls();
  const { allDepartments } = useSelector((state) => state.info);
  const { currentUser } = useSelector((state) => state?.auth);
  const {
    getCompareList,
    getFavouriteList,
    moveToFavourites,
    moveToSelectedDepartments,
    removeFromFavourites,
    removeFromSelectedDepartments,
  } = useCardCalls();
  const { compareList } = useSelector((state) => state?.card);
  const { getUni } = useInfoCalls();

  useEffect(() => {
    getUni();
  }, []);

  useEffect(() => {
    currentUser && getCompareList();
    getFavouriteList();
  }, []);

  useEffect(() => {
    getAllDepartments();
  }, []);

  const depart = allDepartments?.slice(71, 89);

  return (
    <div>
      <Main />
      <div className="row mt-16 justify-center-center">
        <div className="sec-heading center">
          <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
          <p>
            {t("Our Departments")} {t("Our Departments")} {t("Our Departments")}
          </p>
        </div>
      </div>
      <div className="xs:m-0 xs:px-0 xs:w-full sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 md:px-20">
        {depart?.map((item, index) => (
          <div key={index}>
            <OneCard
              item={item}
              moveToSelectedDepartments={moveToSelectedDepartments}
              removeFromSelectedDepartments={removeFromSelectedDepartments}
              moveToFavourites={moveToFavourites}
              removeFromFavourites={removeFromFavourites}
              isInCompare={compareList?.departments.includes(item.id)}
            />
          </div>
        ))}
      </div>
      <WorkUs />
    </div>
  );
};
export default HomePage;
