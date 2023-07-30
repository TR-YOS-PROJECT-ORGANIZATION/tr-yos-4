

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import WorkUs from "../components/workUs/WorkUs";
import { useSelector } from "react-redux";
import useInfoCalls from "../hooks/useInfoCalls";
import OneCard from "../components/card/OneCard";
import useCardCalls from "../hooks/useCardCalls";
function Compare() {
  // const { t } = useTranslation();

  const { getUserInfo, getAllDepartments } = useInfoCalls();
  const { currentUser } = useSelector((state) => state?.auth);
  const { allDepartments } = useSelector((state) => state?.info);
  const { getCompareList, removeFromSelectedDepartments, moveToFavourites, removeFromFavourites, getFavouriteList } = useCardCalls();
  const { compareList, favouriteList } = useSelector((state) => state?.card);
  const currentUserId = currentUser?.userID;
  // const departmentId = id
  useEffect(() => {
    getUserInfo(currentUserId);
  }, [currentUser]);
  useEffect(() => {
    getAllDepartments();
  }, [])
  console.log(currentUser);
  console.log(favouriteList);

  useEffect(() => {
    getCompareList(currentUserId);
  }, [compareList])

  useEffect(() => {
    getFavouriteList(currentUserId);
  }, [favouriteList])
  console.log(favouriteList);
console.log(allDepartments);

  const filteredDepartments = allDepartments?.filter((department) => compareList?.departments.map((item) => item).includes(department.id));
  console.log(filteredDepartments);
  return (
    <div>
      <div className="grid grid-cols-4">
        {
          filteredDepartments?.map((item) => {
            return (
              <div key={item.id} >
                <OneCard
                  facultyTr={item.faculty.tr}
                  facultyEn={item.faculty.en}
                  universityTr={item.university.tr}
                  universityEn={item.university.en}
                  departmentTr={item.department.tr}
                  departmentEn={item.department.en}
                  cityTr={item.city.tr}
                  cityEn={item.city.en}
                  code={item.department.code}
                  price={item.price}
                  id={item.id}
                  removeFromSelectedDepartments={removeFromSelectedDepartments}
                  moveToFavourites={moveToFavourites}
                  removeFromFavourites={removeFromFavourites}
                  isInFavourite={favouriteList?.departments.map((item) => item).includes(item.id)}
                  isInCompare={compareList?.departments.map((item) => item).includes(item.id)}
                />
              </div>
            )
          }
          )
        }
      </div>
      <WorkUs />
    </div>
  );
}
export default Compare;

