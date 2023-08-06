import React, { useEffect,useState } from "react";
import SubmitReview from "./UniDetailSubmit";
import Slider from "../universitiesDetail/UnİDetailSlider";
// import WorkUs from "../../components/workUs/WorkUs";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import UniDetailSubmit from "./UniDetailSubmit";
import { Dots } from "react-activity";

const UniversitiesDetail = () => {
  const { getAllDepartments, getUni } = useInfoCalls();
  const { allDepartments, univercities } = useSelector((state) => state.info);
  const [ details, setDetails] = useState([]);

  useEffect(() => {
    getAllDepartments();
    getUni();
    getUniversityDetail();
  }, []);

  const { code } = useParams();

  const dept = allDepartments?.filter((item) => item.university.code === code);
  const uni = univercities?.filter(
    (item) => item?.code === dept[0].university.code
  );
  const getUniversityDetail = async () => {
    try {
      await axios.get(
        `https://tr-yös.com/api/v1/record/departmentsbyuni.php?uni_code=${code}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      ).then((data)=>setDetails(data.data));
     
    } catch (error) {
      console.log(error);
    }
  };



 


  return (
    <div>
      <Slider />
      { details?.map((det,index)=>
        <UniDetailSubmit key={index} det={det} dept={dept} uni={uni} />
) }
    </div>
  );
};

export default UniversitiesDetail;
