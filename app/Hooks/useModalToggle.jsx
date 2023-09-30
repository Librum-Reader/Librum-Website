import React from "react";
import {
  toggleLoginModal,
  togglePasswordResetModal,
  togglePasswordConfirmationModal,
} from "../features/modals/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const useModalToggle = () => {
  const dispatch = useDispatch();

  const toggleLogin = () => {
    dispatch(toggleLoginModal());
  };

  const togglePasswordReset = () => {
    dispatch(togglePasswordResetModal());
  };

  const togglePasswordConfirmation = () => {
    console.log("toggle password confirmation");
    dispatch(togglePasswordConfirmationModal());
  };

  const isPasswordResetOpen = useSelector(
    (state) => state.modal.isPasswordResetOpen
  );

  const isLoginOpen = useSelector((state) => state.modal.isLoginOpen);

  const isPasswordConfirmationOpen = useSelector(
    (state) => state.modal.isPasswordConfirmationOpen
  );

  return {
    toggleLogin,
    togglePasswordReset,
    togglePasswordConfirmation,
    isPasswordResetOpen,
    isLoginOpen,
    isPasswordConfirmationOpen,
  };
};

export default useModalToggle;
