import React, { useEffect } from "react";
import SubmitReview from "./SubmitReview";
import Slider from "../departmentDetail/Slider";
import WorkUs from "../../components/workUs/WorkUs";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import { Dots } from "react-activity";


const DepartmentDetail = () => {
  const { code } = useParams();
  console.log(code);

  const { getAllDepartments, getUni } = useInfoCalls();
  const { allDepartments, univercities } = useSelector((state) => state.info);
  

  useEffect(() => {
    getAllDepartments();
    getUni();
  }, []);

  const dept = allDepartments?.filter((item) => item.department.code === code);
  console.log(dept);
  const uni = univercities?.filter((item)=> item.code === dept?.[0]?.university.code)
  console.log(uni);

  if(!allDepartments) return <Dots/>

  return (
    <div>
      <Slider />

      <SubmitReview dept={dept} uni={uni}/>
      <WorkUs />
    </div>
  );
};

export default DepartmentDetail;
