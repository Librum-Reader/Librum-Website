import React from "react";
import {
  toggleLoginModal,
  togglePasswordResetModal,
  togglePasswordConfirmationModal,
  toggleRegisterModal,
  toggleConfirmEmailModal,
  toggleDrawer,
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

  const toggleMobileDrawer = () => {
    dispatch(toggleDrawer());
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

  const isMobileDrawerOpen = useSelector((state) => state.modal.isDrawerOpen);

  return {
    toggleLogin,
    togglePasswordReset,
    togglePasswordConfirmation,
    toggleRegister,
    toggleConfirmEmail,
    toggleMobileDrawer,
    isPasswordResetOpen,
    isLoginOpen,
    isPasswordConfirmationOpen,
    isRegisterModalOpen,
    isConfirmEmailOpen,
    isMobileDrawerOpen,
  };
};

export default useModalToggle;
