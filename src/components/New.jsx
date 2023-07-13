import { Link } from "react-router-dom";



import { useState } from "react";

const New = () => {
 


  const navbarMenü = [
    { title: "Hakkında", url: "/about" },
    { title: "Menü", url: "/menu" },
    { title: "İletişim", url: "/contact" },
    { title: "Giriş Yap", url: "/login" },
    { title: "Üye Ol", url: "/register" },
  ];
  const filteredNavbarMenü = [
    { title: "Hakkında", url: "/about" },
    { title: "Menü", url: "/menu" },
    { title: "İletişim", url: "/contact" },
  ];
  const address = ["Ev Adresi", "İş Adresi", "İstanbul", "Diğer"];

  const currentUser = false;
  return (
    <>
      <nav className="fixed p-4 top-0 z-50 w-full bg-[#E12A32] border-b border-gray-200 flex-wrap xsm:text-xs">
        <div className=" flex-wrap ">
          <div className="flex items-center justify-between  gap-2   ">
            <div className="flex items-center justify-start gap-x-6 ">
              {/* SİDEBAR HAMBURGER MENÜ */}

              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-1 text-sm text-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden xl:hidden "
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>

              <div className="flex w-full ">
                <Link to="/">
                  <span className="self-center text-xl font-semibold sm:text-xl whitespace-nowrap text-white hidden xsm:block">
                    DOLGE VİTA
                  </span>
                </Link>
              </div>
            </div>

         
            <div className="flex items-center">
              <div className="flex gap-6 items-center">
                <div className=" md:hidden lg:flex gap-6 text-white text-base xl:text-lg  ">
                  <ul className="flex">
                    {currentUser &&
                      filteredNavbarMenü.map((item, index) => {
                        return (
                          <li key={index}>
                            {
                              <Link to={item.url} className="mr-4">
                                {item.title}
                              </Link>
                            }
                          </li>
                        );
                      })}
                    {!currentUser &&
                      navbarMenü.map((item, index) => {
                        return (
                          <li key={index}>
                            {
                              <Link to={item.url} className="mr-4">
                                {item.title}
                              </Link>
                            }
                          </li>
                        );
                      })}
                  </ul>
                </div>

                {currentUser && (
                  <>
                    <div className=" relative text-white  " role="button">
                    <Link to="/basket">
                        {" "}
                        <GiShoppingCart className="text-3xl" />
                      </Link>
                      <span className="absolute bottom-5 left-6 text-[0.75rem] font-thin">
                        0
                      </span>
                    </div>
                    <div className="relative text-white" role="button">
                      <MdFavorite className="text-3xl" />
                      <span className="absolute bottom-5 left-6 text-[0.75rem] font-thin">
                        0
                      </span>
                    </div>
                  </>
                )}
                {currentUser && (
                  <>
                    <div className="smx:hidden sm:hidden lg:block">
                      <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                    </div>
                  </>
                )}
                <div
                  className=" z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
               
               
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[65px]"></div>

      <aside
        id="logo-sidebar"
        className="bg-[#E12A32] lg:hidden fixed smx:top-12 sm:top-10
         z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200  "
        aria-label="Sidebar"
      >
     
      </aside>
    </>
  );
};

export default New;