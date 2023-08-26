"use client";

import AvatarAndUserName from "../components/profile/AvatarAndUserName";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import {
  updateLoggedIn,
  updateUser as resetUser,
} from "../features/user/userSlice";
import {
  Flex,
  VStack,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Card,
  CardBody,
  CardHeader,
  Center,
  Button,
  Progress,
  Grid,
  Avatar,
  GridItem,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Form,
  Image,
  InputRightElement,
  InputGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

import { useDispatch } from "react-redux";

import {
  AiOutlineUser,
  AiFillSetting,
  AiFillHeart,
  AiOutlineCloudServer,
} from "react-icons/ai";

import { useState, useEffect } from "react";

import {
  fetchUserInfo,
  fetchBooks,
  editUser,
  uploadAvatar,
  fetchAvatar,
  updatePictureInfo,
  changePassword,
} from "../utils/apiFunctions";

import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const UserProfile = () => {
  const toast = useToast();

  const router = useRouter();
  const queryClient = useQueryClient();
  const [token, setToken] = useState(null);
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    setToken(token);
    setTokenExists(true);
  }, [token, router]);

  // State handlers for fetching avatar
  const [userPicture, setUserPicture] = useState();

  // State handlers for changing username
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const handleNewFirstName = (e) => setNewFirstName(e.target.value);
  const handleNewLastName = (e) => setNewLastName(e.target.value);
  const resetUsernames = () => {
    setNewFirstName("");
    setNewLastName("");
  };

  // State handlers for changing password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const validatePassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === newPassword) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const resetPassword = () => {
    setNewPassword("");
    setConfirmPassword("");
  };

  // State handlers for changing email
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);

  const handleNewEmail = (e) => setNewEmail(e.target.value);

  const validateEmail = (e) => {
    setConfirmEmail(e.target.value);
    if (e.target.value === newEmail) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const resetEmail = () => {
    setNewEmail("");
  };

  // File upload mutation
  const avatarUpload = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avatar"] });
      onAvatarClose();
    },
  });

  // State handlers for avatar upload
  const [avatar, setAvatar] = useState();

  const handleFileSelect = (e) => {
    setAvatar(e.target.files[0]);
  };

  const cancelUpload = () => {
    setAvatar(null);
    onAvatarClose();
  };

  // File upload function
  const uploadFile = async (e, avatar) => {
    e.preventDefault();
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().slice(0, 19);
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", avatar);
    avatarUpload.mutate({ file: formData, token: token });
    updatePicture.mutate({
      hasProfilePicture: true,
      lastUpdated: formattedDateTime,
      token: token,
    });
  };

  const isLoggedIn = useSelector((state) => state.user.value);

  // User info edit modals
  const {
    isOpen: isEditUserNameOpen,
    onOpen: onEditUserNameOpen,
    onClose: onEditUserNameClose,
  } = useDisclosure();

  const {
    isOpen: isChangePasswordOpen,
    onOpen: onChangePasswordOpen,
    onClose: onChangePasswordClose,
  } = useDisclosure();

  const {
    isOpen: isEditEmailOpen,
    onOpen: onEditEmailOpen,
    onClose: onEditEmailClose,
  } = useDisclosure();

  const {
    isOpen: isAvatarOpen,
    onOpen: onAvatarOpen,
    onClose: onAvatarClose,
  } = useDisclosure();

  // Redux functions
  const dispatch = useDispatch();

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUserInfo(token);
    },
    enabled: tokenExists,
  });

  // Mutations for changing username, image, password, and other info
  const updateUser = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onEditUserNameClose();
      toast({
        title: "Success!",
        description: "Your information was updated.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const [errorMsg, setErrorMsg] = useState("");

  const editPassword = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      if (data.code === 0) {
        setErrorMsg("The password entered was too short.");
        onAlertOpen();
      } else {
        onChangePasswordClose();
        resetPassword();
        toast({
          title: "Success!",
          description: "Your password has been changed.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  const updatePicture = useMutation({
    mutationFn: updatePictureInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onEditUserNameClose();
    },
  });

  const handleUpdateUser = (newFirstName, newLastName) => {
    const token = localStorage.getItem("token");

    updateUser.mutate({
      firstName: newFirstName,
      lastName: newLastName,
      token: token,
    });
  };

  const handleEditPassword = (password) => {
    const token = localStorage.getItem("token");

    editPassword.mutate({
      password: password,
      token: token,
    });
  };

  const handleUpdateEmail = (newEmail) => {
    const token = localStorage.getItem("token");

    updateUser.mutate({
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: newEmail,
      token: token,
    });
  };

  const {
    isLoading: isBooksLoading,
    error: booksError,
    data: booksData,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => {
      return fetchBooks(token);
    },
    enabled: tokenExists,
  });

  let storageLimit;
  let usedStorage;
  let storageProgress;

  if (!isLoading) {
    console.log(data);
    storageLimit = data?.bookStorageLimit;
    storageLimit = storageLimit / 1024;
    storageLimit = storageLimit / 1024;
    storageLimit = storageLimit / 1024;

    // usedStorage = data?.usedBookStorage;
    usedStorage = data?.usedBookStorage;
    usedStorage = usedStorage / 1024;
    usedStorage = usedStorage / 1024;
    usedStorage = usedStorage / 1024;

    storageProgress = usedStorage / storageLimit;
    storageProgress = storageProgress * 100;
  }

  // Logout function
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    removeCookie("token");
    dispatch(resetUser({}));
    dispatch(updateLoggedIn(false));
    router.push("/");
  };

  const {
    isOpen: isAlertOpen,
    onClose: onAlertClose,
    onOpen: onAlertOpen,
  } = useDisclosure();

  return (
    <Flex w="100%">
      <Flex
        background="bg-default"
        h={{ base: "100%", md: "100dvh" }}
        w="100%"
        px={{ base: "1rem", md: "9rem" }}
        mt="3.5rem"
        mx="auto"
        maxW="1300px"
        // justify="center"
        mb="4.5rem"
        gap={{ base: "1rem", md: "2rem" }}
        direction="column"
      >
        <Flex
          background="user-profile-bg"
          border="1px"
          borderColor="user-profile-border"
          borderRadius="md"
          p={{ base: "1rem", md: "2rem" }}
          direction={{ base: "column", md: "row" }}
          // w="320px"
          // h="255px"
        >
          <AvatarAndUserName token={token} />
          <Flex
            direction="column"
            borderRadius="md"
            w="100%"
            pl={{ base: "1rem", md: "2rem" }}
            pt={{ base: "1rem", md: "2rem" }}
            pr={{ base: "1rem", md: "0" }}
            // w="320px"
            h={{ base: "auto", md: "255px" }}
          >
            <Text
              fontSize="sm"
              textColor="text-default"
              mb={{ base: "1rem", md: "2rem" }}
            >
              YOUR TIER
            </Text>
            <Flex direction="column" my="1rem" mb="2rem">
              <Text fontSize="xl" textColor="text-default" textAlign="center">
                {data?.role.toUpperCase()}
              </Text>
              <Text
                fontSize="4xl"
                fontWeight="700"
                textColor="text-default"
                textAlign="center"
              >
                {storageLimit?.toFixed(2)} GB
              </Text>
            </Flex>
            <Flex direction="column" gap="1rem">
              <Button size="sm" variant="primary" h="40px">
                Upgrade
              </Button>
              <Button size="sm" variant="secondary" h="40px">
                See why we offer multiple tiers
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Grid
          gap={{ base: "0rem", md: "2rem" }}
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        >
          <GridItem colSpan="2">
            <Flex
              direction="column"
              background="user-profile-bg"
              border="1px"
              borderColor="user-profile-border"
              borderRadius="md"
              p={{ base: "1rem", md: "2rem" }}
              // w="320px"
              h="270px"
            >
              <Text
                fontSize="sm"
                textColor="text-default"
                mb={{ base: "1rem", md: "2rem" }}
              >
                USED STORAGE
              </Text>
              <Flex justify="space-between" gap="4rem">
                <Flex direction="column" my="1rem">
                  <Text
                    fontSize="3xl"
                    fontWeight="700"
                    textColor="text-default"
                    textAlign="left"
                  >
                    {usedStorage?.toFixed(2)} GB
                  </Text>
                  <Text fontSize="sm" textColor="text-default">
                    Used Storage
                  </Text>
                </Flex>
                <Flex direction="column" my="1rem">
                  <Text
                    fontSize="3xl"
                    fontWeight="700"
                    textColor="text-default"
                    textAlign="right"
                  >
                    {storageLimit?.toFixed(2)} GB
                  </Text>
                  <Text
                    fontSize="sm"
                    textColor="text-default"
                    textAlign="right"
                  >
                    Free Storage
                  </Text>
                </Flex>
              </Flex>
              <Progress
                value={storageProgress?.toFixed(0)}
                height="28px"
                colorScheme="text-default"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              background="user-profile-bg"
              direction="column"
              border="1px"
              borderColor="user-profile-border"
              borderRadius="md"
              p={{ base: "1rem", md: "2rem" }}
              // w="320px"
              h="270px"
              mt={{ base: "1rem", md: "0" }}
            >
              <Text
                fontSize="sm"
                textColor="text-default"
                mb={{ base: "1rem", md: "2rem" }}
              >
                YOUR BOOKS
              </Text>
              <Flex direction="column" my="auto">
                <Text
                  fontSize="3xl"
                  textColor="text-default"
                  textAlign="center"
                >
                  {booksData?.length}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  textColor="text-default"
                  textAlign="center"
                >
                  Books in your library
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      {/* Edit username modal */}
      <Modal
        isOpen={isEditUserNameOpen}
        onClose={onEditUserNameClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Edit your username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              First name
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={newFirstName}
              mb="1rem"
              onChange={handleNewFirstName}
            />
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              Last name
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={newLastName}
              onChange={handleNewLastName}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              mr="1rem"
              onClick={() => {
                handleUpdateUser(newFirstName, newLastName);
              }}
            >
              {updateUser.isLoading ? <BeatLoader /> : "Save Changes"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                resetUsernames();
                onEditUserNameClose();
              }}
            >
              Discard
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Edit email modal */}
      <Modal
        isOpen={isEditEmailOpen}
        onClose={onEditEmailClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Edit your email</ModalHeader>
          <ModalCloseButton onClick={resetEmail} />
          <ModalBody>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              New email
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={newEmail}
              mb="1rem"
              onChange={handleNewEmail}
            />
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              Confirm new email
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={confirmEmail}
              onChange={validateEmail}
            />
            {confirmEmail ? (
              emailIsValid ? null : (
                <Text mt="1rem">Emails must match before submitting.</Text>
              )
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              mr="1rem"
              onClick={() => {
                if (emailIsValid) {
                  handleUpdateEmail(newEmail);
                  resetEmail();
                }
              }}
            >
              {updateUser.isLoading ? <BeatLoader /> : "Save Changes"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                resetEmail();
                onEditEmailClose();
              }}
            >
              Discard
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Upload/change avatar modal */}
      <Modal
        isOpen={isAvatarOpen}
        onClose={onAvatarClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Upload avatar</ModalHeader>
          <ModalCloseButton onClick={resetEmail} />
          <ModalBody>
            <form
              onSubmit={(e) => {
                uploadFile(e, avatar);
              }}
            >
              <Flex direction="column" gap="1rem">
                <Input
                  type="file"
                  accept="image/*"
                  variant="editUserInfo"
                  onChange={handleFileSelect}
                />
                <Flex w="100%" justify="end">
                  <Button
                    variant="primary"
                    mr="1rem"
                    type="submit"
                    isLoading={avatarUpload.isLoading}
                    alignSelf="flex-start"
                  >
                    Upload
                  </Button>
                  <Button variant="secondary" onClick={cancelUpload}>
                    Cancel
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* Change password modal */}
      <Modal
        isOpen={isChangePasswordOpen}
        onClose={onChangePasswordClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Change your password</ModalHeader>
          <ModalCloseButton onClick={resetPassword} />
          <ModalBody>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              New password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="editUserInfo"
                value={newPassword}
                mb="1rem"
                onChange={handleNewPassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowPassword}
                  variant="ghost"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              Confirm new password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="editUserInfo"
                value={confirmPassword}
                onChange={validatePassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowPassword}
                  variant="ghost"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {confirmPassword ? (
              passwordIsValid ? null : (
                <Text mt="1rem">Passwords must match before submitting.</Text>
              )
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Flex direction="column" gap="1rem" justify="center" w="100%">
              {isAlertOpen ? (
                <Alert status="error" mb=".4rem">
                  <Flex align="center" justify="space-between" w="100%">
                    <AlertIcon />
                    <AlertDescription>{errorMsg}</AlertDescription>
                    <CloseButton
                      // right={-1}
                      // top={-1}
                      onClick={onAlertClose}
                    />
                  </Flex>
                </Alert>
              ) : null}
              <Flex w="100%" justify="end">
                <Button
                  variant="primary"
                  mr="1rem"
                  onClick={() => {
                    handleEditPassword(newPassword);
                  }}
                >
                  {updateUser.isLoading ? <BeatLoader /> : "Save Changes"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    onChangePasswordClose();
                    resetPassword();
                  }}
                >
                  Discard
                </Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default UserProfile;
