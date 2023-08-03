// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useInfoCalls from "../hooks/useInfoCalls";
import OneCard from "../components/card/OneCard";
import WorkUs from "../components/workUs/WorkUs";
import useCardCalls from "../hooks/useCardCalls";
import { useTranslation } from "react-i18next";

function Favourites() {
  const { currentUser } = useSelector((state) => state?.auth);
  const { allDepartments } = useSelector((state) => state?.info);
  const { getAllDepartments } = useInfoCalls();
  const { favouriteList, compareList } = useSelector((state) => state.card);

  const {
    getCompareList,
    getFavouriteList,
    moveToSelectedDepartments,
    removeFromSelectedDepartments,
    removeFromFavourites,
  } = useCardCalls();

  const { t } = useTranslation();

  useEffect(() => {
    getAllDepartments();
  }, []);

  useEffect(() => {
    console.log(' ilk ayaa kalk');
    getCompareList();
    getFavouriteList();
  }, []);

  const filteredDepartments = allDepartments?.filter((department) =>
    favouriteList?.departments.map((item) => item).includes(department.id)
  );
  return (
    <div className="mt-20">
      <div>
        <div>
          <h2 className="w-full h-36 bg-green-dark pl-28 pt-8 text-5xl text-left text-white-cream font-bold">
            {/*  */}
            {t("My Favorite Departments")}
          </h2>
        </div>
        <div className="grid grid-cols-4">
          {filteredDepartments?.map((item, index) => (
            <OneCard
              key={index}
              item={item}
              removeFromFavourites={removeFromFavourites}
              moveToSelectedDepartments={moveToSelectedDepartments}
              removeFromSelectedDepartments={removeFromSelectedDepartments}
            />
          ))}
        </div>
        <WorkUs />
      </div>
    </div>
  );
}
export default Favourites;
