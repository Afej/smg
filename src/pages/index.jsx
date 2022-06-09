import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import TotalCard from '../components/cards/TotalCard';
import PreviewCard from '../components/cards/PreviewCard';
import UsersTable from '../components/tables/UsersTable';
import PostsTable from '../components/tables/PostsTable';

import Tag from '../components/Tag';
import Spinner from '../components/Spinner';

import User from '../components/cards/User';
import Post from '../components/cards/Post';

import { getUsers, setUser } from '../store/users/usersSlice';
import { getPosts, setPost } from '../store/posts/postsSlice';
import { getComments } from '../store/comments/commentsSlice';
import { getTags } from '../store/tags/tagsSlice';

const Index = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { users, totalUsers, currentUser } = useSelector(
    (state) => state.users
  );
  const { posts, totalPosts, currentPost } = useSelector(
    (state) => state.posts
  );
  const { tags } = useSelector((state) => state.tags);
  const { totalComments } = useSelector((state) => state.comments);

  // set activeTab state
  const [activeTab, setActiveTab] = useState({
    posts: false,
    users: true,
  });

  // select tab and reset preview card
  const selectTab = (tab) => {
    if (tab === 'users') {
      dispatch(setUser({}));

      setActiveTab({
        users: true,
        posts: false,
      });
    } else if (tab === 'posts') {
      dispatch(setPost({}));

      setActiveTab({
        users: false,
        posts: true,
      });
    }
  };

  // check for empty object
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const emptyUser = isEmpty(currentUser);
  const emptyPost = isEmpty(currentPost);

  const getData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        dispatch(getUsers()).unwrap(),
        dispatch(getPosts()).unwrap(),
        dispatch(getComments()).unwrap(),
        dispatch(getTags()).unwrap(),
      ]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      // toast.error('Failed to get data');
      // console.log({ error });
    }
  };

  useEffect(() => {
    if (!emptyUser || !emptyPost) {
      dispatch(setUser({}));
      dispatch(setPost({}));
    }

    if (users.length && posts.length) {
      return;
    }

    getData();
    // eslint-disable-next-line
  }, [users.length, posts.length]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#E5E5E5] h-screen">
      <div className="lg:py-10 lg:px-0 py-0 lg:w-[85%] px-6 w-full mx-auto lg:bg-none bg-[#E5E5E5]">
        {/* top section */}
        <section className="my-5">
          <div className="relative w-full lg:py-12 py-8">
            <div className="grid w-full grid-cols-1 lg:gap-5 gap-y-5 mx-auto lg:grid-cols-3">
              {/* cards container */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <TotalCard title="users" value={totalUsers} />
                <TotalCard title="posts" value={totalPosts} />
                <TotalCard title="comments" value={totalComments} />
                <TotalCard title="tags" value={tags.length} />
              </div>

              {/* tags container */}
              <div className="p-5 col-span-2 bg-white shadow-xl rounded-md">
                <p className="text-md font-bold text-[#505050] capitalize">
                  Popular Tags
                </p>

                <div className="grid lg:grid-cols-2 gap-y-2 gap-x-5 mt-2.5">
                  <Tag title="Dog" value="345" />
                  <Tag title="Water" value="20" />
                  <Tag title="Nature" value="18" />
                  <Tag title="Private info requests" value="17" />
                  <Tag title="winter" value="12" />
                </div>
              </div>
            </div>

            {/* option button */}
            <button className="absolute top-1 right-0 cursor-pointer hidden lg:block">
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#9991E5" />
                <circle cx="15" cy="4" r="4" fill="#9991E5" />
                <circle cx="26" cy="4" r="4" fill="#9991E5" />
              </svg>
            </button>
          </div>
        </section>

        {/* bottom section */}
        <section className="my-5">
          <div className="relative w-full py-12">
            <div className="grid w-full grid-cols-1 gap-5 mx-auto lg:grid-cols-3">
              <div className="col-span-2">
                {/* Navigation tabs */}
                <>
                  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                    <ul className="flex flex-wrap -mb-px">
                      <li className="mr-2">
                        <button
                          onClick={() => selectTab('users')}
                          className={`inline-block p-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-500 text-[#505050] font-bold text-base ${
                            activeTab.users && 'border-purple-600 '
                          }`}
                        >
                          Recent Users
                        </button>
                      </li>
                      <li className="mr-2">
                        <button
                          onClick={() => selectTab('posts')}
                          className={`inline-block p-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-500 text-[#505050] font-bold text-base ${
                            activeTab.posts && 'border-purple-600 '
                          }`}
                        >
                          Recent Posts
                        </button>
                      </li>
                    </ul>
                  </div>
                </>

                {/* users/post tables */}
                <div className="pt-4">
                  {activeTab.users && <UsersTable users={users} />}
                  {activeTab.posts && <PostsTable posts={posts} />}
                </div>
              </div>

              {/* preview containers */}
              <>
                {activeTab.users ? (
                  !emptyUser ? (
                    <User user={currentUser} />
                  ) : (
                    <PreviewCard type="user" />
                  )
                ) : activeTab.posts && !emptyPost ? (
                  <Post post={currentPost} />
                ) : (
                  <PreviewCard type="post" />
                )}
              </>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
