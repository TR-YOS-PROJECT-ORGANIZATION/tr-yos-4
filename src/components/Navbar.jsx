// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SignInModal from "./modals/SignInModal";
import SignUpModal from "./modals/SignUpModal";


import turk from "../images/turk.png";

import { useSelector } from "react-redux";
import MyMenu from "./MyMenu";
import eng from '../images/eng.png'

import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);

  const { currentUser } = useSelector((state) => state?.auth);
  
  console.log(currentUser);

  const { t, i18n } = useTranslation();
  const clickHandle = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="mb-20">
      <SignInModal open={openModal} setOpen={setOpenModal}  setOpenUp={setOpenUpModal}/>
      <SignUpModal openUp={openUpModal} setOpenUp={setOpenUpModal} />

      <div className="relative mb-5">
        <nav className="rounded flex items-center md:justify-between sm:justify-around font-bold text-md fixed right-0 left-0 top-0 z-10 bg-white-500 border-t-[2rem] border-green-dark">
          <div className="lg:flex lg:flex-row items-center sm:flex-col sm:flex ">
            <button className="mx-8 sm:mx-1 lg:invisible md:visible sm:visible mt-2  relative">
              <Hamburger
                label="show menu"
                toggled={isOpen}
                toggle={setOpen}
                direction="right"
              />
              {isOpen && (
                <ul className="md:flex-col absolute z-10 rounded md:-left-36 sm:-left-10  max-[600px]:-left-10 ">
                  <li className=" px-10  py-5 bg-white-500 hover:bg-red-retro ">
                    <Link to="/" className="mx-3">
                    {t("Home")}
                    </Link>
                  </li>
                  <li className="  px-10  py-5  bg-white-500  hover:bg-red-retro">
                    <Link to="/universities" className="mx-3">
                    {t("Universities")}
                    </Link>
                  </li>
                  <li className="  px-10  py-5   bg-white-500  hover:bg-red-retro">
                    <Link to="/departments" className="mx-3">
                    {t("Departments")}
                    </Link>
                  </li>
                  <li className="  px-10  py-5   bg-white-500 hover:bg-red-retro">
                    <Link to="/about" className="mx-3">
                      {t("About")}
                    </Link>
                  </li>
                </ul>
              )}
            </button>
            <div className="lg:visible md:invisible sm:invisible sr-only sm:not-sr-only md:m-0 sm:m-0 ">
              <Link to="/" className="mx-3">
                {t("Home")}
              </Link>
              <Link to="/universities" className="mx-3">
                {t("Universities")}
              </Link>
              <Link to="/departments" className="mx-3">
                {t("Departments")}
              </Link>
            </div>
          </div>


          <div className="flex">
            <button className="mx-1" onClick={() => clickHandle("tr")}>
              <img src={turk} className="w-14"></img>
            </button>
            <button className="mx-1" onClick={() => clickHandle("en")}>
              <img src={eng} className="w-14"></img>
            </button>
          </div>
          {currentUser ? (
            <div className="flex m-2 ">

              <MyMenu />

            </div>
          ) : (
            <div className="w-full h-[82px] max-[600]:h-96 flex items-center justify-end max-[sm]:justify-center">
              <div className="flex gap-4 h-[51px]  pr-[100px] max-[600px]:h-96">
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="border rounded lg:text-sm md:text-sm max-sm:text-xs sm:text-xs  hover:bg-red-retro bg-red-warm text-white-cream px-4 py-2 shadow-md "
                >
                  {t("Sign In")}
                </button>
                <button
                  onClick={() => setOpenUpModal(!openUpModal)}
                  className="border rounded lg:text-sm md:text-sm max-sm:text-xs  sm:text-xs  hover:bg-red-retro bg-red-warm   text-white-cream px-4 py-2 shadow-md"
                >
                  {t("Sign Up")}
                </button>

              </div>
            </div>
          )}
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
