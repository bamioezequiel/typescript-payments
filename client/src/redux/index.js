import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './users';

export default configureStore({
  reducer: {
    users
  }
});