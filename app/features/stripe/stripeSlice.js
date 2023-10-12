import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stripeSecret: null,
};

export const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {
    updateSecret: (state, action) => {
      state.stripeSecret = action.payload;
    },
  },
});

export const { updateSecret } = stripeSlice.actions;
