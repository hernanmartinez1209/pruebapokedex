import React from "react";
import '../styles/stylesPaguination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

const pagesPerBlock = 8;
const currentBlock = Math.ceil(page / pagesPerBlock);
const blockLength = Math.ceil(pagesLength / pagesPerBlock);
 
const arrPages = [];
const initialPage = (currentBlock - 1) * pagesPerBlock + 1;

const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
 

//initialPage + pagesPerBlock - 1
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNetx = () => {
    setPage(page + 1);
  };
  const handlePage = currentPage => {
   setPage(currentPage)
  };
  return (
    <div className="pagination">
      {page > 1 && 
        <div onClick={handlePrev} className="paguination__Prev pagination__active">
      <i className="fa-solid fa-circle-left"></i>
        </div>
      }
      {
        page > 1 &&
      <div onClick={handlePrev} >...</div>
    
      }
      <ul className="pagination__container">
        {arrPages.map((e) => (
          <li
           className={`paguination__page ${page === e && 'pagination__active'}`} 
          key={e} 
           onClick={() => handlePage(e)}>
            {e}
          </li>
        ))}
      </ul>
     {
     page < pagesLength &&
     <div onClick={handleNetx} >...</div>
     
     }
      {page < pagesLength && 
        <div onClick={handleNetx} className="paguination__next pagination__active">
         <i className="fa-solid fa-circle-right"></i>
          
        </div>
      }
    </div>
  );
};

export default Pagination;
