// eslint-disable-next-line no-unused-vars
import React from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
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
        <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
          <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
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
                    className="xs:flex xs:flex-col xs:justify-center xs:items-center"
                  >
                    <div className="sm:w-3/4 sm:m-2">
                      <Selections />
                      <PriceForm />
                    </div>

                    <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                      <button
                        className="xs:w-72 sm:w-52 block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:m-2"
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
              className=""
            >
              <Selections />
              <PriceForm />
              <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                <button
                  className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:mx-auto md:w-full"
                  name="searchDepartments"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">Our Departments</h2>
                <p>Our Departments Our Departments Our Departments</p>
              </div>
            </div>
            <Card />
          </div>
        </div>
      </div>

    </>
  );
}
export default Departments;