import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookieStorage, setOneCookieStorage } from 'src/helpers/storage';
import { ThemeState, THEME_MODE } from 'src/interfaces/theme';
import { RootState } from 'src/store/store';

const initialState: ThemeState = {
  themeMode: (getCookieStorage('user-theme') as THEME_MODE) || THEME_MODE.LIGHT,
  mobile: false,
};

export const themeSlice = createSlice({
  name: 'user-theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME_MODE>) => {
      setOneCookieStorage('user-theme', action.payload);
      document.documentElement.setAttribute('data-user-theme', action.payload);
      state.themeMode = action.payload;
    },
    setMobile: (state, action: PayloadAction<{ status: boolean }>) => {
      state.mobile = action.payload.status;
    },
  },
});

export const { setTheme, setMobile } = themeSlice.actions;

export const selectTheme = (state: RootState): THEME_MODE => state.theme.themeMode;

export default themeSlice.reducer;
