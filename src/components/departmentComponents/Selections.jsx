// eslint-disable-next-line no-unused-vars
import React from "react";
import Select from "react-select";

function Selections() {
  const cities = [
    {
      value: "ankara",
      label: "Ankara",
    },
    {
      value: "izmir",

      label: "İzmir",
    },

    {
      value: "istanbul",

      label: "İstanbul",
    },

    {
      value: "bursa",

      label: "Bursa",
    },
  ];
  return (
    <>
      <div className="w-1/4">
        <div className="">
          <label
            htmlFor="selectCity"
            className="block w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
          >
            Select City
          </label>
          <div className="relative rounded-md">
            <Select
              defaultValue={[cities[0], cities[1]]}
              isMulti
              name="selectCity"
              options={cities}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="selectCity"
            className="block w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
          >
            Select Department
          </label>
          <div className="relative rounded-md">
            <select
              id="selectCity"
              className="block w-full border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
            >
              <option selected>Ethnology</option>
              <option value="">Antropologhy</option>
              <option value="">Folklore</option>
              <option value="">Archaelogy</option>
              <option value="">Prehistory</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="selectCity"
            className="block w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
          >
            Select University
          </label>
          <div className="relative rounded-md">
            <select
              id="selectCity"
              className="block w-full border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
            >
              <option selected>ABDULLAH GÜL UNIVERSITY</option>
              <option value="">ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY</option>
              <option value="">ADIYAMAN UNIVERSITY</option>
              <option value="">AFYON KOCATEPE UNIVERSITY</option>
              <option value="">
                ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ UNIVERSITY
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selections;
