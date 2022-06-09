import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const base_url = 'https://dummyapi.io/data/v1/';
const api_id = '629f824db020aa525fd72be0';

const initialState = {
  users: [],
  currentUser: {},
  totalUsers: 0,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await fetch(`${base_url}user`, {
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  const response = await fetch(`${base_url}user/${id}`, {
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

export const createUser = createAsyncThunk('users/createUser', async (data) => {
  const response = await fetch(`${base_url}user/create`, {
    method: 'POST',
    headers: {
      'app-id': api_id,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
  return result;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  const response = await fetch(`${base_url}user/${id}`, {
    method: 'DELETE',
    headers: {
      'app-id': api_id,
    },
  });

  const result = await response.json();
  return result;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.totalUsers = action.payload.total;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
      state.totalUsers = state.totalUsers++;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      state.totalUsers = --state.totalUsers;
    });
  },
});

export default usersSlice.reducer;
export const { setUser } = usersSlice.actions;
