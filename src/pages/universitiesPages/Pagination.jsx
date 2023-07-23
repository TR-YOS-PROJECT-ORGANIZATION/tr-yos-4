import { useState } from "react";

const Pagination = () => {
  const pages = 5;
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b> out of <b>40</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>

        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
           Next
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;

// <li class="page-item "><a href="/homePage" class="page-link">1</a></li>
// <li class="page-item "><a href="#" class="page-link">2</a></li>
// <li class="page-item active"><a href="#" class="page-link">3</a></li>
// <li class="page-item "><a href="#" class="page-link">4</a></li>
// <li class="page-item "><a href="#" class="page-link">5</a></li>
// <li class="page-item "><a href="#" class="page-link">Next</a></li>
