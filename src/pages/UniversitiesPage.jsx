import React from 'react';
import backgroundImage from '../images/university.jpg';

const UniversitiesPage = () => {
  return (
    <div className="bg-gray-100 py-0">
      <div className="relative">
      <img src={backgroundImage} alt="University" className="w-full h-auto" style={{ height: '50%', objectFit: 'contain' }} />



        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white-800 text-center">
          Universities
        </h1>
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-500 text-center">You can find all universities and departments in this list.</h3>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rovs-1 sm:grid-rovs-2 md:grid-rovs-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">AFYON KOCATEPE UNİVERSTY</h2>
              
        <p className="text-gray-700">Afyon kocatepe Üniversitesi Rektörlüğü ANS Kampüsü Gazlıgöl Yolu Üzeri AFYONKARAHİSAR </p>
        <svg className="h-6 w-6 text-gray-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <p className="ml-2 text-sm text-gray-500 inline-block">Afyonkarahisar</p>
    
        <p className="text-gray-700">Fakülte 1</p><p className="text-gray-700">Departmanlar 1</p>
        <p className="text-gray-700">Telefon: 1234567890</p>
        
        
              <a
                href="https://aku.edu.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">AFYON KOCATEPE UNİVERSTY</h2>
              
        <p className="text-gray-700">Afyon kocatepe Üniversitesi Rektörlüğü ANS Kampüsü Gazlıgöl Yolu Üzeri AFYONKARAHİSAR </p>
        <svg className="h-6 w-6 text-gray-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <p className="ml-2 text-sm text-gray-500 inline-block">Afyonkarahisar</p>
      
        <p className="text-gray-700">Fakülte 1</p>
        <p className="text-gray-700">Departmanlar 1</p>
        <p className="text-gray-700">Telefon: 1234567890</p>

            
              <a
                href="https://aku.edu.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">AFYON KOCATEPE UNİVERSTY</h2>
              
        <p className="text-gray-700">Afyon kocatepe Üniversitesi Rektörlüğü ANS Kampüsü Gazlıgöl Yolu Üzeri AFYONKARAHİSAR </p>
        <svg className="h-6 w-6 text-gray-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <p className="ml-2 text-sm text-gray-500 inline-block">Afyonkarahisar</p>
      
        <p className="text-gray-700">Fakülte 1</p>
        <p className="text-gray-700">Departmanlar 1</p>
        <p className="text-gray-700">Telefon: 1234567890</p>
     

              <a
                href="https://aku.edu.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesPage;