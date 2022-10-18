import React from "react";
import stylespagination from "./styles__paguinar/pagination.css";

const Pagination = ({ page, pagesLength, setPage }) => {
const pagesPerBlock = 8;
const currentblock = Math.ceil(page / pagesPerBlock);
const blockLength = Math.ceil(pagesLength / pagesPerBlock);
const arrPages = [];
const initialPage = (currentblock - 1) * pagesPerBlock + 1;
const limitPage = blockLength === currentblock ? pagesLength : pagesPerBlock * pagesPerBlock;
 

//initialPage + pagesPerBlock - 1
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }
  const handlePrev = () => {
    setPage(page + 1);
  };
  const handleNetx = () => {
    setPage(page - 1);
  };
  const handlePage = () => {};
  return (
    <div className="pagination">
      {page > 1 && (
        <div onClick={handlePrev} className="flecha__paguination">
          {" "}
          <i class="fa-solid fa-circle-right"></i>
        </div>
      )}
      <ul className="pagination__container">
        {arrPages.map((e) => (
          <li key={e} onClick={() => handlePage(e)}>
            {e}
          </li>
        ))}
      </ul>
      {page < pagesLength && (
        <div onClick={handleNetx} className=" flecha__next">
          <i class="fa-solid fa-circle-left"></i>
        </div>
      )}
    </div>
  );
};

export default Pagination;
