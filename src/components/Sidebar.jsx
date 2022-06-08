import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="z-30 flex-shrink-0 w-64 bg-[#9991E5] lg:block flex overflow-hidden text-white rounded-lg">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow h-screen pt-5 overflow-y-auto  space-y-10">
            <div className="flex items-center gap-2 px-4">
              <div>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
                </svg>
              </div>
              <div class="Name">
                <p className="text-lg font-bold p-0">User Groove</p>
                <p className="text-xs">by Joshua Afekuro</p>
              </div>
            </div>

            <div className="flex flex-col flex-grow px-4 mt-5">
              <nav className="flex-1 space-y-1">
                <ul>
                  <li>
                    <Link
                      className="inline-flex items-center w-full px-4 py-2 mt-1 text-base"
                      to="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-house-door-fill"
                        viewBox="0 0 16 16"
                      >
                        {' '}
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />{' '}
                      </svg>
                      <span className="ml-4"> Home</span>
                    </Link>
                  </li>
                </ul>

                <div>
                  <h3 className="uppercase text-xs text-[#E8E8E8] font-[300] py-3">
                    Directory
                  </h3>
                  <ul className="w-full border-t py-2">
                    <li>
                      <NavLink
                        className={(props) => {
                          return `${
                            props.isActive ? 'bg-[#E9E7FF7D]' : ''
                          } inline-flex w-full px-4 py-2 mt-2 text-base hover:bg-[#E9E7FF7D] 
                          `;
                        }}
                        to="/"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(props) => {
                          return `${
                            props.isActive ? 'bg-[#E9E7FF7D]' : ''
                          } inline-flex w-full px-4 py-2 mt-2 text-base hover:bg-[#E9E7FF7D] 
                          `;
                        }}
                        to="/search"
                      >
                        Search Posts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(props) => {
                          return `${
                            props.isActive ? 'bg-[#E9E7FF7D]' : ''
                          } inline-flex w-full px-4 py-2 mt-2 text-base hover:bg-[#E9E7FF7D] 
                          `;
                        }}
                        to="/adduser"
                      >
                        Add User
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="flex p-4 px-4">
              <ul className="w-full py-2 border-t">
                <li>
                  <NavLink
                    className="inline-flex items-center w-full px-4 py-2 mt-1 text-base "
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-gear-fill"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />{' '}
                    </svg>
                    <span className="ml-4"> Settings</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-lg text-neutral-600">
                Here is where you put your stuff
              </h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* <!-- Put your content here --> */}
              <div className="py-4">
                <div className="rounded-lg bg-neutral-50 h-96"></div>
              </div>
              {/* <!-- Do not cross the closing tag underneath this coment--> */}
            </div>
          </div>
        </main>
      </div>
    </aside>
  );
};

export default Sidebar;
