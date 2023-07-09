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
        <div className="flex flex-row justify-center m-8">
          <Selections />
          <PriceForm />
          <div className="flex flex-col">
            <Checks />
            <div className="flex flex-row mx-2">
              <button className="float-right ml-auto bg-purple-base m-2 w-1/4 py-1 rounded-md text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Departments;
