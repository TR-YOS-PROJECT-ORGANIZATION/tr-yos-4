// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
import "../components/departmentComponents/departments.css";
// import Card from "../components/card/Card";
import Hamburger from "hamburger-react";
import { useState } from "react";

import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";

import OneCard from "../components/card/OneCard";
import SubmitReview from "../components/departmentDetail/SubmitReview";


function Departments() {
  const { departments } = useSelector((state) => state.info);
  const [isOpen, setOpen] = useState(false);


  const { getDepartments } = useInfoCalls();

  useEffect(() => {
    getDepartments();
  }, []);

  console.log(departments);


  return (
    <>
      <div className="flex flex-col">
        <ImageSection />

        {/*  */}
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
                      <PriceForm />
                      <div className="flex flex-row mx-2 justify-end xs:justify-start xs:mx-0  sm:justify-start md:justify-end departments_search_button_container">
                        <button
                          className="sm:mx-0 block xs:float-left float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
                          name="searchDepartments"
                          type="submit"
                        >
                          Search
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
              <PriceForm />
              <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                <button
                  className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
                  name="searchDepartments"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">Our Departments</h2>
                <p>Our Departments Our Departments Our Departments...</p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">
              <OneCard />
              <OneCard />
              <OneCard />
              <OneCard />
              <SubmitReview />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default Departments;

