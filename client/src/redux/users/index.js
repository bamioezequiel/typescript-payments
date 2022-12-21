import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
    orders: []
  },
  reducers: {
    getUserById: (state, action) => {
      state.user = action.payload;
    },
    getUserByToken: (state, action) => {
      state.user = action.payload;
    },
    getUserOrders: (state, action) => {
      state.orders = action.payload;
    }
  },
});

export const { getUserById,getUserByToken,getUserOrders } = userSlice.actions;

export default userSlice.reducer;

export const fetchGetUserOrders = (id) => (dispatch) => {
  axios
    .get(`/user/orders/${id}`)
    .then((res) => {
      console.log(res)
      dispatch(getUserOrders(res.data));
    })
    .catch((error) => console.log(error));
};

export const fetchGetUserById = (id) => (dispatch) => {
  axios
    .get(`/user/${id}`)
    .then((res) => {
      console.log(res)
      dispatch(getUserById(res.data));
    })
    .catch((error) => console.log(error));
};

export const fetchGetUserByToken = (token) => (dispatch) => {
  axios
    .get(`/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      } 
    })
    .then((res) => {
      console.log(res)
      dispatch(getUserByToken(res.data));
    })
    .catch((error) => console.log(error));
};