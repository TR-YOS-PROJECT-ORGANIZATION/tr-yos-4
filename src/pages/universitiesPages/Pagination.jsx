import { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Pagination = ({
  pages,
  setCurrentPage,
  currentUniversities,
  univercities,
  currentDepartments,
  allDepartments,
}) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const { t } = useTranslation();
  const lang = i18next.language;
  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="flex flex-col justify-center mb-4">
      <div className="mb-4">
        {lang === "en" ? <p> Showing <b>{currentUniversities?.length || currentDepartments?.length} </b> of <b> {univercities?.length || allDepartments?.length} </b> entries </p> : <p> <b>{univercities?.length || allDepartments?.length} </b> veriden <b>{currentUniversities?.length || currentDepartments?.length}</b> kadarı gösteriliyor</p>}         
      </div>
      <ul className="flex justify-center ">
        <li
          className={`${currentButton === 1 ? "page-item disabled" : "page-item"
            }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            {t("Previous")}
          </a>
        </li>
        {numOfPages.map((page, index) => {
          return (
            <li
              key={index}
              className={`${currentButton === page ? "page-item active" : "page-item"
                }`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${currentButton === numOfPages.length
            ? "page-item disabled"
            : "page-item"
            }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numOfPages.length ? prev : prev + 1
              )
            }
          >
            {t("Next")}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
