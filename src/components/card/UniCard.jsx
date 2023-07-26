
import i18next from "i18next";

import React from "react";
import Pagination from "../../pages/universitiesPages/Pagination";


const UniCard = ({ key,item,}) => {
    console.log(item)
  return (
    <div
      className=" w-96  h-96 container flex flex-col justify-center items-center sm:flex-col sm:justify-start border-2 border-gray-400 rounded-md shadow-lg  lg:mx-auto my-10 sm:mx-auto md:m-20 "
      key={key}
    >
      <div className="w-44 h-44 m-6 border-2 border-gray-300 rounded-md">
      <img
  src={item.logo}
  alt=""
  onError={
    (e)=>{
      e.target.src="https://img.freepik.com/premium-vector/luxury-university-logo-design_139869-120.jpg?w=740"
      e.target.alt="geçersiz"
    }
  }
  className="w-full h-full object-cover"
/>


      </div>
      <div className="">

        <p className="font-bold text-xl mb-2">                                        {
                                        i18next.language== "tr" ? item.tr : item.en
                                        }</p>

        <p className="text-xs mb-2">
          {item?.data?.adress}
        </p>
        <svg
          className="h-4 w-4 text-gray-400 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            fill="#0D0D0D"
          ></path>
        </svg>

        <p className="ml-1 text-sm text-gray-500 inline-block" >                                        {
                                        i18next.language== "tr" ? item.tr : item.en
                                        }</p>

        <div className="my-4 ">
          <div className="flex justify-center">
            <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md  bg-red-warm text-gray-base">
              1 Faculties
            </p>
            <p className="text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md bg-green-dark text-blue-base">
              2 Departments
            </p>
            <button className=" flex text-xs mr-2 mb-2 p-2 font-medium border-none rounded-md   bg-red-warm text-gray-base hover:bg-red-retro  hover:text-gray">
              <div className="pt-1 m-0.5">
                <svg
                  className="fill-gray-base"
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.9em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <div >{item?.data?.phone}</div>
            </button>
          </div>
    
        </div>{" "}
      </div>{" "}
      
    </div>
  );
};
export default UniCard;