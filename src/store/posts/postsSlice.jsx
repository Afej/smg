import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const base_url = 'https://dummyapi.io/data/v1/';
const api_id = '629f824db020aa525fd72be0';

const initialState = {
  posts: [],
  currentPost: {},
  totalPosts: 0,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch(`${base_url}post`, {
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

export const getPost = createAsyncThunk('posts/getPost', async (id) => {
  const response = await fetch(`${base_url}post/${id}`, {
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost(state, action) {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload.data;
      state.totalPosts = action.payload.total;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.currentPost = action.payload;
    });
  },
});

export default postsSlice.reducer;
export const { setPost } = postsSlice.actions;

