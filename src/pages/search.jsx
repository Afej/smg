import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsTable from '../components/tables/PostsTable';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

import { getPosts } from '../store/posts/postsSlice';

const Search = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { posts, totalPosts } = useSelector((state) => state.posts);

  const getData = async () => {
    setLoading(true);

    await dispatch(getPosts());

    setLoading(false);
  };

  useEffect(() => {
    if (posts.length) {
      return;
    }

    getData();
    // eslint-disable-next-line
  }, [posts.length]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="py-5 h-screen">
      <div className="pb-10 w-[85%] mx-auto">
        {/* search  form */}
        <form class="flex items-center w-[40%]">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search any user"
              required=""
            />
          </div>
        </form>
      </div>

      <section className="bg-[#E5E5E5] pt-10 h-full">
        <div className="w-[85%] mx-auto">
          <div className="border-y border-[#D0D0D0] flex justify-between items-center py-5 mb-10">
            <svg
              width="168"
              height="30"
              viewBox="0 0 168 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.25"
                y="2.25"
                width="25.5"
                height="25.5"
                rx="1.75"
                stroke="#E0E0E0"
                stroke-width="0.5"
              />
              <circle cx="13" cy="15" r="6" fill="#E0E0E0" />
              <rect
                x="35.25"
                y="2.25"
                width="25.5"
                height="25.5"
                rx="1.75"
                stroke="#E0E0E0"
                stroke-width="0.5"
              />
              <circle cx="48" cy="15" r="6" fill="#E8E8E8" />
              <g filter="url(#filter0_d_1_1736)">
                <rect x="70" y="2" width="26" height="26" rx="2" fill="white" />
              </g>
              <circle cx="83" cy="15" r="6" fill="#9991E5" />
              <g filter="url(#filter1_d_1_1736)">
                <rect
                  x="105"
                  y="2"
                  width="26"
                  height="26"
                  rx="2"
                  fill="white"
                />
              </g>
              <circle cx="118" cy="15" r="6" fill="#9991E5" />
              <g filter="url(#filter2_d_1_1736)">
                <rect
                  x="140"
                  y="2"
                  width="26"
                  height="26"
                  rx="2"
                  fill="white"
                />
              </g>
              <circle cx="153" cy="15" r="6" fill="#9991E5" />
              <defs>
                <filter
                  id="filter0_d_1_1736"
                  x="68"
                  y="0"
                  width="30"
                  height="30"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1736"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_1736"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_1_1736"
                  x="103"
                  y="0"
                  width="30"
                  height="30"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1736"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_1736"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_1_1736"
                  x="138"
                  y="0"
                  width="30"
                  height="30"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1736"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_1736"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="flex justify-between w-[30%]">
              <p className="text-gray-900 font-bold text-base">
                1 - {posts.length} of {totalPosts} records
              </p>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10L16 4H4C2.9 4 2 4.9 2 6V18.01C2 19.11 2.9 20 4 20L20 19.99C21.1 19.99 22 19.1 22 18V10ZM15 5.5L20.5 11H15V5.5Z"
                  fill="#A8A8A8"
                />
              </svg>
            </div>
          </div>

          <>
            <PostsTable posts={posts} />
          </>

          <div class="my-10">
            <Pagination />
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default Search;