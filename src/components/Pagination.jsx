import React, { useState } from 'react';

const Pagination = ({ data, totalData, pageLimit, dataLimit, getNewData }) => {
  const [pages] = useState(
    Math.round(totalData || 100 / data.length || dataLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    // console.log(currentPage);
    if (data.length > 0) {
      getNewData(currentPage);
    }
  };

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    fetchData();
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    fetchData();
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    fetchData();
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <nav>
      <ul className="inline-flex -space-x-px p-5 bg-white rounded-xl">
        <li className="px-2">
          <button
            onClick={goToPreviousPage}
            className="py-2 px-3 ml-0 leading-tight text-[#9991E5] bg-white hover:text-[#A8A8A8]"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <li className="px-2" key={index}>
            <button
              onClick={changePage}
              className={`py-2 px-4 leading-tight text-[#9991E5] bg-white border border-gray-300 hover:text-[#A8A8A8] hover:bg-[#E9E7FF] rounded-md ${
                currentPage === item &&
                'bg-[#E9E7FF] text-[#A8A8A8] font-semibold'
              }`}
            >
              {item}
            </button>
          </li>
        ))}

        <li className="px-2">
          <button
            onClick={goToNextPage}
            className="py-2 px-3 leading-tight text-[#9991E5] bg-white  hover:text-[#A8A8A8]"
            disabled={currentPage === pages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
