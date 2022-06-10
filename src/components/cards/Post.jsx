import React from 'react';

const Post = ({ post }) => {
  const tags = post.tags.map((tag, index) => {
    return (
      <button
        type="button"
        className="p-1.5 capitalize text-sm font-medium text-[#607485] focus:outline-none bg-[#FAFCFE] rounded-full border border-[#4799EB]hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        key={index}
      >
        {tag}
      </button>
    );
  });

  return (
    <div>
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md">
        <div className="w-full h-full pb-3">
          <img
            className="w-full h-[120px] rounded-md object-cover bg-contain bg-center"
            src={post.image}
            alt="user"
          />
        </div>

        <div className="flow-root">
          <ul className="">
            <li className="py-2 sm:py-1.5">
              <div>
                <p className="capitalize text-sm font-semibold text-[#051A2E] truncate">
                  {post.text}
                </p>
                <p className="text-sm text-[#DD3C3C] font-normal flex items-center gap-2 my-1">
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.53115 1.51648C3.83301 -1.10654 0.396057 0.322394 0.396057 3.17974C0.396057 5.3254 5.10794 8.68178 5.53115 9.1182C5.95727 8.68178 10.4348 5.3254 10.4348 3.17974C10.4348 0.344056 7.23246 -1.10654 5.53115 1.51648Z"
                      fill="#DD3C3C"
                    />
                  </svg>
                  {post.likes} Likes
                </p>
              </div>
            </li>

            <li className="py-2 sm:py-1.5">
              <div className="flex flex-col gap-2">
                <p className="uppercase text-xs font-semibold text-[#AFC2D4] truncate">
                  tags
                </p>
                <div className="flex items-center mb-2 gap-2 justify-items-start">
                  {tags}
                </div>
              </div>
            </li>

            <li className="py-2 sm:py-1.5 border-gray-200 border-y">
              <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                OWNER
              </p>
            </li>
            <li className="py-2 sm:py-1.5 mt-2 flex items-start gap-2">
              <img
                className="w-10 h-10 rounded-xl"
                src={post.owner.picture}
                alt="owner"
              />

              <p className="text-sm text-[#051A2E] font-normal">
                {post.owner.firstName} {post.owner.lastName}
              </p>
            </li>
            <li className="py-2 sm:py-1.5">
              <div>
                <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                  Full name
                </p>
                <p className="text-sm text-[#051A2E] font-normal capitalize">
                  {post.owner.title} {post.owner.firstName}{' '}
                  {post.owner.lastName}
                </p>
              </div>
            </li>
            {post.owner.email && (
              <>
                <li className="py-2 sm:py-1.5">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      Email Address
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {post.owner.email}
                    </p>
                  </div>
                </li>
              </>
            )}
            {post.owner.phone && (
              <>
                <li className="py-2 sm:py-1.5">
                  <div>
                    <p className="uppercase text-sm font-semibold text-[#AFC2D4] truncate">
                      Phone Number
                    </p>
                    <p className="text-sm text-[#051A2E] font-normal">
                      {post.owner.phone}
                    </p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
