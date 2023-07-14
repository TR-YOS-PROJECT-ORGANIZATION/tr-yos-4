import React, { useState } from "react";

const SubmitReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="">
      {/* 1. kısım */}
      <div >
        <div className="">
          <div className="w-2/3 p-7 border m-5 rounded-xl flex justify-between shadow-lg ">
            <div className=" leading-relaxed ml-5 ">
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
          <div className="border w-2/3 m-5 rounded-xl ">
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
              <p className="text-slate-500 text-sm indent-2 ">
                The Acıbadem University School of Medicine was established in
                2007 and accepted its first students into the academic year
                starting in 2009 following a two year period where the
                curriculum was devised. <br />
                The school was initially established on a modest campus located
                in Maltepe. In 2013, it moved to the purpose-built Kerem
                Aydınlar Campus, one of the most developed science campuses in
                Turkey. The campus features a Center of Advanced Simulation and
                Education (CASE) while practical applications take place at
                Acıbadem Atakent and Acıbadem Maslak Education and Research
                Hospitals and the Education Research Regions whose affiliation
                with the Council of Higher Education (YÖK) is complete. <br />
                Education at the School of Medicine is in English and our
                education program features three phases. Phase I is integrated
                Basic and Clinical Sciences, Phase II is Clinical Clerkships and
                Phase III is Internships.Our education is based on an integrated
                curriculum. <br />
                In the program for Phase I systems in organisms ranging from the
                simplest units such as cells to more complex systems including
                pathologies are taught as a whole. Phase I also includes
                Clinical Medicine and Professional Skills (CMPS) which is a
                program designed to be an initial introduction to medical
                professionalism providing students with relevant knowledge and
                skills. This program includes applied communication courses
                designed to help students with honing their skills prior to
                meeting patients during the Clinical Clerkship phase.
                Additionally, Phase I is enriched with practical applications at
                Family and Society Health Centers. This phase involves training
                settings which support the development of intellectual skills
                and human values. <br />
                During the 1-year Clinical Clerkships of Phase II, students
                continue to develop their existing clinical knowledge and skills
                by caring for inpatients and outpatients in a hospital setting.{" "}
                <br />
                During the 1-year Internship of Phase III students undertake the
                responsibility of patient care in a hospital or primary care
                setting under the supervision of teaching staff where they are
                able to apply their knowledge and skill in full. <br />
                Students develop their clinical skills through participation in
                programs at the Center of Advanced Simulation and Education
                (CASE) for six terms. <br />
                Our faculty boasts a strong academic staff. Our mission is to
                ensure young people from Turkey and around the world who choose
                to study medicine at our establishment are nurtured to become
                universal physicians who are sensitive to the needs of the
                society they live in and the world, who fully comprehend the
                importance of knowledge and academic thought, who are curious
                and inquisitive, with an excellent command of technology. We
                strive to ensure our students understand that patients are our
                priority, who are humanitarian, who have excellent communication
                skills and who respect their fellow medical professional
                co-workers and who have embraced the importance of ethical
                values and team work. <br />
                Acıbadem University School of Medicine invests in science and
                encourages its students to carry out research and publish
                research papers. We emphasize the importance of training in
                society in addition to internships and we aim to train universal
                physicians who strive for great achievements in all fields of
                medicine on a national and international scale. We are proud of
                the superior levels of competence and awareness displayed by our
                graduates in specialist programs in the field of primary
                healthcare. We continue to stride confidently towards our goal
                of training the best physicians in Turkey. <br />
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
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
          <div className="border rounded-xl m-5 w-2/3 h-full ">
            <div className="m-5  ">
              <h2 className="text-2xl font-bold">Submit Review</h2>
              <div className="flex gap-3 mt-3 ">
                <div className=" w-1/2 ">
                  <label htmlFor="" className="">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark p-3"
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
                    className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark p-3"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div className="w-1/2">
                  <label htmlFor="" className="">
                    Phone No.
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark p-3"
                    placeholder="Your Contact"
                  />
                </div>
                <div className=" w-1/2">
                  <p className="">Ratting</p>
                  <select className="w-full rounded-md mt-2 border-2 focus:border-green-light focus:ring-green-dark p-3">
                    <option value="option1">1 : Very Poor</option>
                    <option value="option2">2 : Poor</option>
                    <option value="option3">3 : Good</option>
                    <option value="option2">4 : Very Good</option>
                    <option value="option3">5 : Superb</option>
                  </select>
                </div>
              </div>
              <div className=" w-5/12"></div>
              <div className="mt-5">
                <div className=" w-full flex flex-col">
                  <label htmlFor="" className="">
                    Your Message
                  </label>
                  <textarea
                    type="text"
                    required
                    className="h-40 rounded-md mt-2 border-2"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>

            <button className="bg-red-base hover:bg-red-retro rounded-lg  p-4 m-5 text-white-500">
              Submit Review
            </button>
          </div>
        </div>

        <div className="sidebar w-1/3">
          <div className="likebar  border  rounded-xl ">
            <button
              className="border bg-red-warm  py-3 rounded-xl "
              onClick={() => setShow(!show)}
            >
              {show ? "Add Favourite" : "Remove Favourite"}
            </button>
          </div>
		  
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
