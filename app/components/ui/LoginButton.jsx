"use client";

import { Button, useToast } from "@chakra-ui/react";

import { useRouter, usePathname } from "next/navigation";

import { useRef, useState, useEffect } from "react";

import LoginModal from "./modals/LoginModal";
import PasswordResetModal from "./modals/PasswordResetModal";
import PasswordResetConfirmation from "./modals/PasswordResetConfirmation";
import RegisterModal from "./modals/RegisterModal";
import ConfirmEmailModal from "./modals/ConfirmEmailModal";

import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
import { toggleLoginModal } from "../../features/modals/modalSlice";
import { useSelector, useDispatch } from "react-redux/";

import { useCookies } from "react-cookie";

const LoginButton = (props) => {
  const [token, setToken] = useState(null);

  // Page redirection
  const router = useRouter();

  // Redux functions for storing user info after login
  const dispatch = useDispatch();

  // Fires every time token state is changed, lets Navbar know whether or not to display Profile link
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      dispatch(updateLoggedIn(true));
    } else {
      dispatch(updateLoggedIn(false));
    }
  }, [token, dispatch]);

  // Logout function
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    dispatch(updateUser({}));
    dispatch(updateLoggedIn(false));
    router.push("/");
  };

  return (
    <>
      <Button
        onClick={
          token
            ? logOut
            : () => {
                dispatch(toggleLoginModal());
              }
        }
        variant="loginButton"
      >
        {token ? "LOGOUT" : "LOGIN"}
      </Button>
      <LoginModal />
      <RegisterModal />
      <ConfirmEmailModal />
      <PasswordResetModal />
      <PasswordResetConfirmation />
    </>
  );
};

export default LoginButton;
