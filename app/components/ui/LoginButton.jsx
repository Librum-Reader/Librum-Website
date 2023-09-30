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

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Logo from "./Logo";

import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
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
  // Set this to true after user confirms email to trigger login modal
  const [isEmailConfirmed, setIsEmailConfirmed] = useState();

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

  // User auth state
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // User register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
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

  // User auth state setters
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleShowPassword = () => setShowPassword(!showPassword);

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

  const login = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      console.log("DATA", data.code);
      if (data.code === 0) {
        toast({
          title: "Uh oh...",
          description: "The email field is required.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (data.code === 1) {
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
        setUser(data);
        setCookieHandler(data);
        dispatch(updateLoggedIn(true));
        onCloseLogin();
        router.push("/profile");
      }
    },
  });

  // Fires every time token state is changed, lets Navbar know whether or not to display Profile link
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      dispatch(updateLoggedIn(true));
    } else {
      dispatch(updateLoggedIn(false));
    }
  }, [token, dispatch]);

  const handleLogin = (userInfo) => {
    const loginResponse = login.mutate(userInfo);
    console.log("LOGIN RESPONSE", loginResponse);
  };

  // API handling - Register
  const register = useMutation({
    mutationFn: userRegistration,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["register"] });
        onCloseRegister();
        setIsEmailConfirmed(false);
        onOpenConfirmEmail();
        listenForEmailConfirmation();
      } else {
        toast({
          title: "Uh oh...",
          description: data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  // Logout function
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    removeCookie("token");
    dispatch(updateUser({}));
    dispatch(updateLoggedIn(false));
    router.push("/");
  };

  // Register modal logic
  const registerAccount = () => {
    onCloseLogin();
    setTimeout(() => {
      onOpenRegister();
    }, 10);
  };

  let emailConfirmationInterval;

  const listenForEmailConfirmation = () => {
    emailConfirmationInterval = setInterval(() => {
      confirmEmail(registerEmail);
    }, 4000);
  };

  const confirmEmail = async (email) => {
    const result = await getVerifiedStatus(email);
    if (result == true) {
      clearInterval(emailConfirmationInterval);
      onCloseConfirmEmail();
      onOpenLogin();
    }
  };

  const handleRegister = (data) => {
    if (registerPassword !== registerConfirmPassword) {
      toast({
        title: "Uh oh...",
        description: "Confirmation password doesn't match",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (!isChecked) {
      toast({
        title: "Please accept the terms and conditions.",
        description:
          "We are unable to create your account without agreeing to our terms and conditions.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      register.mutate(data);
    }
  };

  const handlePasswordReset = () => {
    setEmail("");
    onClosePasswordReset();
    onOpenPasswordConfirmation();
    resetPassword(email);
  };

  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <Button onClick={token ? logOut : onOpenLogin} variant="loginButton">
        {token ? "LOGOUT" : "LOGIN"}
      </Button>
      {/* Login Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenLogin}
        onClose={onCloseLogin}
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Box textAlign="center" mb="1rem">
                <Heading size="lg" pb=".5rem">
                  Welcome back!
                </Heading>
                <Text fontSize="md">Log into your account</Text>
              </Box>
            </Center>
            <FormControl>
              <FormLabel
                fontSize="md"
                textColor="text-default"
                mb="0"
                fontWeight="semibold"
              >
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={handleEmail}
                ref={initialRef}
                placeholder="Enter Your Email"
                fontSize="md"
                variant="defaultVariant"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel
                fontSize="md"
                textColor="text-default"
                mb="0"
                fontWeight="semibold"
              >
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Your Password"
                  fontSize="md"
                  variant="defaultVariant"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement width="3rem">
                  {showPassword ? (
                    <AiOutlineEyeInvisible onClick={handleShowPassword} />
                  ) : (
                    <AiOutlineEye onClick={handleShowPassword} />
                  )}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Text fontSize="sm">
              Forgot password? Click{" "}
              <Link
                href="#"
                textColor="#946BDE"
                onClick={() => {
                  onOpenPasswordReset();
                  onCloseLogin();
                }}
              >
                here
              </Link>{" "}
              to reset it.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Box width="100%" textAlign="center" pb=".7rem">
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
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Flex direction="column">
                <Box textAlign="center" mb="1rem">
                  <Heading size="lg" pb=".5rem">
                    Welcome to Librum
                  </Heading>
                  <Text fontSize="sm" lineHeight={1.6}>
                    Your credentials are only used to authenticate you. Your
                    credentials will be stored in a secure database.
                  </Text>
                </Box>
                <Flex gap="1rem" my="1rem">
                  <FormControl>
                    <FormLabel
                      fontSize="md"
                      textColor="text-default"
                      mb="0"
                      fontWeight="semibold"
                    >
                      First Name
                    </FormLabel>
                    <Input
                      fontSize="md"
                      value={registerFirstName}
                      onChange={handleRegFName}
                      variant="defaultVariant"
                      placeholder="Kai"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontSize="md"
                      textColor="text-default"
                      mb="0"
                      fontWeight="semibold"
                    >
                      Last Name
                    </FormLabel>
                    <Input
                      fontSize="md"
                      value={registerLastName}
                      onChange={handleRegLName}
                      variant="defaultVariant"
                      placeholder="Doe"
                    />
                  </FormControl>
                </Flex>
                <Box>
                  <FormControl>
                    <FormLabel
                      fontSize="md"
                      textColor="text-default"
                      mb="0"
                      fontWeight="semibold"
                    >
                      Email
                    </FormLabel>
                    <Input
                      fontSize="md"
                      value={registerEmail}
                      onChange={handleRegEmail}
                      variant="defaultVariant"
                      placeholder="kaidoe@gmail.com"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel
                      fontSize="md"
                      textColor="text-default"
                      mb="0"
                      fontWeight="semibold"
                    >
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        fontSize="md"
                        value={registerPassword}
                        onChange={handleRegPass}
                        variant="defaultVariant"
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement width="3rem">
                        {showPassword ? (
                          <AiOutlineEyeInvisible onClick={handleShowPassword} />
                        ) : (
                          <AiOutlineEye onClick={handleShowPassword} />
                        )}
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel
                      fontSize="md"
                      textColor="text-default"
                      mb="0"
                      fontWeight="semibold"
                    >
                      Confirm password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        fontSize="md"
                        value={registerConfirmPassword}
                        onChange={handleRegConfirmPass}
                        variant="defaultVariant"
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement width="3rem">
                        {showPassword ? (
                          <AiOutlineEyeInvisible onClick={handleShowPassword} />
                        ) : (
                          <AiOutlineEye onClick={handleShowPassword} />
                        )}
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Checkbox
                    mt="1rem"
                    colorScheme="purple"
                    isChecked={isChecked}
                    onChange={() => {
                      setIsChecked(!isChecked);
                    }}
                  >
                    <Text fontSize="sm">
                      I accept the{" "}
                      <Link href="/termsofservice" textColor="#946BDE">
                        Terms of Service
                      </Link>{" "}
                      and the{" "}
                      <Link href="/privacypolicy" textColor="#946BDE">
                        Privacy Policy
                      </Link>
                    </Text>
                  </Checkbox>
                </Box>
              </Flex>
            </Center>
          </ModalBody>

          <ModalFooter>
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
                variant="loginButton"
                width="100%"
                mb="1rem"
                fontSize={15}
              >
                {register.isLoading ? <BeatLoader /> : "Let's Get Started"}
              </Button>
              <Text fontSize="sm">
                Already have an account?{" "}
                <Link
                  href="#"
                  textColor="#946BDE"
                  onClick={() => {
                    onCloseRegister();
                    setTimeout(() => {
                      onOpenLogin();
                    }, 10);
                  }}
                >
                  Log In
                </Link>
              </Text>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Confirm Email Modal */}
      <Modal
        isCentered
        variant="emailConfirmation"
        initialFocusRef={initialRef}
        isOpen={isOpenConfirmEmail}
        onClose={onCloseConfirmEmail}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            background="bg-default"
            lineHeight="1.5rem"
            borderRadius="5px"
            px="3rem"
            pt="3.3rem"
            pb="3rem"
          >
            <Flex direction="column" align="center">
              <Heading
                size="xl"
                fontSize="2.6rem"
                mb={6}
                color="#ccc"
                textAlign="center"
              >
                Confirm Your Email
              </Heading>
              <Text
                textAlign="center"
                color="#ccc"
                fontSize="1.15rem"
                lineHeight="1.5rem"
              >
                You&apos;re almost ready to go!
              </Text>
              <Text
                textAlign="center"
                color="#ccc"
                fontSize="1.15rem"
                lineHeight="1.5rem"
              >
                Confirm your email by clicking the link we sent you.
              </Text>

              <Button
                variant="primary"
                width="100%"
                p={2}
                mt="3.5rem"
                fontSize="md"
                onClick={() => onCloseConfirmEmail()}
              >
                Ok
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Password reset Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenPasswordReset}
        onClose={onClosePasswordReset}
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex direction="column" align="center" gap="1rem">
              <Heading size="md">Password Reset</Heading>
              <Text>
                Please enter the email that you&apos;ve used to create your
                account:
              </Text>
              <FormControl>
                <FormLabel
                  fontSize="md"
                  textColor="text-default"
                  mb="0"
                  fontWeight="semibold"
                >
                  Email
                </FormLabel>
                <Input
                  value={email}
                  onChange={handleEmail}
                  ref={initialRef}
                  placeholder="Enter Your Email"
                  fontSize="md"
                  variant="defaultVariant"
                />
              </FormControl>
              <Button
                variant="primary"
                alignSelf="flex-end"
                onClick={handlePasswordReset}
              >
                Reset password
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* Password reset notification Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenPasswordConfirmation}
        onClose={onClosePasswordConfirmation}
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex direction="column" align="center" gap="1rem">
              <Heading size="md">Password Reset</Heading>
              <Text>
                We have sent you an e-mail with a link to complete the password
                reset process. Please click the link and follow the
                instructions.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginButton;
