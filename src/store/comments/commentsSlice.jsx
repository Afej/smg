import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const base_url = 'https://dummyapi.io/data/v1/';
const api_id = '629f824db020aa525fd72be0';

const initialState = {
  comments: [],
  totalComments: 0,
};

export const getComments = createAsyncThunk(
  'comments/getComments',
  async () => {
    const response = await fetch(`${base_url}comment`, {
      headers: {
        'app-id': api_id,
      },
    });

    const result = await response.json();
    return result;
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload.data;
      state.totalComments = action.payload.total;
    });
  },
});

export default commentsSlice.reducer;
