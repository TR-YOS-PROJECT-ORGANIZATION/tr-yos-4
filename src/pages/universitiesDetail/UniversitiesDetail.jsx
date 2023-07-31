// import React, { useEffect } from "react";

// import UniSlider from "./UnİDetailSlider";

// import { useLocation, useParams } from "react-router-dom";

// import useInfoCalls from "../../hooks/useInfoCalls";
// import { useSelector } from "react-redux";
// import UniDetailSubmit from "./UniDetailSubmit";
// // import { fromJSON } from "postcss";


// const UniversitiesDetail = () => { // Changed the component name to UniversitiesDetail
//   const { code } = useParams();
//   console.log(code);
//   const{ univercities} = useSelector((state) => state?.info);
//   const { getUni } = useInfoCalls();
  
//   // const {t} = useTranslation();
//   useEffect(() => {
//     getUni();
//   }, []);

  

// console.log(univercities)
//   // const dept = allUnivercities?.filter((item) => item.univercities.code === code);
  
//   const uni = univercities?.filter((item)=> item.code === code)
//   console.log(uni);
//   return (
//     <div>
//       <UniSlider />

//       <UniDetailSubmit  uni={uni}/>
    
//     </div>
//   );
// };

// export default UniversitiesDetail; // Changed the export name to UniversitiesDetail



import React, { useEffect } from "react";
import SubmitReview from "./UniDetailSubmit";
import Slider from "../universitiesDetail/UnİDetailSlider";
// import WorkUs from "../../components/workUs/WorkUs";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import UniDetailSubmit from "./UniDetailSubmit";

const UniversitiesDetail = () => {
  const { code } = useParams();
  console.log(code);

  const { getAllDepartments, getUni } = useInfoCalls();
  const { allDepartments, univercities } = useSelector((state) => state.info);
  

  useEffect(() => {
    getAllDepartments();
    getUni();
  }, []);

  const dept = allDepartments?.filter((item) => item.university.code === code);
  console.log(dept);
  const uni = univercities?.filter((item)=> item.code === dept[0].university.code)
  console.log(uni);
  return (
    <div>
      <Slider />

      <UniDetailSubmit dept={dept} uni={uni}/>
      {/* <WorkUs /> */}
    </div>
  );
};

export default UniversitiesDetail;

