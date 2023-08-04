// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import university from "../../images/university.jpg";
import { useEffect } from "react";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useSelector } from "react-redux";
import axios from "axios";
import UniCard from "../../components/card/UniCard";
import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";
import { Dots } from "react-activity";

const UniversitiesPage = () => {
  const { getUni, getAllDepartments } = useInfoCalls();
  const { univercities, allDepartments } = useSelector((state) => state.info);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [universitiesPerPage, setuniversitiesPerPage] = useState(20);
  const [faculties, setFaculties] = useState();

  const getFaculties = async () => {
    try {
      const data = await axios.get(
        `https://tr-yös.com/api/v1/education/allfaculties.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      setFaculties(data.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUni();
    getAllDepartments();
  }, []);

  useEffect(() => {
    getFaculties();
  }, []);

  const { t } = useTranslation();

  if (!allDepartments) return <Dots  size={32}/>;

  console.log("unis", univercities);
  console.log("deps", allDepartments);


  console.log(faculties);

  const indexOfLastUni = currentPage * universitiesPerPage;

  const indexOfFirstuni = indexOfLastUni - universitiesPerPage;
  const currentUniversities = univercities?.slice(
    indexOfFirstuni,
    indexOfLastUni
  );
  const totalPagesNum = Math.ceil(univercities?.length / universitiesPerPage);

  return (
    <>
      <div className="flex flex-col ">
        <div className="relative">
          <img className="w-screen h-96" src={university} alt="#" />
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-gray-800 bg-opacity-60">
            <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl m-2 ">
              {t("Universities")}
            </h1>
            <h2 className="text-gray-100 text-xl sm:text-2xl lg:text-3xl m-2">
              {t("You can find all universities and departments in this list.")}
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {currentUniversities?.map((item) => (
            <div key={item.id}>
              <UniCard
                item={item}
                departmentsLength={
                  allDepartments?.filter(
                    (d) => d?.university.code === item.code
                  ).length
                }
                facultiesLength={
                  faculties?.filter(
                    (f) =>
                      allDepartments
                        ?.filter((d) => d?.university.code === item.code)
                        ?.map((d) => d.faculty.code)
                        .indexOf(f.id) !== -1
                  ).length
                }
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentUniversities={currentUniversities}
        univercities={univercities}
      />
    </>
  );
};
export default UniversitiesPage;
