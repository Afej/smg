import React from 'react';

const Tag = ({ title, value }) => {
  return (
    <div className="group">
      <div class="p-3 flex w-full justify-between items-center bg-[#F0F0F0] group-hover:bg-white border group-hover:border-[#9F96EF] rounded-md">
        <p className="text-sm font-normal text-[#505050] capitalize group-hover:text-[#9F96EF]">
          {title}
        </p>
        <p className="text-md text-[#505050] group-hover:text-[#9F96EF] font-medium">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Tag;
