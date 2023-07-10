import React from "react";

const Card1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
      <>
        {/* component */}
        <div className="relative mx-auto w-full max-w-sm pt-6 ml-6">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg border">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500">
                  <img
                    src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?size=626&ext=jpg&ga=GA1.2.1262624441.1688684642&semt=sph"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 px-2 py-1 m-2 rounded-md">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <h2
                        className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                        title="New York"
                      >
                        Biology
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="Faculty"
                      >
                        Faculty Of Arts And Science
                      </p>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="University"
                      >
                        ABDULLAH GUL UNIVERSITY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 border-t border-gray-200 pt-2">
                  <span className="inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                    {" "}
                    Compare{" "}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 grid-rows-1 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    <span className="xl:mt-0"> Kayseri </span>
                  </p>
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      fill="#000000"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M15.3,27.1c-0.7-0.4-1.3-0.9-1.8-1.5c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c0.7,0.8,1.4,1.5,2.3,2
		c0.4,0.3,0.7,0.7,0.7,1.1c0,0.6,0.4,1,1,1s1-0.4,1-1C17,28.8,16.4,27.7,15.3,27.1z"
                        />
                        <path d="M5,5v17c0,1.7,1.3,3,3,3h1v-2V4V2H8C6.3,2,5,3.3,5,5z" />
                        <path
                          d="M21,12.5V5c0-1.7-1.3-3-3-3h-7v1v1v19v1v1h6.8c0.1,0.9,0.5,1.8,1.2,2.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.8-1.5-0.5-2.3c0.1-0.4,0-0.7-0.2-1l-3.3-3.3c-1-1-1.1-2.7-0.3-4l3.2,3.2l1,1c0.4,0.4,1,0.4,1.4,0
		s0.4-1,0-1.4L21,17.6v-2.8c1.9,1.3,3,3.4,3,5.7V30c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.5C26,17.1,24.1,14,21,12.5z M17,10
		c0,0.6-0.4,1-1,1s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V10z"
                        />
                      </g>
                    </svg>
                    <span className="mt-0"> 15000/year </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-sm pt-6 ml-6">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg border">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500">
                  <img
                    src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?size=626&ext=jpg&ga=GA1.2.1262624441.1688684642&semt=sph"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 px-2 py-1 m-2 rounded-md">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <h2
                        className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                        title="New York"
                      >
                        Biology
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="Faculty"
                      >
                        Faculty Of Arts And Science
                      </p>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="University"
                      >
                        ABDULLAH GUL UNIVERSITY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 border-t border-gray-200 pt-2">
                  <span className="inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                    {" "}
                    Compare{" "}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 grid-rows-1 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    <span className="xl:mt-0"> Kayseri </span>
                  </p>
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      fill="#000000"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M15.3,27.1c-0.7-0.4-1.3-0.9-1.8-1.5c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c0.7,0.8,1.4,1.5,2.3,2
		c0.4,0.3,0.7,0.7,0.7,1.1c0,0.6,0.4,1,1,1s1-0.4,1-1C17,28.8,16.4,27.7,15.3,27.1z"
                        />
                        <path d="M5,5v17c0,1.7,1.3,3,3,3h1v-2V4V2H8C6.3,2,5,3.3,5,5z" />
                        <path
                          d="M21,12.5V5c0-1.7-1.3-3-3-3h-7v1v1v19v1v1h6.8c0.1,0.9,0.5,1.8,1.2,2.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.8-1.5-0.5-2.3c0.1-0.4,0-0.7-0.2-1l-3.3-3.3c-1-1-1.1-2.7-0.3-4l3.2,3.2l1,1c0.4,0.4,1,0.4,1.4,0
		s0.4-1,0-1.4L21,17.6v-2.8c1.9,1.3,3,3.4,3,5.7V30c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.5C26,17.1,24.1,14,21,12.5z M17,10
		c0,0.6-0.4,1-1,1s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V10z"
                        />
                      </g>
                    </svg>
                    <span className="mt-0"> 15000/year </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-sm pt-6 ml-6">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg border">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500">
                  <img
                    src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?size=626&ext=jpg&ga=GA1.2.1262624441.1688684642&semt=sph"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 px-2 py-1 m-2 rounded-md">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <h2
                        className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                        title="New York"
                      >
                        Biology
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="Faculty"
                      >
                        Faculty Of Arts And Science
                      </p>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="University"
                      >
                        ABDULLAH GUL UNIVERSITY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 border-t border-gray-200 pt-2">
                  <span className="inline-flex justify-items-start select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                    {" "}
                    Compare{" "}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 grid-rows-1 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    <span className="xl:mt-0"> Kayseri </span>
                  </p>
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      fill="#000000"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M15.3,27.1c-0.7-0.4-1.3-0.9-1.8-1.5c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c0.7,0.8,1.4,1.5,2.3,2
		c0.4,0.3,0.7,0.7,0.7,1.1c0,0.6,0.4,1,1,1s1-0.4,1-1C17,28.8,16.4,27.7,15.3,27.1z"
                        />
                        <path d="M5,5v17c0,1.7,1.3,3,3,3h1v-2V4V2H8C6.3,2,5,3.3,5,5z" />
                        <path
                          d="M21,12.5V5c0-1.7-1.3-3-3-3h-7v1v1v19v1v1h6.8c0.1,0.9,0.5,1.8,1.2,2.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.8-1.5-0.5-2.3c0.1-0.4,0-0.7-0.2-1l-3.3-3.3c-1-1-1.1-2.7-0.3-4l3.2,3.2l1,1c0.4,0.4,1,0.4,1.4,0
		s0.4-1,0-1.4L21,17.6v-2.8c1.9,1.3,3,3.4,3,5.7V30c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.5C26,17.1,24.1,14,21,12.5z M17,10
		c0,0.6-0.4,1-1,1s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V10z"
                        />
                      </g>
                    </svg>

                    <span className="mt-0"> 15000/year </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </>
    </div>
  );
};

export default Card1;
