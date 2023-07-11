import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-10 bg-green-dark pl-32 pt-8 "></div>
      <nav className="rounded flex items-center md:justify-between sm:justify-center py-5 font-bold text-lg">
        <div className="lg:flex lg:flex-row items-center sm:flex-col sm:flex" >
          <Link to="/" className="mx-3">Home Page</Link>
          <Link to="/Universities" className="mx-3">Universities</Link>
          <Link to="/Departments" className="mx-3">Departments</Link>
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
    </>
  );
};

export default Navbar;
