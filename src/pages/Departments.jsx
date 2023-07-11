// eslint-disable-next-line no-unused-vars
import React from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
import Checks from "../components/departmentComponents/Checks";
import "../components/departmentComponents/departments.css";
import Card from "../components/card/Card";

function Departments() {
  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        {/*  */}
        {/* Deneme yorum */}
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
      </div>
    </>
  );
}
export default Departments;
