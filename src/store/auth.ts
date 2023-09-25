import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'src/helpers/config';
import { setAllCookieStorage } from 'src/helpers/storage';

const initialState = {};

export const login = createAsyncThunk('/auth/login', async (body: any) => {
  try {
    return await axiosInstance.post(`/auth/login`, body);
  } catch (error) {
    throw error;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.toString()]: () => {},
    [login.rejected.toString()]: () => {},
    [login.fulfilled.toString()]: (state, action) => {
      setAllCookieStorage([
        // { key: 'access_token', value: action.payload.data.accessToken },
        { key: 'refresh_token', value: action.payload.data.refreshToken },
        { key: 'access_token_expired', value: action.payload.data.accessTokenExpired },
        { key: 'refresh_token_expired', value: action.payload.data.refreshTokenExpired },
      ]);
    },
  },
});

const { reducer: authReducer } = authSlice;

export default authReducer;
