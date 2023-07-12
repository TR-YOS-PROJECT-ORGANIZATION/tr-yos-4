// eslint-disable-next-line no-unused-vars
import React from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
import Checks from "../components/departmentComponents/Checks";
import "../components/departmentComponents/departments.css";
import Card from "../components/card/Card";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Departments() {
  const [isOpen, setOpen] = useState(false);


  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        {/*  */}
        <div className="xs:flex-col sm:flex-col xs:justify-center xs:items-center md:flex-row md:justify-center md:items-start flex">
          <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden ">
            <button>
              <Hamburger
                label="show menu"
                toggled={isOpen}
                toggle={setOpen}
                direction=""
              /> 
              {
                isOpen && (
                  <form
                    method="POST"
                    className="bg-blue-900 w-5/5"
                  >
                    <Selections />
                    <PriceForm />
                    <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                      <button
                        className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:m-2"
                        name="searchDepartments"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                )
              }
            </button>
          </div>
          <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center">
            <form
              method="POST"
              className="bg-blue-900 w-5/5 md:"
            >
              <Selections />
              <PriceForm />
              <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                <button
                  className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:m-2"
                  name="searchDepartments"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="w-4/5 bg-red-900 flex flex-col justify-center items-center">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
export default Departments;

/*
        <div className="flex flex-col justify-center">
          <form
            method="POST"
            className=" flex flex-col justify-center items-center w-full sm:flex-col sm:justify-center sm:items-center sm:m-4  md:flex md:flex-row md:justify-center md:items-center md:px-20"
          >
            <Selections />
            <PriceForm />
            <div className="flex flex-col">
              <Checks />
              <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                <button
                  className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:m-2"
                  name="searchDepartments"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <Card />
        </div>

*/