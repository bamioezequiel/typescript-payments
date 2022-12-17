import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {
    getUserById: (state, action) => {
      state.user = action.payload;
    },
    getUserByToken: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { getUserById,getUserByToken } = userSlice.actions;

export default userSlice.reducer;

export const fetchGetUserById = (id) => async (dispatch) => {
  await axios
    .get(`https://typescript-payments-eb.onrender.com/user/${id}`)
    .then((res) => {
      console.log(res)
      dispatch(getUserById(res.data));
    })
    .catch((error) => console.log(error));
};

export const fetchGetUserByToken = (token) => async (dispatch) => {
  await axios
    .get(`https://typescript-payments-eb.onrender.com/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      } 
    })
    .then((res) => {
      console.log(res)
      dispatch(getUserByToken(res.data.user));
    })
    .catch((error) => console.log(error));
};