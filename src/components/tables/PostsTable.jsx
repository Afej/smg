import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPost } from '../../store/posts/postsSlice';
import { toast } from 'react-toastify';

const PostsTable = ({ posts }) => {
  const location = useLocation();
  const { pathname } = location;
  const [showData, setShowData] = useState(false);

  const dispatch = useDispatch();
  const fetchPost = async (postId) => {
    try {
      const res = await dispatch(getPost(postId)).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (pathname === '/search') {
      setShowData(true);
    }
  }, [pathname]);

  const tableData = posts.map((post, index) => {
    return (
      <tr
        className="bg-white border-b hover:bg-gray-50 rounded"
        key={index}
        onClick={() => {
          !showData && fetchPost(post.id);
        }}
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
          className="px-0 py-4 text-[#A8A8A8] font-normal text-sm whitespace-nowrap truncate"
        >
          {post.id.slice(0, 6)}
        </th>
        <td className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <img
              className="w-8 h-8 rounded-full"
              src={post.owner.picture}
              alt="user"
            />

            <div className="flex-1">
              <p className="text-sm font-medium text-[#9991E5] truncate">
                {post.owner.firstName} {post.owner.lastName}
              </p>
              <p className="text-sm text-[#A8A8A8]">@Adebisi</p>
            </div>
          </div>
        </td>
        {showData && (
          <td className="px-6 py-4 text-[#505050] truncate">{post.text}</td>
        )}
        {showData && (
          <td className="px-6 py-4 text-[#505050]">
            <div className="flex gap-1 items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V9.75C1.5 9.35218 1.65804 8.97064 1.93934 8.68934C2.22064 8.40804 2.60218 8.25 3 8.25H5.25M10.5 6.75V3.75C10.5 3.15326 10.2629 2.58097 9.84099 2.15901C9.41903 1.73705 8.84674 1.5 8.25 1.5L5.25 8.25V16.5H13.71C14.0717 16.5041 14.4228 16.3773 14.6984 16.143C14.9741 15.9087 15.1558 15.5827 15.21 15.225L16.245 8.475C16.2776 8.26002 16.2631 8.04051 16.2025 7.83169C16.1419 7.62287 16.0366 7.42972 15.8939 7.26564C15.7512 7.10155 15.5746 6.97045 15.3762 6.88141C15.1778 6.79238 14.9624 6.74754 14.745 6.75H10.5Z"
                  stroke="#505050"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {post.likes}
            </div>
          </td>
        )}

        <td className="px-6 py-4">Oct 20, 2003</td>
        <td className="px-6 py-4 text-right">
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
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center gap-1">
                  Owner
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
              {showData && (
                <th scope="col" className="px-6 py-3">
                  <span className="flex items-center gap-1">
                    Text
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
              )}
              {showData && (
                <th scope="col" className="px-6 py-3">
                  <span className="flex items-center gap-1">
                    Likes
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
              )}

              <th scope="col" className="px-6 py-3">
                <span className="flex items-center gap-1 text-xs">
                  PUBLISHED DATE
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
              <th scope="col" className="px-6 py-3">
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

export default PostsTable;
