import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isPasswordResetOpen: false,
  isPasswordConfirmationOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    togglePasswordResetModal: (state) => {
      state.isPasswordResetOpen = !state.isPasswordResetOpen;
    },
    togglePasswordConfirmationModal: (state) => {
      state.isPasswordConfirmationOpen = !state.isPasswordConfirmationOpen;
    },
  },
});

export const {
  toggleLoginModal,
  togglePasswordResetModal,
  togglePasswordConfirmationModal,
} = modalSlice.actions;
