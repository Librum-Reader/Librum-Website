import React from "react";
import {
  toggleLoginModal,
  togglePasswordResetModal,
  togglePasswordConfirmationModal,
  toggleRegisterModal,
  toggleConfirmEmailModal,
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
    dispatch(togglePasswordConfirmationModal());
  };

  const toggleRegister = () => {
    dispatch(toggleRegisterModal());
  };

  const toggleConfirmEmail = () => {
    dispatch(toggleConfirmEmailModal());
  };

  const isPasswordResetOpen = useSelector(
    (state) => state.modal.isPasswordResetOpen
  );

  const isLoginOpen = useSelector((state) => state.modal.isLoginOpen);

  const isPasswordConfirmationOpen = useSelector(
    (state) => state.modal.isPasswordConfirmationOpen
  );

  const isRegisterModalOpen = useSelector(
    (state) => state.modal.isRegisterModalOpen
  );

  const isConfirmEmailOpen = useSelector(
    (state) => state.modal.isConfirmEmailOpen
  );

  return {
    toggleLogin,
    togglePasswordReset,
    togglePasswordConfirmation,
    toggleRegister,
    toggleConfirmEmail,
    isPasswordResetOpen,
    isLoginOpen,
    isPasswordConfirmationOpen,
    isRegisterModalOpen,
    isConfirmEmailOpen,
  };
};

export default useModalToggle;
