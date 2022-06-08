import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import tagsReducer from './tags/tagsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    tags: tagsReducer,
  },
});

export default store;
