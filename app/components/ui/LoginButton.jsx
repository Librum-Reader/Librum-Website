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
} from "@chakra-ui/react";

import { BeatLoader } from "react-spinners";

import { useRouter } from "next/navigation";

import { useRef, useState, useEffect } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { updateUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/";

import { userLogin, userRegistration } from "../../utils/apiFunctions";

import { useCookies } from "react-cookie";

const LoginButton = (props) => {
  // Cookie bullshit to work around the fact that the authentication for the website is being handled by an external API.
  // We are using react-cookies to set a cookie containing the JWT received from the external API. Then, the existence of
  // this cookie is checked by the middleware function (defined in middleware.js). If JWT does not exist in cookies, then
  // the user is redirected back to home if they try to access the /profile page.
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // Notifications for successful login or errors
  const toast = useToast();

  // Page redirection
  const router = useRouter();

  // User auth state
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");

  // Modal state for login modal
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  // Modal state for register modal
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();

  const initialRef = useRef(null);

  // User auth state setters
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  // Redux functions for storing user info after login
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const setUser = () => {
    dispatch(
      updateUser({
        isLoggedIn: true,
      })
    );
  };

  // User registration state setters
  const handleRegFName = (event) => setRegisterFirstName(event.target.value);
  const handleRegLName = (event) => setRegisterLastName(event.target.value);
  const handleRegEmail = (event) => setRegisterEmail(event.target.value);
  const handleRegPass = (event) => setRegisterPassword(event.target.value);

  // API handling - Login
  const queryClient = useQueryClient();

  // This function sets a cookie with the token, which is then checked by the middleware on subsequent requests
  const setCookieHandler = (data) => {
    setCookie("token", data, {
      path: "/",
    });
  };

  const login = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      if (data.code === 1) {
        toast({
          title: "Uh oh...",
          description: "You've entered the wrong email or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Welcome!",
          description: "You have been logged in. Enjoy.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setToken(data);
        setUser();
        setCookieHandler(data);
        onCloseLogin();
        router.push("/profile");
      }
    },
  });

  // Fires every time token state is changed, lets Navbar know whether or not to display Profile link
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      dispatch(updateUser({ isLoggedIn: true }));
    } else {
      dispatch(updateUser({ isLoggedIn: false }));
    }
  }, [token]);

  const handleLogin = (userInfo) => {
    login.mutate(userInfo);
  };

  // API handling - Register
  const register = useMutation({
    mutationFn: userRegistration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["register"] });
      onCloseRegister();
      onOpenLogin();
    },
  });

  // Logout function
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    removeCookie("token");
    dispatch(
      updateUser({
        isLoggedIn: false,
      })
    );
    router.push("/");
  };

  // Register modal logic
  const registerAccount = () => {
    onCloseLogin();
    onOpenRegister();
  };

  const handleRegister = (data) => {
    register.mutate(data);
  };

  console.log(user);

  return (
    <>
      <Button onClick={token ? logOut : onOpenLogin} variant="navButton">
        {token ? "LOGOUT" : "LOGIN"}
      </Button>
      {/* Login Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenLogin}
        onClose={onCloseLogin}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Box textAlign="center" mb="1rem">
                <Heading size="md" pb=".5rem">
                  Welcome back!
                </Heading>
                <Text fontSize="xs">Log into your account</Text>
              </Box>
            </Center>
            <FormControl>
              <FormLabel fontSize="xs">Email</FormLabel>
              <Input
                value={email}
                onChange={handleEmail}
                ref={initialRef}
                placeholder="Enter Your Email"
                fontSize="xs"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize="xs">Password</FormLabel>
              <Input
                value={password}
                onChange={handlePassword}
                placeholder="Enter Your Password"
                fontSize="xs"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Box width="100%" textAlign="center">
              <Button
                onClick={() => {
                  handleLogin({ Email: email, Password: password });
                }}
                variant="primary"
                width="100%"
                mb="1rem"
              >
                {login.isLoading ? <BeatLoader /> : "Log In"}
              </Button>
              <Button
                variant="secondary"
                width="100%"
                onClick={() => {
                  registerAccount();
                }}
              >
                Register
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Register Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader background="#282c34"> </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#282c34">
            <Center>
              <Flex direction="column">
                <Box textAlign="center" mb="1rem">
                  <Heading size="md" color="white" pb=".5rem">
                    Welcome to Librum
                  </Heading>
                  <Text fontSize="xs" color="white">
                    Your credentials are only used to authenticate you. Your
                    credentials will be stored in a secure database.
                  </Text>
                </Box>
                <Flex gap="1rem" mb="1rem">
                  <FormControl>
                    <FormLabel fontSize="xs" color="white">
                      First Name
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      textColor="white"
                      value={registerFirstName}
                      onChange={handleRegFName}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" color="white">
                      Last Name
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      textColor="white"
                      value={registerLastName}
                      onChange={handleRegLName}
                    />
                  </FormControl>
                </Flex>
                <Box>
                  <FormControl>
                    <FormLabel fontSize="xs" color="white">
                      Email
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      textColor="white"
                      value={registerEmail}
                      onChange={handleRegEmail}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel fontSize="xs" color="white">
                      Password
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      textColor="white"
                      value={registerPassword}
                      onChange={handleRegPass}
                    />
                  </FormControl>
                </Box>
              </Flex>
            </Center>
          </ModalBody>

          <ModalFooter background="#282c34">
            <Box width="100%" textAlign="center">
              <Button
                onClick={() => {
                  handleRegister({
                    FirstName: registerFirstName,
                    LastName: registerLastName,
                    Email: registerEmail,
                    Password: registerPassword,
                  });
                }}
                colorScheme="teal"
                width="100%"
                mb="1rem"
              >
                {register.isLoading ? <BeatLoader /> : "Let's Get Started"}
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginButton;
