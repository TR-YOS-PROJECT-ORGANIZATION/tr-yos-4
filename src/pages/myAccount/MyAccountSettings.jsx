/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toastSuccessNotify } from "../../helper/ToastNotify";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const MyAccountSettings = ({ userInfo, currentUser, getUserInfo }) => {
  const [country, setCountry] = useState();
  const [citiesbyCountry, setCitiesbyCountry] = useState();

  const [newInfo, setNewInfo] = useState({});
const {t} = useTranslation();
const lang = i18next.language;
  const filteredCountry = country?.filter(
    (item) => lang === "en" ? item.en === newInfo.country : item.tr === newInfo.country
  );

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
  const getCitiesbyCountry = async () => {
    try {
      await axios
        .get(
          `https://tr-yös.com/api/v1/location/citiesbycountry.php?country_id=${filteredCountry[0].id}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
        )
        .then(({ data }) => setCitiesbyCountry(data));
    } catch (error) {
      console.log("Error fetching cities:", error);
    }
  };
  const sendInfo = async (newInfo) => {
    const userID = currentUser?.userID;

    try {
      await axios.post(
        `https://tr-yös.com/api/v1/users/updateuser.php?user_id=${userID}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
        newInfo,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      getUserInfo(userID);

      toastSuccessNotify("User information updated");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    if (newInfo?.country) {
      getCitiesbyCountry(newInfo.country);
    }
  }, [newInfo?.country]);

  useEffect(() => {
    getUserInfo(currentUser?.userID);
  }, []);

  return (
    <div className="border rounded-xl shadow-xl xl:w-1/2 md:w-3/2 m-5 xs:w-full">
      <div className="mt-2 p-5 ">
        <h2 className="text-2xl font-bold">{t("My Account")}</h2>
        <div className="flex ">
          <div className=" w-1/2 mr-2 mt-3">
            <label htmlFor="" className="font-bold">
              {t("Your Name*")}
            </label>
            <input
              type="text"
              value={newInfo.name || userInfo?.user?.name || ""}
              required
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) => setNewInfo({ ...newInfo, name: e.target.value })}
            />
          </div>
          <div className="w-1/2 mt-3">
            <label htmlFor="" className="font-bold">
              {t("E-mail*")}
            </label>
            <input
              type="email"
              value={newInfo.email || userInfo?.user?.email || ""}
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
            <p className="font-bold">{t("Country*")}</p>
            <select
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) =>
                setNewInfo({ ...newInfo, country: e.target.value })
              }
              value={newInfo.country || userInfo?.user?.country || ""}
            >
              <option>{userInfo?.user?.country}</option>
              {country?.map((item) => (
                <option key={lang === "en" ? item.en : item.tr} value={lang === "en" ? item.en : item.tr}>
                  {lang === "en" ? item.en : item.tr}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 mt-3">
            <label htmlFor="" className="font-bold">
              {t("City")}
            </label>
            <select
              className="w-full rounded-md mt-2 border-2"
              onChange={(e) => setNewInfo({ ...newInfo, city: e.target.value })}
              value={newInfo.city || userInfo?.user?.city || ""}
            >
              <option>{userInfo?.user?.city}</option>
              {citiesbyCountry?.map((item) => (
                <option key={lang === "en" ? item.en : item.tr} value={lang === "en" ? item.en : item.tr}>
                  {lang === "en" ? item.en : item.tr}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className=" w-5/12 mt-3">
          <label htmlFor="" className="font-bold">
            {t("Phone")}
          </label>
          <input
            type="text"
            value={newInfo.phone || userInfo?.user.phone || ""}
            required
            className="w-full rounded-md mt-2 border-2"
            onChange={(e) => setNewInfo({ ...newInfo, phone: e.target.value })}
          />
        </div>
        <div className="mt-3">
          <div className=" w-full flex flex-col">
            <label htmlFor="" className="font-bold">
              {t("About")}
            </label>
            <textarea
              type="text"
              required
              className="h-40 rounded-md mt-2 border-2  hover:border-green-dark"
              value={newInfo.about || userInfo?.user.about || ""}
              onChange={(e) =>
                setNewInfo({ ...newInfo, about: e.target.value })
              }
            ></textarea>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          sendInfo(newInfo);
          e.prevent.default();
        }}
        className="bg-red-warm text-white-500 hover:bg-green-dark hover:text-green-base rounded-lg font-bold p-4 mr-4 ml-5 mb-4"
      >
        {t("Save Changes")}
      </button>
    </div>
  );
};
export default MyAccountSettings;
