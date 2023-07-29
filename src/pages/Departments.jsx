// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
// import PriceForm from "../components/departmentComponents/PriceForm";
// import "../components/departmentComponents/departments.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from '../components/card/OneCard'
// eslint-disable-next-line no-unused-vars
import i18next, { t } from "i18next";
import axios from "axios";
import useCardCalls from "../hooks/useCardCalls";
function Departments() {
  const { getAllDepartments, getUserInfo } = useInfoCalls();
  const { getCompareList } = useCardCalls();
  const { compareList } = useSelector((state) => state?.card);
  const { allDepartments } = useSelector((state) => state.info);
  const { currentUser } = useSelector((state) => state?.auth);
  const [isOpen, setOpen] = useState(false);
  // const [compareList, setCompareList] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);
  const currentUserId = currentUser?.userID;


  useEffect(() => {
    currentUser && getUserInfo(currentUser.userID);
  }, [currentUser]);
  console.log(currentUser);

  useEffect(() => {
    getCompareList(currentUserId);
    getAllDepartments();
  }, [])


  const department = allDepartments?.slice(0, 51)

  const moveToSelectedDepartments = (id) => {
    const currentUserId = currentUser?.userID;
    const departmentId = id

    try {
      axios.get(`https://tr-yös.com/api/v1/users/addcompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
    }
    catch (error) {
      console.log(error);
    }
    // setCompareList((prevState) => [...prevState, departmentId]);
    // console.log(compareList)
  }
  // console.log(compareList)

  const removeFromSelectedDepartments = (id) => {
    const currentUserId = currentUser.user.userId;
    const departmentId = id

    try {
      axios.get(`https://tr-yös.com/api/v1/users/deletecompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
    } catch (error) {
      console.log(error);
    }
    // setCompareList(prevState => prevState.filter((item) => item !== departmentId));
    // console.log(compareList);
  }

  //Add to Favourites///

  const moveToFavourites = (id) => {

    const currentUserId = currentUser.userID;
    const departmentId = id

    try {
      axios.get(`https://tr-yös.com/api/v1/users/addfavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
    }
    catch (error) {
      console.log(error);
    }
    setFavouriteList(prevState => [...prevState, departmentId]);
    console.log(favouriteList)

  }

  const removeFromFavourites = (id) => {
    const currentUserId = currentUser.userID;
    const departmentId = id

    try {
      axios.get(`https://tr-yös.com/api/v1/users/deletefavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
    } catch (error) {
      console.log(error);
    }

    console.log(favouriteList);
  }


  return (
    <>
      <div className="flex flex-col">
        <ImageSection />
        <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
          <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
            <button>

              <Hamburger
                label="show menu"
                toggled={isOpen}
                toggle={setOpen}

                direction="right"
              />
              {
                isOpen && (
                  <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
                    <form
                      method="POST"
                      className="border shadow-lg md:mt-36 rounded-lg "
                    >
                      <Selections />
                      {/* <PriceForm /> */}

                      <div className="flex flex-row  justify-end sm:justify-start md:justify-end bg-green-dark rounded ">
                        <button name="searchDepartments" type="submit" className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 md:w-48 sm:w-96 font-bold rounded  hover:bg-red-retro shadow-md  lg:p-8 md:p-4 ">
                          {t("Search")}
                        </button>
                      </div>
                    </form>
                  </div>
                )
              }

            </button>
          </div>
          <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
            <form
              method="POST"
              className="border shadow-lg md:mt-36 rounded-lg "
            >
              <Selections />
              {/* <PriceForm /> */}
              <div className="flex flex-row  justify-end sm:justify-start md:justify-center md: w-full bg-green-dark rounded ">
                <button name="searchDepartments" type="submit" className="max-sm:w-full max-sm:my-5 lg:text-sm md:sm:text-sm  max-sm:text-xs bg-red-warm text-white-cream sm:p-2  max-sm:p-3 sm:w-24 font-bold hover:bg-red-retro shadow-md md:p-4 md:w-full rounded-md">
                  {t("Search")}
                </button>
              </div>
            </form>
          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
                <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}...</p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">

              {
                department?.map((element) =>
                  <div key={element.id}>

                    <OneCard element={element}
                      facultyTr={element.faculty.tr}
                      facultyEn={element.faculty.en}
                      universityTr={element.university.tr}
                      universityEn={element.university.en}
                      departmentTr={element.department.tr}
                      departmentEn={element.department.en}
                      cityTr={element.city.tr}
                      cityEn={element.city.en}
                      code={element.department.code}
                      price={element.price}
                      id={element.id}
                      moveToSelectedDepartments={moveToSelectedDepartments}
                      removeFromSelectedDepartments={removeFromSelectedDepartments}
                      moveToFavourites={moveToFavourites}
                      removeFromFavourites={removeFromFavourites}
                      isInCompare={compareList?.departments.map((item) => item).includes(element.id)}
                      isInFavourite={favouriteList.includes(element.id)}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default Departments;




//Çalışan Versiyon///////////

// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import ImageSection from "../components/departmentComponents/ImageSection";
// import Selections from "../components/departmentComponents/Selections";
// import PriceForm from "../components/departmentComponents/PriceForm";
// import "../components/departmentComponents/departments.css";
// import Hamburger from "hamburger-react";
// import { useState } from "react";
// import useInfoCalls from "../hooks/useInfoCalls";
// import { useSelector } from "react-redux";
// import OneCard from '../components/card/OneCard'
// // eslint-disable-next-line no-unused-vars
// import i18next, { t } from "i18next";
// import axios from "axios";
// function Departments() {
//   const { getDepartments, getCities, getUserInfo } = useInfoCalls();
//   const { departments, cities, userInfo } = useSelector((state) => state.info);
//   const { currentUser } = useSelector((state) => state?.auth);
//   const [isOpen, setOpen] = useState(false);
//   const [compareList, setCompareList] = useState([]);

//   useEffect(() => {
//     getDepartments();
//     getCities();
//     getUserInfo();
//   }, []);

//   const department = departments?.slice(0, 51)


//   // const getUniById= uniById?.slice(200,-1)
//   console.log(departments);

//   console.log(cities);

//   const moveToSelectedDepartments = (id) => {
//     const currentUserId = currentUser.userID;
//     const departmentId = id
//     alert(departmentId)
//     try {
//       axios.get(`https://tr-yös.com/api/v1/users/addcompare.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
//     }
//     catch (error) {
//       console.log(error);
//     }
//     setCompareList(prevState => [...prevState, departmentId]);
//     console.log(compareList)
//   }

//   const removeFromSelectedDepartments = (id) => {
//     const currentUserId = currentUser.userID;
//     const departmentId = id
//     alert(departmentId)
//     try {
//       axios.get(`https://tr-yös.com/api/v1/users/deletecompare.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
//     } catch (error) {
//       console.log(error);
//     }
//     setCompareList(prevState => prevState.filter((item) => item !== departmentId));
//     console.log(compareList);
//   }

//   return (
//     <>
//       <div className="flex flex-col">
//         <ImageSection />

//         {/*  */}

//         <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
//           <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
//             <button>

//               <Hamburger
//                 label="show menu"
//                 toggled={isOpen}
//                 toggle={setOpen}

//                 direction="right"
//               />
//               {
//                 isOpen && (
//                   <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
//                     <form
//                       method="POST"
//                       className="border shadow-lg md:mt-36 rounded-lg "
//                     >
//                       <Selections />
//                       <PriceForm />

//                       <div className="flex flex-row mx-2 justify-end xs:justify-start xs:mx-0  sm:justify-start md:justify-end departments_search_button_container">
//                         <button
//                           className="sm:mx-0 block xs:float-left float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
//                           name="searchDepartments"
//                           type="submit"
//                         >
//                           {t("Search")}
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 )
//               }

//             </button>
//           </div>
//           <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
//             <form
//               method="POST"
//               className="border shadow-lg md:mt-36 rounded-lg "
//             >


//               <Selections />
//               <PriceForm />
//               {/*

//               {
//                 cities?.map((item) =>
//                   <div key={item.id}>
//                     <Selections item={item} />
//                     <PriceForm />
//                   </div>
//                 )
//               } */}

//               <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
//                 <button
//                   className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
//                   name="searchDepartments"
//                   type="submit"
//                 >
//                   {t("Search")}
//                 </button>
//               </div>
//             </form>


//           </div>
//           <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
//             <div className="row mt-16 justify-center-center">
//               <div className="sec-heading center">
//                 <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
//                 <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}...</p>
//               </div>
//             </div>
//             <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">

//               {
//                 department?.map((item) =>
//                   <div key={item.id}>
//                     <OneCard
//                       facultyCode={item.facultyCode}
//                       en={item.en}
//                       tr={item.tr}
//                       item={item}
//                       id={item.id}
//                       moveToSelectedDepartments={moveToSelectedDepartments}
//                       removeFromSelectedDepartments={removeFromSelectedDepartments}
//                       isInCompare={compareList.includes(item.id)}
//                     />
//                   </div>
//                 )}
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }


// export default Departments;

//////Çalışan Versiyon////


/**Kısmen çalışan versiyon
 *
 * //
 * import ImageSection from "../components/departmentComponents/ImageSection";
import Selections from "../components/departmentComponents/Selections";
import PriceForm from "../components/departmentComponents/PriceForm";
import "../components/departmentComponents/departments.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useInfoCalls from "../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import OneCard from '../components/card/OneCard'
// eslint-disable-next-line no-unused-vars
import i18next, { t } from "i18next";
function Departments(item, facultyCode, en, tr, id) {
  const { getDepartments, getCities } = useInfoCalls();
  const { departments, cities } = useSelector((state) => state.info);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    getDepartments();
    getCities();
  }, []);

  const department = departments?.slice(0, 51)


  // const getUniById= uniById?.slice(200,-1)
  console.log(department);

  console.log(cities);

  return (
    <>
      <div className="flex flex-col">
        <ImageSection />

        {/*

        <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
          <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
            <button>

              <Hamburger
                label="show menu"
                toggled={isOpen}
                toggle={setOpen}

                direction="right"
              />
              {
                isOpen && (
                  <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
                    <form
                      method="POST"
                      className="border shadow-lg md:mt-36 rounded-lg "
                    >
                      <Selections />
                      <PriceForm />

                      <div className="flex flex-row mx-2 justify-end xs:justify-start xs:mx-0  sm:justify-start md:justify-end departments_search_button_container">
                        <button
                          className="sm:mx-0 block xs:float-left float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
                          name="searchDepartments"
                          type="submit"
                        >
                          {t("Search")}
                        </button>
                      </div>
                    </form>
                  </div>
                )
              }

            </button>
          </div>
          <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
            <form
              method="POST"
              className="border shadow-lg md:mt-36 rounded-lg "
            >


              <Selections />
              <PriceForm />
              {/*

              {
                cities?.map((item) =>
                  <div key={item.id}>
                    <Selections item={item} />
                    <PriceForm />
                  </div>
                )
              }

              <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
                <button
                  className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
                  name="searchDepartments"
                  type="submit"
                >
                  {t("Search")}
                </button>
              </div>
            </form>


          </div>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
            <div className="row mt-16 justify-center-center">
              <div className="sec-heading center">
                <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
                <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}...</p>
              </div>
            </div>
            <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">

              {
                department?.map((item) =>
                  <div key={item.id}>
                    <OneCard
                      facultyCode={item.facultyCode}
                      en={item.en}
                      tr={item.tr}
                      item={item}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default Departments;

//////////////////////////







// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import ImageSection from "../components/departmentComponents/ImageSection";
// import Selections from "../components/departmentComponents/Selections";
// import PriceForm from "../components/departmentComponents/PriceForm";
// import "../components/departmentComponents/departments.css";
// import Hamburger from "hamburger-react";
// import { useState } from "react";
// import useInfoCalls from "../hooks/useInfoCalls";
// import { useSelector } from "react-redux";
// import OneCard from '../components/card/OneCard'
// // eslint-disable-next-line no-unused-vars
// import i18next, { t } from "i18next";



// function Departments() {
//   const { getDepartments, getCities } = useInfoCalls();
//   const { departments, cities } = useSelector((state) => state.info);
//   const [isOpen, setOpen] = useState(false);

//   useEffect(() => {
//     getDepartments();
//     getCities();
//   }, []);

// const department = departments?.slice(0, 51 )


//   // const getUniById= uniById?.slice(200,-1)
//   console.log(departments);

//   console.log(cities);

//   return (
//     <>
//       <div className="flex flex-col">
//         <ImageSection />

//         {/*

//         <div className="xs:flex-col xs:justify-center xs:items-center md:flex md:flex-row md:justify-center md:items-start">
//           <div className="xs:visible xs:flex xs:justify-center xs:items-center sm:visible md:hidden">
//             <button>

//               <Hamburger
//                 label="show menu"
//                 toggled={isOpen}
//                 toggle={setOpen}

//                 direction="right"
//               />
//               {
//                 isOpen && (
//                   <div className="md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
//                     <form
//                       method="POST"
//                       className="border shadow-lg md:mt-36 rounded-lg "
//                     >
//                       <Selections />
//                       <PriceForm />

//                       <div className="flex flex-row mx-2 justify-end xs:justify-start xs:mx-0  sm:justify-start md:justify-end departments_search_button_container">
//                         <button
//                           className="sm:mx-0 block xs:float-left float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
//                           name="searchDepartments"
//                           type="submit"
//                         >
//                           {t("Search")}
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 )
//               }

//             </button>
//           </div>
//           <div className="xs:hidden sm:hidden md:visible md:flex md:flex-row md:justify-center md:items-center md:ml-3">
//             <form
//               method="POST"
//               className="border shadow-lg md:mt-36 rounded-lg "
//             >


//               <Selections />
//               <PriceForm />
//               {/*

//               {
//                 cities?.map((item) =>
//                   <div key={item.id}>
//                     <Selections item={item} />
//                     <PriceForm />
//                   </div>
//                 )
//               }

//               <div className="flex flex-row mx-2 justify-end sm:justify-start md:justify-end departments_search_button_container">
//                 <button
//                   className="block float-right bg-red-warm m-2 w-1/4 py-1 rounded-md text-white departments_search_button md:px-auto md:w-full"
//                   name="searchDepartments"
//                   type="submit"
//                 >
//                   {t("Search")}
//                 </button>
//               </div>
//             </form>


//           </div>
//           <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:px-0">
//             <div className="row mt-16 justify-center-center">
//               <div className="sec-heading center">
//                 <h2 className="font-extrabold text-2xl">{t("Our Departments")}</h2>
//                 <p>{t("Our Departments")} {t("Our Departments")} {t("Our Departments")}...</p>
//               </div>
//             </div>
//             <div className="xs:m-0 xs:px-0 sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3">

//               {
//                 department?.map((item) =>
//                   <div key={item.id}>
//                     <OneCard item={item}
//                     departmentId={item.id}
//                      />
//                   </div>
//                 )}
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }


// export default Departments;

*/
