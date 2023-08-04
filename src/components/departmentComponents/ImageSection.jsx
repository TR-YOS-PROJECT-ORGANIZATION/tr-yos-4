// eslint-disable-next-line no-unused-vars
import React from 'react'
import DepartmentFoto from "../../images/DepartmentFoto.jpg";
import { useTranslation } from 'react-i18next';

function ImageSection() {
  const {t} = useTranslation();
  return (
    <>
        <div className="relative">
          <img className="w-screen h-96" src={DepartmentFoto} alt="#" />
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-gray-800 bg-opacity-60">
            <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl m-2 ">
              {t("Departments")}
            </h1>
            <h2 className="text-gray-100 text-xl sm:text-2xl lg:text-3xl m-2">
              {t("All Departments")}
            </h2>
          </div>
        </div>
    </>
  )
}

export default ImageSection