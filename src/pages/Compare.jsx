// eslint-disable-next-line no-unused-vars
import React from "react";
import Card1 from "../components/card/Card";
import Footer from "../footer/Footer";
import WorkUs from "../components/workUs/WorkUs";

function Compare() {
  return (
    <div>
      
      <div >
        <h2 className="w-full h-36 bg-green-dark pl-28 pt-8 text-5xl text-left text-white-cream font-bold" >  
        {/*  */}
          Compare Departments
        </h2>
      </div>

      <div>
        <Card1 />
      </div>
      <WorkUs/>
    </div>
  );
}

export default Compare;



