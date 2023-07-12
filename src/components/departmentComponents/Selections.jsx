// eslint-disable-next-line no-unused-vars
import React from "react";
import Select from "react-select";
import "./selections.css";

function Selections() {
  const cities = [
    { value: "ankara", label: "Ankara" },
    { value: "izmir", label: "İzmir" },
    { value: "istanbul", label: "İstanbul" },
    { value: "bursa", label: "Bursa" },
  ];

  const departments = [
    { value: "ethnology", label: "Ethnology" },
    { value: "antropologhy", label: "Antropologhy" },
    { value: "folklore", label: "Folklore" },
    { value: "prehistory", label: "Prehistory" },
  ];

  const universities = [
    { value: "agu", label: "ABDULLAH GÜL UNIVERSITY" },
    { value: "amaayu", label: "ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY" },
    { value: "adu", label: "ADIYAMAN UNIVERSITY" },
    { value: "aku", label: "AFYON KOCATEPE UNIVERSITY" },
    {
      value: "aatbtu",
      label: "ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ UNIVERSITY",
    },
  ];
  return (
    <>
      <div className="xs:flex xs:flex-col xs:justify-center xs:items-center w-full m-1 sm:w-full sm:m-auto sm:text-left md:flex md:flex-col selections_container">
        <div className="md:text-left md:w-full selections_cityContainer">
          <label
            htmlFor="selectCity"
            className="w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 md:mb-2"
          >
            Select City
          </label>
          <div className="relative rounded-md text-left">
            <Select
              defaultValue={[cities[0]]}
              isMulti
              name="selectCity"
              options={cities}
              className="xs:w-72 basic-multi-select md:mt-1 md:w-full
              "
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="md:text-left md:w-full">
          <label
            htmlFor="selectDepartment"
            className="w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900"
          >
            Select Department
          </label>
          <div className="relative rounded-md text-left">
            <Select
              defaultValue={[departments[0]]}
              isMulti
              name="selectDepartment"
              options={departments}
              className="basic-multi-select xs:w-72  md:w-full md:mx-0"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="md:text-left md:w-full">
          <label
            htmlFor="selectUniversity"
            className="w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900"
          >
            Select University
          </label>
          <div className="relative rounded-md text-left">
            <Select
              defaultValue={[universities[0]]}
              isMulti
              name="selectUniversity"
              options={universities}
              className="basic-multi-select xs:w-72  md:w-full md:mx-0"
              classNamePrefix="select"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selections;
