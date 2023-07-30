// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from '../components/card/OneCard'
// eslint-disable-next-line no-unused-vars
import i18next, { t } from "i18next";
import useCardCalls from "../hooks/useCardCalls";
function Departments() {
  const { getAllDepartments, getUserInfo } = useInfoCalls();
  const { compareList, favouriteList } = useSelector((state) => state?.card);
  const { allDepartments } = useSelector((state) => state.info);
  const { currentUser } = useSelector((state) => state?.auth);
  const [isOpen, setOpen] = useState(false);
  const currentUserId = currentUser?.userID;
  const { moveToSelectedDepartments, removeFromSelectedDepartments, removeFromFavourites, moveToFavourites, getCompareList, getFavouriteList } = useCardCalls();
  useEffect(() => {
    currentUser && getUserInfo(currentUser?.userID);
  }, [currentUser]);
  console.log(currentUser);
  useEffect(() => {
    getCompareList(currentUserId);
    getFavouriteList();
    getAllDepartments();

  }, [compareList]);
  const department = allDepartments?.slice(71, 89);
  console.log(favouriteList);
  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
          <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
            <button>
              <Hamburger
                label="show menu"
                toggled={isOpen}
                toggle={setOpen}
                direction="right"
              />
              {
                isOpen && (
                  <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
                    <form
                      method="POST"
                      className="border shadow-lg md:mt-36 rounded-lg "
                    >
                      <Selections />
                      {/* <PriceForm /> */}
                      <div className="flex flex-row  justify-end sm:justify-start md:justify-end bg-green-dark rounded ">
                        <button name="searchDepartments" type="submit" className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-96 font-bold rounded  hover:bg-red-retro shadow-md  lg:p-8 md:p-4 ">
                          {t("Search")}
                        </button>
                      </div>
                    </form>
                  </div>
                )
              }
            </button>
          </div>
          <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
            <form
              method="POST"
              className="border shadow-lg md:mt-36 rounded-lg "
            >
              <Selections />
              {/* <PriceForm /> */}
              <div className="flex flex-row  justify-end sm:justify-start md:justify-center md: w-full bg-green-dark rounded ">
                <button name="searchDepartments" type="submit" className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm  max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 sm:w-24 font-bold hover:bg-red-retro shadow-md md:p-4 md:w-full rounded-md">
                  {t("Search")}
                </button>
              </div>
            </form>
          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
                <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}...</p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">
              {
                department?.map((element) =>
                  <div key={element.id}>
                    <OneCard element={element}
                      facultyTr={element.faculty.tr}
                      facultyEn={element.faculty.en}
                      universityTr={element.university.tr}
                      universityEn={element.university.en}
                      departmentTr={element.department.tr}
                      departmentEn={element.department.en}
                      cityTr={element.city.tr}
                      cityEn={element.city.en}
                      code={element.department.code}
                      price={element.price}
                      id={element.id}
                      moveToSelectedDepartments={moveToSelectedDepartments}
                      removeFromSelectedDepartments={removeFromSelectedDepartments}
                      moveToFavourites={moveToFavourites}
                      removeFromFavourites={removeFromFavourites}
                      isInCompare={compareList?.departments.map((item) => item).includes(element.id)}
                      isInFavourite={favouriteList?.departments.map((item) => item).includes(element.id)}
                    />


                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Departments;
