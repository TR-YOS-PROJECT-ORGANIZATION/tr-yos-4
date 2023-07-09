import React from 'react';
import backgroundImage from '../images/university.jpg';
import UniversityCard from '../components/card/UniversityCard';

const UniversitiesPage = () => {
  return (
    <div className="bg-gray-100 py-0">
      <div className="relative">
        <img
          src={backgroundImage}
          alt="University"
          className="w-full h-auto"
          style={{ height: '50%', objectFit: 'contain' }}
        />

        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white-800 text-center">
          Universities
        </h1>
        <h3 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-500 text-center">
          You can find all universities and departments in this list.
        </h3>
        <UniversityCard />
      </div>
    </div>
  );
};

export default UniversitiesPage;
