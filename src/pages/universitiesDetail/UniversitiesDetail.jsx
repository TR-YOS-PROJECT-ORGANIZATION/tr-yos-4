import React, { useEffect,useState } from "react";
import SubmitReview from "./UniDetailSubmit";
import Slider from "react-slick"

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
  console.log(dept);
  const uni = univercities?.filter(
    (item) => item?.code === dept?.[0]?.university.code
  );
  console.log(uni);

  console.log("code", code);

 

  const getUniversityDetail = async () => {
    try {
      await axios.get(
        `https://tr-yös.com/api/v1/record/departmentsbyuni.php?uni_code=${code}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      ).then((data)=>setDetails(data.data[0]));
      
     
    } catch (error) {
      console.log(error);
    }
  };

  console.log(details);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    
   
    
  };

 


  return (
    <div>
      <Slider {...settings}>

      {details?.images?.map((image, index) => (
        <div className="relative" key={index}>
          <img className="w-full h-[25rem] object-cover" src={image} alt={`Image ${index}`} />
        </div>
      ))}
        
      
      </Slider>
      
        <UniDetailSubmit det={details} dept={dept} uni={uni}
         />

    </div>
  );
};

export default UniversitiesDetail;
