import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [path, setPath] = useState('');

  const setLocationPath = () => {
    if (pathname === '/') {
      setPath('');
    } else {
      setPath(pathname.slice(1));
    }
  };

  useEffect(() => {
    setLocationPath();
    // eslint-disable-next-line
  }, [path, location]);

  return (
    <div className="navbar bg-white sticky top-0 z-30 border-b-2 border-[#C4C4C4] shadow-lg">
      <div className="lg:hidden dropdown">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#9991E5] text-white rounded-box w-52"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/adduser">Add User</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 pl-5">
        <p className="text-md font-bold ml-5 capitalize">
          Dashboard {path !== '' ? `> ${path}` : ''}
        </p>
      </div>

      <div className="flex-none gap-2 mr-2">
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
        <button className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
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
