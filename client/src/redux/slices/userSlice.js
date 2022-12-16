import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;

export const fetchGetUser = (id) => (dispatch) => {
  axios
    .get(`https://typescript-payments-eb.onrender.com/user/${id}`)
    .then((res) => {
      dispatch(getUser(res.data));
    })
    .catch((error) => console.log(error));
};