/* eslint-disable max-len */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from 'src/services/theme';
import userReducer from 'src/services/user';
import authReducer from 'src/store/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootStore = typeof store;
export default store;
