import React from "react";

const WorkUs = () => {
  return (
    <>
      {/* Section: Design Block */}
      <section className="bg-stone-400">
        {/* Jumbotron */}
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.17),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,56%,47%,1)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 className="mt-2 mb-8 text-2xl  tracking-tight md:text-2xl xl:text-3xl">
                    Are You Already <br /> Working With Us?
                  </h1>
                  <p className="mb-20">
                    At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                    ducimus qui blanditiis praesentium voluptatum <br />{" "}
                    deleniti atque corrupti quos dolores et quas molestias
                  </p>
                  <form>
                    <label
                      htmlFor="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required=""
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-3.5 bottom-2.5 bg-red-warm  hover:bg-red-retro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 ">
                <img
                  src="images/business.jpg"
                  className=" h-100 w-100 rounded-lg shadow-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default WorkUs;
