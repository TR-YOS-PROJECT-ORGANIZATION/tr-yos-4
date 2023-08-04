// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";
import SignInModal from "../components/modals/SignInModal";
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const { currentUser } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    toastWarnNotify("Please Login");
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col text-center  bg-gray-900 mt-20">
      <SignInModal open={openModal} setOpen={setOpenModal} />

      <div className="flex justify-evenly mt-8">
        <div className="text-left">
          <h2 className="mb-6 text-md font-semibold text-gray-400 uppercase dark:text-white">
            {t("ADDRESS")}
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline flex">
                <div className="pt-1.5 mr-2">
                  <svg
                    className="fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.9em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>
                <div>+90 555 555 55 55</div>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline flex">
                <div className="pt-1 mr-2">
                  <svg
                    className="fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </div>
                <div>info@tryos.com</div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-md font-semibold text-gray-400 uppercase dark:text-white">
            {t("NAVIGATIONS")}
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {t("About Us")}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {t("FAQs Page")}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {t("Checkout")}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {t("Contact")}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {t("Blog")}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <h2 className="mb-6 text-md font-semibold text-gray-400 uppercase dark:text-white ">
            {t("MY ACCOUNT")}
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              {!currentUser && (
                <button
                  className="hover:underline border rounded p-1"
                  onClick={() => handleClick()}
                >
                  {t("My Profile")}
                </button>
              )}
              {currentUser && (
                <Link
                  to="/myProfile"
                  className="hover:underline border rounded p-1"
                >
                  {t("My Profile")}
                </Link>
              )}
            </li>

            <li className="mb-4">
              {!currentUser && (
                <button
                  className="hover:underline border rounded p-1"
                  onClick={() => handleClick()}
                >
                  {t("Favourites")}
                </button>
              )}
              {currentUser && (
                <Link
                  to="/favourites"
                  className="hover:underline border rounded p-1"
                >
                  {t("Favourites")}
                </Link>
              )}
            </li>

            <li className="mb-4">
              {!currentUser && (
                <button
                  className="hover:underline border rounded p-1"
                  onClick={() => handleClick()}
                >
                  {t("Compare")}
                </button>
              )}
              {currentUser && (
                <Link
                  to="/compare"
                  className="hover:underline border rounded p-1"
                >
                  {t("Compare")}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="py-7 my-5 mx-auto w-[50%] border-t">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2023 {t("All Rights Reserved.")}
        </span>
      </div>
    </div>
  );
};

export default Footer;
