import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { modalSlice } from "./features/modals/modalSlice";

// TODO: Need to make store saved into localstorage
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});
