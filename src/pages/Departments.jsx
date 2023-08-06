// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from "../components/card/OneCard";
import useCardCalls from "../hooks/useCardCalls";
import { useTranslation } from "react-i18next";
import { Dots } from "react-activity";
import Pagination from "./universitiesPages/Pagination";
import { all } from "axios";

function Departments() {
  const { getAllDepartments, getUni } = useInfoCalls();
  const { allDepartments, univercities } = useSelector((state) => state?.info);
  const { searchParameters } = useSelector((state) => state?.card);
  const [currentDepartments, setCurrentDepartments] = useState();
  const [isOpen, setOpen] = useState(false);

  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [departmentPerPage, setDepartmentPerPage] = useState(100);

  useEffect(() => {
    getAllDepartments();
    getUni();
  }, []);

  const filteredUni = univercities?.filter(
    (uni) =>
      searchParameters?.selectedCities
        ?.map((item) => {
          return item.id;
        })
        .indexOf(uni.city) !== -1
  );

  const filteredDepartmentsbyCity = allDepartments?.filter(
    (dep) =>
      filteredUni
        ?.map((item) => {
          return item.code;
        })
        .indexOf(dep?.university.code) !== -1
  );

  const filteredDepartmentsbyUni = allDepartments?.filter(
    (dep) =>
      searchParameters?.selectedUnivercities
        ?.map((item) => {
          return item.code;
        })
        .indexOf(dep?.university?.code) !== -1
  );

  const handleSearch = () => {
    console.log("girdi");
    if (
      searchParameters.selectedUnivercities &&
      searchParameters.selectedDepartments?.length === 0
    ) {
      console.log("src1", searchParameters);

      return setCurrentDepartments(filteredDepartmentsbyUni);
    } else if (searchParameters.selectedDepartments) {
      console.log("src2", searchParameters);

      return setCurrentDepartments(searchParameters?.selectedDepartments);
    } else {
      console.log("currentD", allDepartments);
      setCurrentDepartments(
        allDepartments?.slice(indexOfFirstDep, indexOfLastDep)
      );
    }
  };

  useEffect(() => {
    if(!!allDepartments){
      handleSearch();
    }
  }, [searchParameters,allDepartments]);

  const indexOfLastDep = currentPage * departmentPerPage;

  const indexOfFirstDep = indexOfLastDep - departmentPerPage;
  const totalPagesNum = Math.ceil(allDepartments?.length / departmentPerPage);

  if (!searchParameters) return <Dots size={32} />;

  console.log("currnt", currentDepartments);

  // const currentDepartments = allDepartments?.slice(
  //   indexOfFirstDep,
  //   indexOfLastDep
  // );

  // useEffect(() => {

  //   const filteredDepartmentsbyUni = allDepartments?.filter(
  //     (dep) =>
  //       searchParameters?.selectedUnivercities
  //         ?.map((item) => {
  //           return item.code;
  //         })
  //         .indexOf(dep?.university?.code) !== -1
  //   );

  //   const indexOfLastDep = currentPage * departmentPerPage;

  //   const indexOfFirstDep = indexOfLastDep - departmentPerPage;

  //   if (searchParameters?.selectedDepartments) {

  //     return setCurrentDepartments(searchParameters?.selectedDepartments);

  //   }

  //   else if (searchParameters?.selectedUnivercities && !searchParameters?.selectedDepartments ){

  //     return setCurrentDepartments(filteredDepartmentsbyUni);

  //   }

  //   else {

  //     return setCurrentDepartments(

  //       allDepartments?.slice(indexOfFirstDep, indexOfLastDep)
  //     );
  //   }
  // }, []);

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
              {isOpen && (
                <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
                  <>
                    <Selections />
                  </>
                </div>
              )}
            </button>
          </div>
          <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
            <div className="mt-36">
              <Selections />
            </div>
          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">
                  {t("Our Departments")}
                </h2>
                <p>
                  {t("Our Departments")} {t("Our Departments")}{" "}
                  {t("Our Departments")}...
                </p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">
              {currentDepartments?.map((item, index) => {
                return <OneCard key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {Object.keys(searchParameters).length === 0 && (
        <Pagination
          pages={totalPagesNum}
          setCurrentPage={setCurrentPage}
          currentDepartments={currentDepartments}
          allDepartments={allDepartments}
        />
      )}
    </>
  );
}
export default Departments;
