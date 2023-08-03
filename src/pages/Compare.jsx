// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import WorkUs from "../components/workUs/WorkUs";
import { useSelector } from "react-redux";
import useInfoCalls from "../hooks/useInfoCalls";
import OneCard from "../components/card/OneCard";
import useCardCalls from "../hooks/useCardCalls";

const Compare = () => {
  // const { t } = useTranslation();

  const { getAllDepartments } = useInfoCalls();
  const { currentUser } = useSelector((state) => state?.auth);
  const { allDepartments } = useSelector((state) => state?.info);
  const { getCompareList } = useCardCalls();
  const { compareList, favouriteList } = useSelector((state) => state?.card);

  useEffect(() => {
    getAllDepartments();
  }, []);

  useEffect(() => {
    getCompareList();
  }, []);

  const filteredDepartments = allDepartments?.filter((department) =>
    compareList?.departments.map((item) => item).includes(department.id)
  );
  return (
    <div>
      <div className="grid grid-cols-4">
        {filteredDepartments?.map((item, index) => {
          return (
            <div key={index}>
              <OneCard
                item={item}
                isInCompare={compareList?.departments.includes(item.id)}
              />
            </div>
          );
        })}
      </div>
      <WorkUs />
    </div>
  );
};
export default Compare;
