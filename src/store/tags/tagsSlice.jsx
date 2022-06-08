import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const base_url = 'https://dummyapi.io/data/v1/';
const api_id = '629f824db020aa525fd72be0';

const initialState = {
  tags: [],
};

export const getTags = createAsyncThunk('tags/getTags', async () => {
  const response = await fetch(`${base_url}tag`, {
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.tags = action.payload.data;
    });
  },
});

export default tagsSlice.reducer;
