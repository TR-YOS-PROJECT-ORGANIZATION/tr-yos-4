
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

function Departments() {
  const { getAllDepartments} = useInfoCalls();
  const { allDepartments} = useSelector((state) => state?.info);
  const { currentUser } = useSelector((state) => state?.auth);
  const { searchParameters } = useSelector((state) => state?.card);
  // eslint-disable-next-line no-unused-vars
  const [department, setDepartment] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const {t} = useTranslation();
  const currentUserId = currentUser?.userID;




  useEffect(() => {


    getAllDepartments();
  }, []);

  console.log(department)

  useEffect(() => {

    if (searchParameters?.selectedDepartments) {


      return setDepartment(searchParameters?.selectedDepartments);

    } else {

      return setDepartment(allDepartments?.slice(71, 89));
    }
  }, [searchParameters]);

  if(!department) return <Dots size={32}/>


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

              {department?.map((item) => {
                return (
                  <OneCard
                    key={item.id}
                    item={item}
               
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Departments;
