// eslint-disable-next-line no-unused-vars
import React from "react";
import "./priceForm.css";

function PriceForm() {
  return (
    <>
      <div className="sm:mr-auto price_form_container">
        <div className="flex flex-col w-full relative rounded-m">
          <div className="md:text-left p-2 price_text">Price</div>
          <div className="sm:w-auto sm:flex sm:justify-center md:flex-row md:justify-center md:items-center md:w-full">
            <input
              name="minPrice"
              type="text"
              placeholder="Min Price..."
              className="xs:w-72 sm:w-full md:flex border-2 md:mr-2 py-1.5 rounded-md md:mt-0"
            />
            <input
              name="maxPrice"
              type="text"
              placeholder="Max Price..."
              className="xs:w-72 sm:w-full md:flex border-2 py-1.5 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceForm;
