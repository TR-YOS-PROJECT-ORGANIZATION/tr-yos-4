import React from "react";

const Work = () => {
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="mb-40">
          {/* Jumbotron */}
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                    <h1 className="mt-2 mb-16 text-4xl tracking-tight md:text-5xl xl:text-4xl">
                      Are You Already
                      <br />
                      <span className="text-primary">Working With Us?</span>
                    </h1>
                    <p className="pb-16">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi voluptatem provident nostrum cum nesciunt
                      laboriosam temporibus iste ullam rem veritatis ut
                      similique deserunt doloremque dolore optio, cupiditate
                      nulla, ipsa sapiente!
                    </p>
                    <form>
                      <label
                        htmlFor="search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required=""
                        />
                        <button
                          type="subscribe"
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="workM.jpg"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default Work;
