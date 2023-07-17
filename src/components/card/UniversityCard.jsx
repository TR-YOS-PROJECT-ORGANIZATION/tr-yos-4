import React from "react";
import UniCard from "./UniCard";

const UniversityCard = ({ key,item }) => { 
  return (
    <>

    
      <div className="lg:flex lg:justify-center lg:items-center text-bold ">
        <div className="md:grid md:grid-cols-2  md:justify-evenly w-3/4 ">
           <UniCard item={item}/>   
           <UniCard/>  
  
        </div>
      </div>
    </>
  );
};

export default UniversityCard;
