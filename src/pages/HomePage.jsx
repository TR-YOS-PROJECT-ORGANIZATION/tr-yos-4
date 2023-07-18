import React from "react";
import Main from "../components/Main";
import Card from "../components/card/Card";
import WorkUs from "../components/workUs/WorkUs";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Main />
      <div className="row mt-16 justify-center-center">
        <div className="sec-heading center">
          <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
          <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}</p>
        </div>
      </div>

      <Card />
      <WorkUs />
    </div>
  );
};

export default HomePage;
