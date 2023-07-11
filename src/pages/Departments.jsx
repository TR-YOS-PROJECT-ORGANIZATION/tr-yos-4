// eslint-disable-next-line no-unused-vars
import React from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
import Checks from "../components/departmentComponents/Checks";

function Departments() {
  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        {/*  */}
        <form
          className="flex flex-col justify-center items-center w-full sm:flex-col sm:justify-center sm:items-center sm:m-4 md:w-full md:flex md:flex-row md:justify-center md:items-center md:m-3 lg:flex-row lg:justify-center lg:items-center"
          method="POST"
        >
          <Selections />
          <PriceForm />
          <div className="flex flex-col">
            <Checks />
            <div className="flex flex-row mx-2">
              <button
                className="float-left mr-auto bg-purple-base m-2 w-1/4 py-1 rounded-md text-white"
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
    </>
  );
}
export default Departments;
