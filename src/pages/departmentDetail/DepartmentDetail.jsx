import React, { useEffect } from "react";
import SubmitReview from "./SubmitReview";
import Slider from "../departmentDetail/Slider";
import WorkUs from "../../components/workUs/WorkUs";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";

const DepartmentDetail = () => {
  const { code } = useParams();
  console.log(code);

  const { getAllDepartments } = useInfoCalls();
  const { allDepartments } = useSelector((state) => state.info);
  const { state: item } = useLocation();
  console.log(item);

  useEffect(() => {
    getAllDepartments();
  }, []);

  const dept = allDepartments?.filter((item) => item.department.code === code);
  console.log(dept);
  return (
    <div>
      <Slider />

      <SubmitReview dept={dept} />
      <WorkUs />
    </div>
  );
};

export default DepartmentDetail;
