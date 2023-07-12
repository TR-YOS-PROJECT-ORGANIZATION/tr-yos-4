import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);


  const currentUser = false;

  console.log(isOpen);

  return (
    <div  >

<SignInModal
  open={openModal}
  setOpen={setOpenModal}
  setOpenUpModal={setOpenUpModal}
/>
<SignUpModal
  open={openUpModal}
  setOpen={setOpenUpModal}
  setOpenUpModal={setOpenModal}
/>

      <div className="relative">
      <nav className="rounded flex items-center md:justify-between sm:justify-around py-5 font-bold text-md fixed right-0 left-0 top-0 z-10 bg-white-500 border-t-[2rem] border-cyan-900">
        <div className="lg:flex lg:flex-row items-center sm:flex-col sm:flex ">
          <button className="mx-8 sm:mx-1 lg:invisible md:visible sm:visible relative">
            <Hamburger
              label="show menu"
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
            />
             {isOpen && (
              
                <ul className="md:flex-col absolute z-10 rounded">
                  <li className="border border-green-dark px-3  py-2 bg-white-cream hover:bg-red-retro">
                 
                    <Link to="/" className="mx-3">
                      Home 
                    </Link>
                  </li>
                  <li className="border  border-green-dark  px-3  py-2  bg-white-cream  hover:bg-red-retro">
                    <Link to="/Universities" className="mx-3">
                      Universities
                    </Link>
                  </li>
                  <li className="border  border-green-dark  px-3  py-2   bg-white-cream  hover:bg-red-retro">
                    <Link to="/Departments" className="mx-3">
                      Departments
                    </Link>
                  </li>
                  <li className="border  border-green-dark  px-3  py-2   bg-white-cream hover:bg-red-retro">                 
                 <Link to="/About" className="mx-3">
                   About
                 </Link>
               </li>
                </ul>
            
            )} 
          </button>
          <div className="lg:visible md:invisible sm:invisible md:m-0 sm:m-0 xsm:invisible">
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

        {
          //  navbar bölümü
          <div className="w-full h-[82px]  flex items-center justify-end">
            <div className="flex gap-4 h-[51px]  pr-[100px]">
              <button
                onClick={() => setOpenModal(!openModal)}
                className="border rounded bg-green-dark hover:bg-red-warm text-white-cream px-4 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => setOpenUpModal(!openUpModal)}
                className="border rounded bg-green-dark hover:bg-red-warm	 text-white-cream px-4 py-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        }

      </nav>
      </div>
    </div>
  );
};

export default Navbar;
