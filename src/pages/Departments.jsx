// eslint-disable-next-line no-unused-vars
import React from "react";
import DepartmentFoto from "../images/DepartmentFoto.jpg";

function Departments() {
  return (
    <>
      <div className="flex flex-col">
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
        <div className="flex flex-row justify-center m-8">
          <div className="w-1/4">
            <div className="">
              <label
                htmlFor="selectCity"
                className="block w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 "
              >
                Select City
              </label>
              <div className="relative rounded-md">
                <select
                  id="selectCity"
                  className="block w-full border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
                >
                  <option selected>Ankara</option>
                  <option value="">İstanbul</option>
                  <option value="">İzmir</option>
                  <option value="">Konya</option>
                  <option value="">Bursa</option>
                </select>
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
                Select Univercity
              </label>
              <div className="relative rounded-md">
                <select
                  id="selectCity"
                  className="block w-full border-2 rounded-md py-1.5 pl-2 pr-10 text-gray-900"
                >
                  <option selected>ABDULLAH GÜL UNIVERSITY</option>
                  <option value="">
                    ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY
                  </option>
                  <option value="">ADIYAMAN UNIVERSITY</option>
                  <option value="">AFYON KOCATEPE UNIVERSITY</option>
                  <option value="">
                    ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ UNIVERSITY
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="m-2 ">
            <div className="">
              <div className="relative rounded-md">
                <div className="text-center">Price</div>
                <input
                  name="price"
                  type="text"
                  placeholder="Min Price..."
                  className="w-1/4 border-2 m-2 py-1.5 rounded-md"
                />
                <input
                  name="price"
                  type="text"
                  placeholder="Max Price..."
                  className="w-1/4 border-2 m-2 py-1.5 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="m-2">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Checks
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item1-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item1-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Item1
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item2-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item2-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        item2
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item3-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item3-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Item3
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item4-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item4-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        item4
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="m-2">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Checks
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item1-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item1-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Item1
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item2-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item2-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        item2
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item3-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item3-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Item3
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="item4-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        htmlFor="item4-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        item4
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row mx-2">
              <button className="float-right ml-auto bg-green-dark m-2 w-1/4 py-1 rounded-md">
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
