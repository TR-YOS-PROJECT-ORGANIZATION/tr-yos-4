import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              ADDRESS
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  +90 555 555 55 55
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  info@tryos.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              NAVIGATIONS
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQs Page
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Checkout
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              MY ACCOUNT
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  My Profile
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Favorites
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 .All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
