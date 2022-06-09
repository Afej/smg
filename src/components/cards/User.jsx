import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteUser } from '../../store/users/usersSlice';

const User = ({ user }) => {
  const dispatch = useDispatch();

  const removeUser = async (id) => {
    await dispatch(deleteUser(id));
    toast('User deleted successfully');
  };

  return (
    <div>
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-5 ">
        <div className="flex justify-between gap-5 border-b border-gray-200 pb-2">
          <div className="w-full h-full">
            <img
              className="w-[100%] h-[100%] rounded-sm"
              src={user.picture}
              alt="user"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                Full name
              </p>
              <p className="text-sm text-[#051A2E] font-normal capitalize">
                {user.title} {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                email address
              </p>
              <p className="text-sm text-[#051A2E] font-normal">{user.email}</p>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                Phone Number
              </p>
              <p className="text-sm text-[#051A2E] font-normal">{user.phone}</p>
            </div>
          </div>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 ">
            <li className="py-2 sm:py-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                    Gender
                  </p>
                  <p className="text-sm text-[#051A2E] font-normal">
                    {user.gender}
                  </p>
                </div>
                <div>
                  <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                    Date of Birth
                  </p>
                  <p className="text-sm text-[#051A2E] font-normal">
                    {/* 30 - Apr - 1996 */}
                    {user.dateOfBirth}
                  </p>
                </div>
              </div>
            </li>
            <div>
              <li className="py-2 sm:py-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      Street
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {user.location.street}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      city
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {user.location.city}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2 sm:py-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      state
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {user.location.state}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      country
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {user.location.country}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2 sm:py-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      year enrolled
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">-9:00</p>
                  </div>
                </div>
              </li>
            </div>

            <div>
              <li className="py-2 sm:py-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      registered
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {/* 21 - Jun - 2021 */}
                      {user.registerDate}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      last updated
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {/* 21 - Jun - 2021 */}
                      {user.updatedDate}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2 sm:py-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      posts
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">21</p>
                  </div>
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      comments
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">68</p>
                  </div>
                </div>
              </li>
            </div>
          </ul>

          <div className="mt-5">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#F63838] hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 w-full"
              onClick={() => removeUser(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
