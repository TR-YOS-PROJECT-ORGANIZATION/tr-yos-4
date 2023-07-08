import React from 'react';

const UniversityCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img src="university1.jpg" alt="Üniversite 1" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900">Üniversite 1</h3>
        <p className="text-gray-700">Üniversite adresi 1</p>
        <p className="text-gray-700">Fakülte 1</p>
        <p className="text-gray-700">Departmanlar 1</p>
        <p className="text-gray-700">Telefon: 1234567890</p>
        <div className="mt-4 flex items-center">
          <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <p className="ml-2 text-sm text-gray-500">Konum</p>
        </div>
      </div>
    </div>
  );
}

export default UniversityCard;
