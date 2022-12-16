import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/userSlice.js';

export default configureStore({
  reducer: {
    users
  }
});