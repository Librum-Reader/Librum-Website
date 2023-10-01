"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Center,
  Heading,
  Text,
  Box,
  Flex,
  useToast,
  Image,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
} from "@chakra-ui/react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { BeatLoader } from "react-spinners";

import { useRouter, usePathname } from "next/navigation";

import { useRef, useState, useEffect } from "react";

import LoginModal from "./modals/LoginModal";
import PasswordResetModal from "./modals/PasswordResetModal";
import PasswordResetConfirmation from "./modals/PasswordResetConfirmation";
import RegisterModal from "./modals/RegisterModal";
import ConfirmEmailModal from "./modals/ConfirmEmailModal";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Logo from "./Logo";

import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
import { toggleLoginModal } from "../../features/modals/modalSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/";

import {
  fetchUserInfo,
  userLogin,
  userRegistration,
  getVerifiedStatus,
  resetPassword,
} from "../../utils/apiFunctions";

import { useCookies } from "react-cookie";

const LoginButton = (props) => {
  const [token, setToken] = useState(null);
  const isOpen = useSelector((state) => state.modal.isLoginOpen);

  const path = usePathname();

  // Cookie bullshit to work around the fact that the authentication for the website is being handled by an external API.
  // We are using react-cookies to set a cookie containing the JWT received from the external API. Then, the existence of
  // this cookie is checked by the middleware function (defined in middleware.js). If JWT does not exist in cookies, then
  // the user is redirected back to home if they try to access the /profile page.
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // Notifications for successful login or errors
  const toast = useToast();

  // Page redirection
  const router = useRouter();

  // Redux functions for storing user info after login
  const dispatch = useDispatch();

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

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
