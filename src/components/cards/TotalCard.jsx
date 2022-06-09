import React from 'react';

const CardInfo = ({ title, value }) => {
  return (
    <div className="group relative w-full">
      <div
        className="w-full mx-auto bg-white shadow-xl rounded-md 
          group-hover:bg-[#9991E5] h-full"
      >
        <div className="p-5">
          <p className="mb-2 text-sm font-normal text-[#505050] capitalize group-hover:text-white">
            {title}
          </p>
          <p className="text-2xl font-bold text-[#505050] group-hover:text-white ">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
