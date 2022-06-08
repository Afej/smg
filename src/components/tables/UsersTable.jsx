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
        class="bg-white border-b hover:bg-gray-50 rounded"
        key={index}
        onClick={() => fetchUser(user.id)}
      >
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-1"
              type="checkbox"
              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 "
            />
            <label for="checkbox-table-1" class="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          class="px-0 py-4 text-[#A8A8A8] font-normal text-sm whitespace-nowrap"
        >
          {user.id.slice(0, 6)}
        </th>
        <td class="px-4 py-4 text-[#505050] capitalize">{user.title}</td>
        <td class="px-4 py-4">
          <div class="flex items-center space-x-4">
            <img class="w-8 h-8 rounded-full" src={user.picture} alt="user" />

            <div class="flex-1">
              <p class="text-sm font-medium text-[#9991E5] truncate">
                {user.firstName} {user.lastName}
              </p>
              <p class="text-sm text-[#A8A8A8]">@Adebisi</p>
            </div>
          </div>
        </td>
        <td class="px-4 py-4 truncate max-w-lg">{user.id}</td>
        <td class="px-4 py-4">Oct 2003</td>
        <td class="px-4 py-4 text-right">
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
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
      <div class="relative overflow-x-auto overflow-y-scroll max-h-[50vh]">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-[#E5E5E5] sticky top-0">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label for="checkbox-all" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-0 py-3">
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
              <th scope="col" class="px-4 py-3">
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
              <th scope="col" class="px-4 py-3">
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
              <th scope="col" class="px-4 py-3">
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
              <th scope="col" class="px-4 py-3">
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
              <th scope="col" class="px-4 py-3">
                <span class="sr-only">
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
          <tbody>{tableData.length ? tableData : ''}</tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
