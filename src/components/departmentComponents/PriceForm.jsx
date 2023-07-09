// eslint-disable-next-line no-unused-vars
import React from "react";

function PriceForm() {
  return (
    <>
      <div className="m-2 ">
        <div className="">
          <div className="relative rounded-md">
            <div className="text-center">Price</div>
            <input
              name="price"
              type="text"
              placeholder="Min Price..."
              className="w-1/4 border-2 m-2 py-1.5 rounded-md"
            />
            <input
              name="price"
              type="text"
              placeholder="Max Price..."
              className="w-1/4 border-2 m-2 py-1.5 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceForm;
