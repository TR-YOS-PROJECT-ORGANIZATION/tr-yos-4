import React, { useEffect, useState } from "react";
import axios from "axios";
import { toastSuccessNotify } from "../../helper/ToastNotify";
const MyAccountSettings = ({ userInfo, currentUser }) => {
  const [country, setCountry] = useState();
  const [info, setInfo] = useState();
  console.log(info);
  const [newInfo, setNewInfo] = useState({});
  console.log(newInfo);
  console.log(currentUser);
  const userID = currentUser.userID;
  const getCountry = async () => {
    try {
      await axios
        .get(
          `https://tr-yös.com/api/v1/location/allcountries.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
        )
        .then(({ data }) => setCountry(data));
    } catch (error) {
      console.log(error);
    }
  };
  const sendInfo = async (newInfo) => {
    try {
      await axios
        .patch(
          `https://tr-yös.com/api/v1/users/updateuser2.php?user_id=${userID}?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          newInfo
        )
        .then(({ data }) => setInfo(data));
      toastSuccessNotify("User information updated");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountry();
  }, []);
  console.log(country);
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
              defaultValue={userInfo?.user?.name}
              required
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) => setNewInfo({ ...newInfo, name: e.target.value })}
            />
          </div>
          <div className="w-1/2 mt-3">
            <label htmlFor="" className="font-bold">
              E-mail*
            </label>
            <input
              type="email"
              defaultValue={userInfo?.user?.email}
              required
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) =>
                setNewInfo({ ...newInfo, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex">
          <div className=" w-1/2 mt-3 mr-2">
            <p className="font-bold">Country*</p>
            <select
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) =>
                setNewInfo({ ...newInfo, country: e.target.value })
              }
            >
              {country?.map((item) => (
                <option value={item.en}>{item.en}</option>
              ))}
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
              onChange={(e) => setNewInfo({ ...newInfo, city: e.target.value })}
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
            onChange={(e) => setNewInfo({ ...newInfo, phone: e.target.value })}
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
              className="h-40 rounded-md mt-2 border-2  hover:border-green-dark"
              onChange={(e) =>
                setNewInfo({ ...newInfo, about: e.target.value })
              }
            ></textarea>
          </div>
        </div>
      </div>
      <button
        onClick={() => sendInfo(newInfo)}
        className="bg-red-warm text-white-500 hover:bg-green-dark hover:text-green-base rounded-lg font-bold p-4 mr-4 ml-5 mb-4"
      >
        Save Changes
      </button>
    </div>
  );
};
export default MyAccountSettings;
