import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px p-5 bg-white rounded-xl">
        <li className="px-2">
          <button
            onClick={() => console.log('object')}
            className="py-2 px-3 ml-0 leading-tight text-[#9991E5] bg-white hover:text-[#A8A8A8]"
          >
            Previous
          </button>
        </li>
        <li className="px-2">
          <button
            onClick={() => console.log('object')}
            className="py-2 px-4 leading-tight text-[#9991E5] bg-white border border-gray-300 hover:text-[#A8A8A8] hover:bg-[#E9E7FF] rounded-md"
          >
            1
          </button>
        </li>
        <li className="px-2">
          <button
            onClick={() => console.log('object')}
            className="py-2 px-4 leading-tight text-[#9991E5] bg-white border border-gray-300 hover:text-[#A8A8A8] hover:bg-[#E9E7FF] rounded-md"
          >
            2
          </button>
        </li>
        <li className="px-2">
          <button
            onClick={() => console.log('object')}
            className="py-2 px-3 leading-tight text-[#9991E5] bg-white  hover:text-[#A8A8A8] "
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
