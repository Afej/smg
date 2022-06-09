import React from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../../store/users/usersSlice';

const UserTable = ({ users }) => {
  const dispatch = useDispatch();
  const fetchUser = (userId) => {
    dispatch(getUser(userId));
  };

  const tableData = users.map((user, index) => {
    return (
      <tr
        className="bg-white border-b hover:bg-gray-50 rounded"
        key={index}
        onClick={() => fetchUser(user.id)}
      >
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-1"
              type="checkbox"
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 "
            />
            <label htmlFor="checkbox-table-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-0 py-4 text-[#A8A8A8] font-normal text-sm whitespace-nowrap"
        >
          {user.id.slice(0, 6)}
        </th>
        <td className="px-4 py-4 text-[#505050] capitalize">{user.title}</td>
        <td className="px-4 py-4">
          <div className="flex items-center space-x-4">
            <img
              className="w-8 h-8 rounded-full"
              src={user.picture}
              alt="user"
            />

            <div className="flex-1">
              <p className="text-sm font-medium text-[#9991E5] truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-[#A8A8A8]">@Adebisi</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-4 truncate max-w-lg">{user.id}</td>
        <td className="px-4 py-4">Oct 2003</td>
        <td className="px-4 py-4 text-right">
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <svg
              width="4"
              height="22"
              viewBox="0 0 4 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#352E4D" />
              <circle cx="2" cy="11" r="2" fill="#352E4D" />
              <circle cx="2" cy="20" r="2" fill="#352E4D" />
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="relative overflow-x-auto overflow-y-scroll max-h-[60vh]">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-[#E5E5E5] sticky top-0">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-0 py-3">
                <span className="flex items-center gap-1">
                  ID
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z"
                      fill="#787878"
                    />
                    <path
                      d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z"
                      fill="#787878"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="flex items-center gap-1">
                  Title
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z"
                      fill="#787878"
                    />
                    <path
                      d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z"
                      fill="#787878"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="flex items-center gap-1">
                  Name
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z"
                      fill="#787878"
                    />
                    <path
                      d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z"
                      fill="#787878"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="flex items-center gap-1">
                  ID
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z"
                      fill="#787878"
                    />
                    <path
                      d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z"
                      fill="#787878"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="flex items-center gap-1">
                  Phone
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0L4.66506 1.5H0.334936L2.5 0Z"
                      fill="#787878"
                    />
                    <path
                      d="M2.5 5L4.66506 3.5H0.334936L2.5 5Z"
                      fill="#787878"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">
                  <svg
                    width="4"
                    height="22"
                    viewBox="0 0 4 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#352E4D" />
                    <circle cx="2" cy="11" r="2" fill="#352E4D" />
                    <circle cx="2" cy="20" r="2" fill="#352E4D" />
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length ? (
              tableData
            ) : (
              <div className="text-red-500 font-bold text-xl py-10">
                No data available
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
