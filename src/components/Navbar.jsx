import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SignInModal from "./modals/SignInModal";
import SignUpModal from "./modals/SignUpModal";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";
import MyMenu from "./MyMenu";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);

  const {currentUser} = useSelector((state) => state?.auth);

  const { logout } = useAuthCall();



  console.log(currentUser);

  return (
    <div>
      <SignInModal
        open={openModal}
        setOpen={setOpenModal}
        setOpenUpModal={setOpenUpModal}
      />
      <SignUpModal
        openUp={openUpModal}
        setOpen={setOpenModal}
        setOpenUpModal={setOpenUpModal}
      />

      <div className="relative">
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
                      Home
                    </Link>
                  </li>
                  <li className="  px-10  py-5  bg-white-500  hover:bg-red-retro">
                    <Link to="/Universities" className="mx-3">
                      Universities
                    </Link>
                  </li>
                  <li className="  px-10  py-5   bg-white-500  hover:bg-red-retro">
                    <Link to="/Departments" className="mx-3">
                      Departments
                    </Link>
                  </li>
                  <li className="  px-10  py-5   bg-white-500 hover:bg-red-retro">
                    <Link to="/About" className="mx-3">
                      About
                    </Link>
                  </li>
                </ul>
              )}
            </button>
            <div className="lg:visible md:invisible sm:invisible sr-only sm:not-sr-only md:m-0 sm:m-0 ">
              <Link to="/" className="mx-3">
                Home
              </Link>
              <Link to="/Universities" className="mx-3">
                Universities
              </Link>
              <Link to="/Departments" className="mx-3">
                Departments
              </Link>
            </div>
          </div>

          {currentUser ? (
            <div className="flex m-2 ">
               
               <MyMenu />
           
              <button className="border rounded lg:text-sm md:text-sm max-sm:text-xs mr-10 sm:text-xs  hover:bg-red-retro bg-red-warm	 text-white-cream px-4 py-2 shadow-md"
               onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="w-full h-[82px] max-[600]:h-96 flex items-center justify-end max-[sm]:justify-center">
              <button className="mx-5 shadow-md w-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3a7kIGk4YKVkY3AjdXnWh_o2bFXDeA8vWlnS6wFZcw&s"></img>
              </button>
              <div className="flex gap-4 h-[51px]  pr-[100px] max-[600px]:h-96">
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="border rounded lg:text-sm md:text-sm max-sm:text-xs sm:text-xs  hover:bg-red-retro bg-red-warm text-white-cream px-4 py-2 shadow-md "
                >
                  Sign In
                </button>
                <button
                  onClick={() => setOpenUpModal(!openUpModal)}
                  className="border rounded lg:text-sm md:text-sm max-sm:text-xs  sm:text-xs  hover:bg-red-retro bg-red-warm	 text-white-cream px-4 py-2 shadow-md"
                >
                  Sign Up
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
