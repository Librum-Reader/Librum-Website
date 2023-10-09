import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isPasswordResetOpen: false,
  isPasswordConfirmationOpen: false,
  isRegisterModalOpen: false,
  isConfirmEmailOpen: false,
  isDrawerOpen: false,
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
    toggleRegisterModal: (state) => {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
    toggleConfirmEmailModal: (state) => {
      state.isConfirmEmailOpen = !state.isConfirmEmailOpen;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const {
  toggleLoginModal,
  togglePasswordResetModal,
  togglePasswordConfirmationModal,
  toggleRegisterModal,
  toggleConfirmEmailModal,
  toggleDrawer,
} = modalSlice.actions;
