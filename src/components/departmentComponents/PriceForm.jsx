// eslint-disable-next-line no-unused-vars
import React from "react";
import { t } from "i18next";

function PriceForm() {
  return (
    <>
      <div className="">
        <div className="flex flex-col  relative rounded-m md:justify-between">
          {/* <div className="sm:text-left md:text-left p-0 price_text">{t("Price")}</div> */}
          <div className="sm:flex sm:justify-between md:flex-row  md:items-center md:w-full my-5">
            <input
              name="minPrice"
              type="text"
              placeholder="Min Price..."
              className="max-sm:w-full max-sm:mb-6 max-sm:h-14 md:flex border-2 md:mr-2 py-3.5 rounded-md md:mt-0 md:w-1/2"
            />
            <input
              name="maxPrice"
              type="text"
              placeholder="Max Price..."
              className="max-sm:w-full max-sm:h-14 mx-0 md:flex border-2 py-3.5 rounded-md md:w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceForm;
