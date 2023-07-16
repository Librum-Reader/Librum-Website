import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
    updateLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateUser, updateLoggedIn } = userSlice.actions;
