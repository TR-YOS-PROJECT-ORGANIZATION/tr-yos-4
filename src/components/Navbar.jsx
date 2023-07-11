import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const currentUser = false;

  console.log(isOpen);

  return (
    <div  >
      <div className="relative">
      <nav className="rounded flex items-center md:justify-between sm:justify-around py-5 font-bold text-md fixed right-0 left-0 top-0 z-10 bg-white-500 border-t-[2rem] border-green-dark">
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
        <div>
        
          <button className="mx-3 bg-red-retro py-3 px-5 rounded text-white-cream hover:bg-red-warm hover:text-black">
            Sign In
          </button>
          <button className="mx-3 bg-red-warm py-3 px-5 rounded text-white-cream hover:bg-red-retro hover:text-black">
            Sign Up
          </button>
        </div>
      </nav>
      </div>
     
    </div>
  );
};

export default Navbar;
