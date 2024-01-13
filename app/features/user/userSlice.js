import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userInfo));
    },
    updateLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    resetUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    }
  },
});

export const { updateUser, updateLoggedIn, resetUser } = userSlice.actions;
