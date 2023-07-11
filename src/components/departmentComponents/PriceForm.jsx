// eslint-disable-next-line no-unused-vars
import React from "react";
import "./priceForm.css";

function PriceForm() {
  return (
    <>
      <div className="md:-mt-32 lg:-mt-36 sm:mr-auto price_form_container">
        <div className="">
          <div className="flex flex-col w-full relative rounded-m">
            <div className="text-left md:text-center p-2 price_text">Price</div>
            <div className="md:flex-col md:justify-center md:items-center lg:flex-row">
              <input
                name="minPrice"
                type="text"
                placeholder="Min Price..."
                className=" md:w-2/4 lg:w-1/4 border-2 m-2 py-1.5 rounded-md md:mt-0"
              />
              <input
                name="maxPrice"
                type="text"
                placeholder="Max Price..."
                className="md:w-2/4 lg:w-1/4 border-2 m-2 py-1.5 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceForm;
