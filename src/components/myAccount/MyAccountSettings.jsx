import React from "react";

const MyAccountSettings = () => {
  return (
    <div className="border rounded-xl shadow-md m-5 w-2/3 h-full ">
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">My Account</h2>
        <div className="flex">
          <div className=" w-1/2">
            <label htmlFor="" className="font-bold">
              Your Name*
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="font-bold">
              E-mail*
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
        <div className="flex">
          <div className=" w-1/2">
            <p className="font-bold">Country*</p>
            <select className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="font-bold">
              City
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
        <div className=" w-5/12">
          <label htmlFor="" className="font-bold">
            Phone
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="mt-5">
          <div className=" w-full flex flex-col">
            <label htmlFor="" className="font-bold">
              About
            </label>
            <textarea
              type="text"
              required
              className="h-40 rounded-md mt-2 border-2 border-green-dark focus:ring-green-dark"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">Social Accounts</h2>
        <div className="flex mr-4 mt-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="" className="font-bold ">
              Facebook
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2  border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="font-bold">
              Twitter
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2  focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
        <div className="flex mr-4 mt-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="" className="font-bold">
              Google Plus
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="font-bold">
              LinkedIn
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
      </div>
      <button className="bg-blue-light hover:bg-red-retro rounded-lg font-bold p-4 mr-4 mt-4 mb-4">
        Save Changes
      </button>
    </div>
  );
};

export default MyAccountSettings;
