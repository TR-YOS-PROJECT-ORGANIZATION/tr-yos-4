// eslint-disable-next-line no-unused-vars
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";
import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyMenu = () => {
  const { logout } = useAuthCall();
  const {t} = useTranslation();
  return (
    <div className="fixed top-10 right-36  w-32 text-start ">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="font-bold  w-full rounded-md px-4 py-3 underline  text-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {t("My Account")}
        
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-lg bg-white shadow-lg focus:outline-none">
           
            <div className="h-10 flex p-2 bg-white-500 text-center rounded-t-lg hover:bg-slate-300">
              <Menu.Item>
                <Link to="/myProfile" className=" bg-white-500 w-full  hover:bg-slate-300">
                  {t("User Dashboard")}
                </Link>
              </Menu.Item>
            </div>

            <div className="h-10 flex  p-2 bg-white-500  text-center  hover:bg-slate-300">
              <Menu.Item>
                <Link to="/favourites" className=" bg-white-500 w-full  hover:bg-slate-300">
                  {t("Favourite Departments")}
                </Link>
              </Menu.Item>
            </div>

            <div className="h-10 flex text-center p-2  bg-white-500  hover:bg-slate-300">
              <Menu.Item>
                <Link to="/compare" className=" bg-white-500 w-full  hover:bg-slate-300">
                  {t("Compare Departments")}
                </Link>
              </Menu.Item>
            </div>

            <div className="h-10 flex rounded-b-lg  hover:bg-slate-300">
              <Menu.Item>
                <button className=" bg-white-500 w-full  hover:bg-slate-300" onClick={logout}>
                  {t("Logout")}
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};


export default MyMenu;
