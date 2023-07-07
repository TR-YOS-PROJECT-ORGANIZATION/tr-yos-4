// eslint-disable-next-line no-unused-vars
import React from "react";
import DepartmentFoto from "../images/DepartmentFoto.jpg";

function Departments() {
  return (
    <>
      <div>
        <div className="relative">
          <img className="w-screen h-96" src={DepartmentFoto} alt="#" />
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-gray-800 bg-opacity-60">
            <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl m-2 ">
              Departments
            </h1>
            <h2 className="text-gray-100 text-xl sm:text-2xl lg:text-3xl m-2">
              All Departments
            </h2>
          </div>
        </div>

        {/*  */}
        <div>
          <div>
            <div>
              <label
                htmlFor="selectCity"
                className="block w-1/5 py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
              >
                Select City
              </label>
              <div className="relative rounded-md">
                <select
                  id="selectCity"
                  className="block w-1/5 border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
                >
                  <option selected>Ankara</option>
                  <option value="US">İstanbul</option>
                  <option value="CA">İzmir</option>
                  <option value="FR">Konya</option>
                  <option value="DE">Bursa</option>
                </select>
              </div>
            </div>
            
            <div>
              <label
                htmlFor="selectCity"
                className="block w-1/5 py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
              >
                Select Department
              </label>
              <div className="relative rounded-md">
                <select
                  id="selectCity"
                  className="block w-1/5 border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
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
                className="block w-1/5 py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
              >
                Select Univercity
              </label>
              <div className="relative rounded-md">
                <select
                  id="selectCity"
                  className="block w-1/5 border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
                >
               
                  <option selected >ABDULLAH GÜL UNIVERSITY</option>
                  <option value="">ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY</option>
                  <option value="">ADIYAMAN UNIVERSITY</option>
                  <option value="">AFYON KOCATEPE UNIVERSITY</option>
                  <option value="">ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ UNIVERSITY</option>
                </select>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Departments;
