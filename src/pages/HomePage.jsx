import React from "react";
import Main from "../components/Main";
import Card from "../components/card/Card";
import WorkUs from "../components/workUs/WorkUs";

const HomePage = () => {
  return (
    <div>
      <Main />
      <div className="row mt-16 justify-center-center">
        <div className="sec-heading center">
          <h2 className="font-extrabold text-2xl">Our Departments</h2>
          <p>Our Departments Our Departments Our Departments</p>
        </div>
      </div>

      <Card />
      <WorkUs />
    </div>
  );
};

export default HomePage;
