// eslint-disable-next-line no-unused-vars
import React from "react";

function PriceForm() {
  return (
    <>
      <div className="m-2">
        <div className="">
          <div className="relative rounded-m">
            <div className="text-left md:text-center">Price</div>
            <div className="flex flex-col justify-center items-center md:flex-col lg:flex-row">
              <input
                name="minPrice"
                type="text"
                placeholder="Min Price..."
                className="w-20 mr-auto md:w-2/4 lg:w-1/4 border-2 m-2 py-1.5 rounded-md"
              />
              <input
                name="maxPrice"
                type="text"
                placeholder="Max Price..."
                className="w-20 mr-auto md:w-2/4 lg:w-1/4 border-2 m-2 py-1.5 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceForm;
