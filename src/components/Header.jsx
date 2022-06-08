import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState('');

  const setLocationPath = () => {
    if (pathname === '/') {
      setPath('');
      // console.log({ path });
    } else {
      setPath(pathname.slice(1));
      // console.log({ path });
    }
  };

  useEffect(() => {
    setLocationPath();
  }, [path, location]);

  return (
    <div class="navbar bg-white sticky top-0 z-30 border-b-2 border-[#C4C4C4]shadow-lg">
      <div class="flex-1 pl-5">
        <p class="text-md font-bold ml-5 capitalize">
          Dashboard {path !== '' ? `> ${path}` : ''}
        </p>
      </div>

      <div class="flex-none gap-2 mr-2">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9999 21.9999C13.0999 21.9999 13.9999 21.0999 13.9999 19.9999H9.99994C9.99994 21.0999 10.8999 21.9999 11.9999 21.9999ZM17.9999 15.9999V10.9999C17.9999 7.92991 16.3699 5.35991 13.4999 4.67991V3.99991C13.4999 3.16991 12.8299 2.49991 11.9999 2.49991C11.1699 2.49991 10.4999 3.16991 10.4999 3.99991V4.67991C7.63994 5.35991 5.99994 7.91991 5.99994 10.9999V15.9999L3.99994 17.9999V18.9999H19.9999V17.9999L17.9999 15.9999ZM15.9999 16.9999H7.99994V10.9999C7.99994 8.51991 9.50994 6.49991 11.9999 6.49991C14.4899 6.49991 15.9999 8.51991 15.9999 10.9999V16.9999Z"
              fill="#5F5888"
            />
          </svg>
        </div>
        <button class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=33791"
              alt="user"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
