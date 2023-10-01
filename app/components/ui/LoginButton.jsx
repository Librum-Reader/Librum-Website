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

  // Set this to true after user confirms email to trigger login modal
  const [isEmailConfirmed, setIsEmailConfirmed] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User auth state setters
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  useEffect(() => {
    if (isEmailConfirmed === true) {
      console.log("User confirmed email");
    } else if (isEmailConfirmed === false) {
      console.log("Email not confirmed");
    }
  }, [isEmailConfirmed]);

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

  // User register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");

  // Modal state for register modal
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();

  // Modal state for email confirmation modal
  const {
    isOpen: isOpenConfirmEmail,
    onOpen: onOpenConfirmEmail,
    onClose: onCloseConfirmEmail,
  } = useDisclosure();

  const {
    isOpen: isOpenPasswordReset,
    onOpen: onOpenPasswordReset,
    onClose: onClosePasswordReset,
  } = useDisclosure();

  const {
    isOpen: isOpenPasswordConfirmation,
    onOpen: onOpenPasswordConfirmation,
    onClose: onClosePasswordConfirmation,
  } = useDisclosure();

  const initialRef = useRef(null);

  // Redux functions for storing user info after login
  const dispatch = useDispatch();

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

  // User registration state setters
  const handleRegFName = (event) => setRegisterFirstName(event.target.value);
  const handleRegLName = (event) => setRegisterLastName(event.target.value);
  const handleRegEmail = (event) => setRegisterEmail(event.target.value);
  const handleRegPass = (event) => setRegisterPassword(event.target.value);
  const handleRegConfirmPass = (event) =>
    setRegisterConfirmPassword(event.target.value);

  // API handling - Login
  const queryClient = useQueryClient();

  // This function sets a cookie with the token, which is then checked by the middleware on subsequent requests
  const setCookieHandler = (data) => {
    setCookie("token", data, {
      path: "/",
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

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
    removeCookie("token");
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
      {/* Register Modal */}
      <RegisterModal />
      {/* Confirm Email Modal */}
      <ConfirmEmailModal />
      <PasswordResetModal />
      <PasswordResetConfirmation />
    </>
  );
};

export default LoginButton;
