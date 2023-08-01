//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MultiSelect, MultiSelectItem, SelectItem } from "@tremor/react";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import PriceForm from "./PriceForm";

function Selections() {
  const [selectedCities, setSelectedCities] = useState();
  const [selectedUnivercities, setSelectedUnivercities] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const { getUni, getCities, getDepartments } = useInfoCalls();
  const { univercities, cities, departments, loading } = useSelector(
    (state) => state.info
  );

  const filteredUniversities =
    selectedCities?.length > 0
      ? univercities?.filter(
          (uni) =>
            selectedCities?.map((item) => item.id).indexOf(uni.city) !== -1
        )
      : univercities;

  const filteredDepartments =
    selectedCities?.length > 0
      ? departments?.filter(
          (department) =>
            filteredUniversities
              ?.map((item) => item.code)
              .indexOf(department.id) !== -1
        )
      : departments;

  useEffect(() => {
    getUni(), getCities(), getDepartments();
  }, []);

  return (
    <>
      <div className=" bottom-20  md:flex md:flex-col md:justify-center md:items-center sm:flex-col  sm:items-center md:w-[100%] sm:w-full max-sm:w-full bg-green-dark rounded lg:p-8 md:p-4 sm:p-1 shadow-xl ">
        <MultiSelect
          className="max-w-full rounded-lg sm:max-w-md bg-white-500 p-2  border border-green-dark"
          onValueChange={"" || setSelectedCities}
          placeholder="Select City"
          value={selectedCities}
        >
          {cities?.map((item, index) => (
            <MultiSelectItem
              className="rounded-md bg-white-500"
              key={index}
              value={item}
            >
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-5 p-2  border border-green-dark"
          onValueChange={"" || setSelectedUnivercities}
          placeholder="Select Univercity"
        >
          {filteredUniversities?.map((item, index) => (
            <MultiSelectItem className="bg-white-500 " key={index} value={item}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <MultiSelect
          className="max-w-full rounded-md sm:max-w-md bg-white-500 mt-5 p-2 border border-green-dark mb-5"
          onValueChange={"" || setSelectedDepartments}
          placeholder="Select Department"
        >
          {filteredDepartments?.map((item, index) => (
            <MultiSelectItem className="bg-white-500 " key={index} value={item}>
              {item.en}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <PriceForm />
      </div>
    </>
  );
}

export default Selections;

// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import Select from "react-select";
// import "./selections.css";
// import { useTranslation } from "react-i18next";

// function Selections( ) {

//   const { t } = useTranslation();

//   const cities = [
//     { value: "ankara", label: "Ankara" },
//     { value: "izmir", label: "İzmir" },
//     { value: "istanbul", label: "İstanbul" },
//     { value: "bursa", label: "Bursa" },
//   ];

//   console.log(cities)

//   const departments = [
//     { value: "ethnology", label: "Ethnology" },
//     { value: "antropologhy", label: "Antropologhy" },
//     { value: "folklore", label: "Folklore" },
//     { value: "prehistory", label: "Prehistory" },
//   ];

//   const universities = [
//     { value: "agu", label: "ABDULLAH GÜL UNIVERSITY" },
//     { value: "amaayu", label: "ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY" },
//     { value: "adu", label: "ADIYAMAN UNIVERSITY" },
//     { value: "aku", label: "AFYON KOCATEPE UNIVERSITY" },
//     {
//       value: "aatbtu",
//       label: "ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ UNIVERSITY",
//     },
//   ];
//   return (
//     <>
//       <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:w-full m-1  sm:m-auto sm:text-left md:flex md:flex-col md:px-4 selections_container">
//         <div className="md:text-left md:w-full selections_cityContainer">
//           <label
//             htmlFor="selectCity"
//             className="w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 md:mb-2"
//           >
//             {t("Select City")}
//           </label>
//           <div className="relative rounded-md text-left">
//             <Select
//               defaultValue={[cities[0]]}
//               isMulti
//               name="selectCity"
//               options={cities}
//               className="xs:w-64 basic-multi-select md:mt-1 md:w-full
//               "
//               classNamePrefix="select"
//             />
//           </div>
//         </div>
//         <div className="md:text-left md:w-full">
//           <label
//             htmlFor="selectUniversity"
//             className="w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900 md:mb-2"
//           >
//             {t("Select University")}
//           </label>
//           <div className="relative rounded-md text-left">
//             <Select
//               defaultValue={[universities[0]]}
//               isMulti
//               name="selectUniversity"
//               options={universities}
//               className="xs:w-64 basic-multi-select  md:w-full md:mx-0"
//               classNamePrefix="select"
//             />
//           </div>
//         </div>
//         <div className="md:text-left md:w-full">
//           <label
//             htmlFor="selectDepartment"
//             className=" w-full py-1.5 pr-10 text-sm text-left font-medium leading-6 text-gray-900"
//           >
//             {t("Select Department")}
//           </label>
//           <div className=" relative rounded-md text-left">
//             <Select
//               defaultValue={[departments[0]]}
//               isMulti
//               name="selectDepartment"
//               options={departments}
//               className="xs:w-64 basic-multi-select md:w-full md:mx-0"
//               classNamePrefix="select"
//             />
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Selections;
