import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'src/helpers/config';

export type IAccount = {
  id: number;
  balance: string;
  createdAt: string;
  updatedAt: string;
};

export type IUserState = {
  loading: boolean;
  loadingCurrentUser: boolean;
  error: boolean;
  user: {
    address: string;
    createdAt?: string;
    email?: string;
    id?: number;
    isLocked?: string;
    mailStatus?: string;
    role?: string;
    status?: string;
    updatedAt?: string;
    userType?: string;
    pendingEmail?: string;
    messageError?: any;
  };
};

const initialState: IUserState = {
  loading: false,
  loadingCurrentUser: false,
  error: false,
  user: {
    address: '',
  },
};

export const getCurrentUser = createAsyncThunk('getCurrentUser', async () => {
  return await axiosInstance.get(`/auth/current`);
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [`${getCurrentUser.pending}`]: (state) => {
      state.loadingCurrentUser = true;
    },
    [`${getCurrentUser.rejected}`]: (state, action) => {
      state.loadingCurrentUser = false;
      state.error = action.error;
    },
    [`${getCurrentUser.fulfilled}`]: (state, action) => {
      state.loadingCurrentUser = false;
      state.user = action.payload.data;
    },
  },
});

const { reducer: userReducer } = userSlice;

export const { setUser } = userSlice.actions;
export default userReducer;
