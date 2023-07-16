import React, { useState } from "react";

const SubmitReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="">
      {/* 1. kısım */}

      <div className="flex mx-5 mt-8">
        <div className="w-3/2">
          <div className="">
            <div className="w-2/3 p-7 border-2 m-5 rounded-xl flex justify-between shadow-lg">
              <div className="leading-relaxed ml-5">
                <h4>Medical Engineering 25% Scholarship</h4>
                <h4>Medical School</h4>
                <span className="text-xs text-slate-500">
                  <i className="fa-solid fa-location-dot"></i>
                  <a href="https://www.google.com/maps/place/Kay%C4%B1%C5%9Fda%C4%9F%C4%B1%20Cad.%20No:32%20Ata%C5%9Fehir/%C4%B0STANBUL">
                    {" "}
                    Kayışdağı Cad. No:32 Ataşehir/İstanbul
                  </a>
                </span>
              </div>
              <div className="mr-5 m-auto">
                <p className="font-bold text-xl">$25000</p>
                <span className="text-xs text-slate-500">Year</span>
              </div>
            </div>
            {/* other */}
            <div className="gap-2 border w-2/3 m-5 rounded-xl ">
              <div className="">
                <h4 className="ml-6 mt-4 font-bold">Other</h4>
              </div>

              <div className="grid grid-rows-1  p-4">
                <div className="grid grid-cols-4 text-center bg-[#E5F8F2] border border-1 border-green-300 rounded-xl">
                  <div className="p-10 ">
                    <div className="text-xs">Language</div>
                    <div className="font-bold text-[#00A372]">English</div>
                  </div>
                  <div className="p-10 ">
                    <div className="text-xs">Language</div>
                    <div className="font-bold text-[#00A372]">English</div>
                  </div>
                  <div className="p-10 ">
                    <div className="text-xs">Language</div>
                    <div className="font-bold text-[#00A372]">English</div>
                  </div>
                  <div className="p-10 ">
                    <div className="text-xs">Language</div>
                    <div className="font-bold text-[#00A372]">English</div>
                  </div>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="w-2/3 border ml-5 rounded-xl ">
              <div className=" m-5">
                <h4 className="font-bold">About Department</h4>
              </div>
              <div className="m-3 ">
                <p className="text-slate-500 text-xs indent-2 ">
                  The Acıbadem University School of Medicine was established in
                  2007 and accepted its first students into the academic year
                  starting in 2009 following a two year period where the
                  curriculum was devised. <br />
                  The school was initially established on a modest campus
                  located in Maltepe. In 2013, it moved to the purpose-built
                  Kerem Aydınlar Campus, one of the most developed science
                  campuses in Turkey. The campus features a Center of Advanced
                  Simulation and Education (CASE) while practical applications
                  take place at Acıbadem Atakent and Acıbadem Maslak Education
                  and Research Hospitals and the Education Research Regions
                  whose affiliation with the Council of Higher Education (YÖK)
                  is complete. <br />
                  Education at the School of Medicine is in English and our
                  education program features three phases. Phase I is integrated
                  Basic and Clinical Sciences, Phase II is Clinical Clerkships
                  and Phase III is Internships.Our education is based on an
                  integrated curriculum. <br />
                  In the program for Phase I systems in organisms ranging from
                  the simplest units such as cells to more complex systems
                  including pathologies are taught as a whole. Phase I also
                  includes Clinical Medicine and Professional Skills (CMPS)
                  which is a program designed to be an initial introduction to
                  medical professionalism providing students with relevant
                  knowledge and skills. This program includes applied
                  communication courses designed to help students with honing
                  their skills prior to meeting patients during the Clinical
                  Clerkship phase. Additionally, Phase I is enriched with
                  practical applications at Family and Society Health Centers.
                  This phase involves training settings which support the
                  development of intellectual skills and human values. <br />
                  During the 1-year Clinical Clerkships of Phase II, students
                  continue to develop their existing clinical knowledge and
                  skills by caring for inpatients and outpatients in a hospital
                  setting. <br />
                  During the 1-year Internship of Phase III students undertake
                  the responsibility of patient care in a hospital or primary
                  care setting under the supervision of teaching staff where
                  they are able to apply their knowledge and skill in full.{" "}
                  <br />
                  Students develop their clinical skills through participation
                  in programs at the Center of Advanced Simulation and Education
                  (CASE) for six terms. <br />
                  Our faculty boasts a strong academic staff. Our mission is to
                  ensure young people from Turkey and around the world who
                  choose to study medicine at our establishment are nurtured to
                  become universal physicians who are sensitive to the needs of
                  the society they live in and the world, who fully comprehend
                  the importance of knowledge and academic thought, who are
                  curious and inquisitive, with an excellent command of
                  technology. We strive to ensure our students understand that
                  patients are our priority, who are humanitarian, who have
                  excellent communication skills and who respect their fellow
                  medical professional co-workers and who have embraced the
                  importance of ethical values and team work. <br />
                  Acıbadem University School of Medicine invests in science and
                  encourages its students to carry out research and publish
                  research papers. We emphasize the importance of training in
                  society in addition to internships and we aim to train
                  universal physicians who strive for great achievements in all
                  fields of medicine on a national and international scale. We
                  are proud of the superior levels of competence and awareness
                  displayed by our graduates in specialist programs in the field
                  of primary healthcare. We continue to stride confidently
                  towards our goal of training the best physicians in Turkey.{" "}
                  <br />
                </p>
              </div>
            </div>
            {/* <button onClick={() => setIsOpen(!isOpen)} */}
            {/* Dropdown */}

            <div className="border w-2/3 m-5 rounded-xl ">
              <div className="flex justify-between p-5">
                <div className="">
                  <h4 className=" font-bold">Other</h4>
                </div>
                <div>
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <i class="fa-solid fa-circle-chevron-down"></i>
                  </button>
                </div>
              </div>

              {!isOpen && (
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                      <div className="p-4 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                          <svg
                            width="640px"
                            height="640px"
                            viewBox="0 -64 640 640"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                          >
                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                          </svg>

                          <p className="leading-relaxed">3</p>
                        </div>
                      </div>
                      <div className="p-4 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                          <svg
                            height="800px"
                            width="800px"
                            version="1.1"
                            id="_x32_"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns-xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xml-space="preserve"
                            className=" w-12 h-12 mb-3 inline-block"
                          >
                            <style type="text/css"></style>
                            <g>
                              <polygon
                                class="st0"
                                points="256,381.424 104.628,328.845 0,365.186 256,454.114 512,365.186 407.373,328.845 	"
                              />
                              <polygon
                                class="st0"
                                points="256,272.235 104.628,219.655 0,255.996 256,344.924 512,255.996 407.373,219.655 	"
                              />
                              <polygon
                                class="st0"
                                points="512,146.806 256,57.886 0,146.806 256,235.734 	"
                              />
                            </g>
                          </svg>

                          <p className="leading-relaxed">4,240</p>
                        </div>
                      </div>
                      <div className="p-4 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                          <svg
                            width="640px"
                            height="640px"
                            viewBox="0 -64 640 640"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" w-12 h-12 mb-3 inline-block"
                          >
                            <path d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z" />
                          </svg>

                          <p className="leading-relaxed">1</p>
                        </div>
                      </div>
                      <div className="p-4 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                          {/* className="text-indigo-500 w-12 h-12 mb-3 inline-block" */}
                          <svg
                            width="640px"
                            height="640px"
                            viewBox="0 -64 640 640"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                          >
                            <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                          </svg>

                          <p className="leading-relaxed">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* submit review */}
            <div className="border rounded-xl m-5 w-2/3 grid grid-col-2">
              <div className="m-5 col-span-2">
                <h2 className="text-2xl font-bold">Submit Review</h2>
                <div className="flex gap-3 mt-3 col-span-2">
                  <div className="w-1/2 md:text-xl">
                    <label htmlFor="" className="">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md mt-2 border-2 md:text-xl focus:border-green-light focus:ring-green-dark p-3"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="" className="">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-md mt-2 border-2 md:text-xl focus:border-green-light focus:ring-green-dark p-3"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="w-1/2  md:text-xl">
                    <label htmlFor="" className="">
                      Phone No.
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-md mt-2 border-2 md:text-xl focus:border-green-light focus:ring-green-dark p-3"
                      placeholder="Your Contact"
                    />
                  </div>
                  <div className=" w-1/2">
                    <p className="">Ratting</p>
                    <select className="w-full rounded-md mt-2 border-2  focus:border-green-light focus:ring-green-dark p-3 md:text-xl">
                      <option value="option1">1 : Very Poor</option>
                      <option value="option2">2 : Poor</option>
                      <option value="option3">3 : Good</option>
                      <option value="option2">4 : Very Good</option>
                      <option value="option3">5 : Superb</option>
                    </select>
                  </div>
                </div>
                <div className=" w-5/12"></div>
                <div className="mt-5 ">
                  <div className=" w-full flex flex-col md:text-xl">
                    <label htmlFor="" className="">
                      Your Message
                    </label>
                    <textarea
                      type="text"
                      required
                      className="h-40 rounded-md mt-2 border-2 md:text-xl"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-red-base hover:bg-red-retro rounded-lg  p-4 m-5 text-white-500">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/3 mt-8">
          <div className="border p-4 rounded-xl mb-12 shadow-2xl">
            <button
              className="bg-red-warm  py-3 p-3 rounded-xl hover:bg-green-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 "
              onClick={() => setShow(!show)}
            >
              {show ? "Add Favourite" : "Remove Favourite"}
            </button>
          </div>
          <section className="bg-white dark:bg-gray-900 border mb-10 rounded-xl shadow-2xl">
            <div className="container px-3 py-3 mx-auto flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 m-3 border-2 border-gray-400 rounded-md">
                  <img
                    src="https://www.tr-yös.com/test/6984215678913/logo/acibadem-mehmet-ali-aydinlar-universitesi-logo-1683762727498.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800 capitalize dark:text-white lg:text-lg">
                  ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY
                </h1>
                <div className="flex mt-2 justify-center border-b-2 w-full">
                  <svg
                    className="h-4 w-4 text-gray-400 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      fill="#0D0D0D"
                    ></path>
                  </svg>
                  <p className="ml-1 text-sm text-gray-500">Istanbul</p>
                </div>

                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="+90 (257) 563-7401"
                      className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 no-underline hover:underline"
                    >
                      +90 (257) 563-7401
                    </a>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="info@acibadem.edu.tr"
                      className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 no-underline hover:underline"
                    >
                      info@acibadem.edu.tr
                    </a>
                  </p>
                  <p className="flex items-start -mx-2">
                    <svg
                      width="20px"
                      height="20px"
                      className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                      viewBox="0 0 73.768 73.768"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M117.606,385.2a36.884,36.884,0,1,0,36.884,36.884A36.926,36.926,0,0,0,117.606,385.2Zm33.846,35.383H136.366a48.681,48.681,0,0,0-3.047-16.068,36.786,36.786,0,0,0,8.781-5.808A33.752,33.752,0,0,1,151.452,420.586Zm-32.346-31.072a36.534,36.534,0,0,1,6.069,6.387,39.467,39.467,0,0,1,4.176,7.028,33.843,33.843,0,0,1-10.245,2.061Zm3.534-.935a33.762,33.762,0,0,1,17.292,8.051,33.809,33.809,0,0,1-7.772,5.116A41.252,41.252,0,0,0,122.64,388.579ZM110.19,395.9a36.615,36.615,0,0,1,5.916-6.261v15.35a33.789,33.789,0,0,1-10.116-2.013A39.5,39.5,0,0,1,110.19,395.9Zm-7.013,5.906a33.8,33.8,0,0,1-7.9-5.177,33.757,33.757,0,0,1,17.469-8.074A41.244,41.244,0,0,0,103.177,401.807Zm12.929,6.183v12.6H102a45.607,45.607,0,0,1,2.835-14.838A36.83,36.83,0,0,0,116.106,407.99Zm0,15.6v12.386a36.8,36.8,0,0,0-11.018,2.146A42.373,42.373,0,0,1,102,423.587Zm0,15.386v15.252a47.106,47.106,0,0,1-9.792-13.361A33.819,33.819,0,0,1,116.106,438.973Zm-2.86,16.708a33.755,33.755,0,0,1-18.084-8.24,33.786,33.786,0,0,1,8.306-5.426A48.955,48.955,0,0,0,113.246,455.681Zm5.86-1.313v-15.4a33.8,33.8,0,0,1,9.922,1.94A47.081,47.081,0,0,1,119.106,454.368Zm12.762-12.294a33.846,33.846,0,0,1,8.182,5.367,33.759,33.759,0,0,1-17.909,8.217A48.888,48.888,0,0,0,131.868,442.074Zm-12.762-6.1V423.587h14.257a42.352,42.352,0,0,1-3.106,14.582A36.818,36.818,0,0,0,119.106,435.973Zm0-15.386v-12.6a36.806,36.806,0,0,0,11.4-2.291,45.562,45.562,0,0,1,2.854,14.888ZM93.112,398.711a36.8,36.8,0,0,0,8.91,5.871A48.7,48.7,0,0,0,99,420.587H83.76A33.757,33.757,0,0,1,93.112,398.711ZM83.76,423.587H99a45.675,45.675,0,0,0,3.256,15.683A36.807,36.807,0,0,0,93,445.35,33.755,33.755,0,0,1,83.76,423.587Zm58.447,21.764a36.8,36.8,0,0,0-9.122-6.022,45.69,45.69,0,0,0,3.279-15.742h15.088A33.759,33.759,0,0,1,142.207,445.351Z"
                        transform="translate(-80.722 -385.203)"
                        fill="#0c2c67"
                      />
                    </svg>
                    <a
                      href="https://www.acibadem.edu.tr"
                      className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 no-underline hover:underline"
                    >
                      https://www.acibadem.edu.tr
                    </a>
                  </p>
                  <div className="flex items-end -mx-2">
                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                      Send Message
                      {/* <svg
                        width="20px"
                        height="20px"
                        viewBox="-0.5 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.16109 12.9424L2.91109 12.4324C2.42109 12.3124 2.35109 11.6724 2.80109 11.4624L20.7111 3.55243C21.1811 3.34243 21.6711 3.81243 21.4411 4.25243L13.0111 21.2124C12.7811 21.6424 12.1211 21.5724 12.0011 21.1124L11.1711 13.2124L18.4411 6.41243"
                          stroke="#0F0F0F"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
