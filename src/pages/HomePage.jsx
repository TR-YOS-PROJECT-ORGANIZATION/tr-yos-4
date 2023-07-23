import React, { useEffect } from "react";
import Main from "../components/Main";
import Card from "../components/card/Card";
import WorkUs from "../components/workUs/WorkUs";
import { useTranslation } from "react-i18next";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { t } = useTranslation();
  const { getAllDepartments } = useInfoCalls();
  const { allDepartments } = useSelector((state) => state.info);

  useEffect(() => {
    getAllDepartments();
  }, []);
  
  const depart = allDepartments?.slice(71,79)
  console.log(depart);
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
        {depart?.map((item,index) => (
          <div key={index}>
            <Card item={item} />
          </div>
        ))}
      </div>

      <WorkUs />
    </div>
  );
};

export default HomePage;
