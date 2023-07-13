import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { email: null, isLoggedIn: false },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value.email = action.payload.email;
      state.value.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { updateUser } = userSlice.actions;
