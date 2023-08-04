/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import ChangePassword from "../../components/modals/ChangePassword";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toastSuccessNotify } from "../../helper/ToastNotify";
import { fetchFail, fetchStart } from "../../features/authSlice";
import { Link } from "react-router-dom";
import { toastErrorNotify } from "../../helper/ToastNotify";
import { useTranslation } from "react-i18next";

const Dashboard = ({ userInfo }) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const {t} = useTranslation();

  const mailtoLink = `mailto:info@tryos.com`;

  const getChangePassword = async (userID, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `/api/v1/users/changepassword.php?user_id=${userID}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
        info,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toastSuccessNotify("Password changed successfully");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Change password can not be performed");
    }
  };

  return (
    <div className="flex flex-col border justify-center p-6 mt-5 shadow-xl rounded-xl h-1/2 xs:w-full sm:px-12 ">
      <ChangePassword
        open={openModal}
        setOpen={setOpenModal}
        getChangePassword={getChangePassword}
      />
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl text-green-dark ">
            {userInfo?.user?.name}
          </h2>
          <p className="px-5 text-xs sm:text-base text-green-dark">
            {userInfo?.user?.email}
          </p>
        </div>
      </div>
      <div>
        <a
          href={`tel:+90 555 555 55 55`}
          className="bg-red-warm text-white-500 hover:underline flex mt-5 border-2 rounded-lg p-2"
        >
          <div className="pt-1.5 mr-2">
            <svg
              className="fill-white-500"
              xmlns="http://www.w3.org/2000/svg"
              height="0.9em"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </div>
          <div>+90 555 555 55 55</div>
        </a>
      </div>
      <div className="mt-2">
        <a
          href={mailtoLink}
          className="bg-red-warm text-white-500 hover:underline flex border-2 rounded-lg p-2"
        >
          <div className="pt-1 mr-2">
            <svg
              className="fill-white-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </div>
          <div>info@tryos.com</div>
        </a>
      </div>
      <div className="mt-6">
        <div className="mt-2">
          <a className="flex items-center justify-center p-2 font-medium border-2 rounded-lg bg-gray-light text-gray-base  hover:bg-green-dark hover:text-white-cream">
            <div className="pt-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <Link to="/myProfile">{t("My Profile")}</Link>
          </a>
        </div>

        <button onClick={() => setOpenModal(!openModal)} className="mt-2 ">
          <a className=" flex px-7 py-2 font-medium border-2 rounded-lg bg-gray-light text-gray-base  hover:bg-green-dark hover:text-white-cream">
            <div className="pt-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z" />
              </svg>
            </div>
            <div>{t("Change Password")}</div>
          </a>
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
