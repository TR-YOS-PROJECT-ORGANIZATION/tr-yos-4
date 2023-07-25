import React from "react";
import { useSelector } from "react-redux";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useEffect } from "react";


const MyAccountSettings = () => {

  const { currentUser } = useSelector((state) => state?.auth);
  const { userInfo } = useSelector((state) => state?.info);
  const { getUserInfo } = useInfoCalls();


  useEffect(() => {
    getUserInfo();
  }, []);

  getUserInfo(currentUser);
  console.log(currentUser);

  return (
    <div className="border rounded-xl shadow-xl xl:w-1/2 md:w-3/2 m-5 xs:w-full">
      <div className="mt-2 p-5 ">
        <h2 className="text-2xl font-bold">My Account</h2>
        <div className="flex ">
          <div className=" w-1/2 mr-2 mt-3">
            <label htmlFor="" className="font-bold">
              Your Name*
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md mt-2 border-2"
            />
          </div>
          <div className="w-1/2 mt-3">
            <label htmlFor="" className="font-bold">
              E-mail*
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2"
            />
          </div>
        </div>
        <div className="flex">
          <div className=" w-1/2 mt-3 mr-2">
            <p className="font-bold">Country*</p>
            <select className="w-full rounded-md mt-2 border-2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="w-1/2 mt-3">
            <label htmlFor="" className="font-bold">
              City
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2"
            />
          </div>
        </div>
        <div className=" w-5/12 mt-3">
          <label htmlFor="" className="font-bold">
            Phone
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md mt-2 border-2"
          />
        </div>
        <div className="mt-3">
          <div className=" w-full flex flex-col">
            <label htmlFor="" className="font-bold">
              About
            </label>
            <textarea
              type="text"
              required
              className="h-40 rounded-md mt-2 border-2  hover:border-blue-dark"
            ></textarea>
          </div>
        </div>
      </div>

      <button className="bg-blue-light text-blue-dark hover:bg-blue-dark hover:text-blue-base rounded-lg font-bold p-4 mr-4 ml-5 mb-4">
        Save Changes
      </button>
    </div>
  );
};
export default MyAccountSettings;
