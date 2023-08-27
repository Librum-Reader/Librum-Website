"use client";

import AvatarAndUserName from "../components/profile/AvatarAndUserName";
import UsernameAndEmail from "../components/profile/UsernameAndEmail";
import AccountSettings from "../components/profile/AccountSettings";

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
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

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

  const isLoggedIn = useSelector((state) => state.user.value);

  // User info edit modals

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

  return (
    <Flex w="100%">
      <Flex
        background="bg-default"
        h={{ base: "100%", md: "100%" }}
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
          <AvatarAndUserName avatarControl={isAvatarOpen} />
          <UsernameAndEmail />
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
        <AccountSettings />
      </Flex>
      {/* Edit email modal */}
      {/* <Modal
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
      </Modal> */}
    </Flex>
  );
};

export default UserProfile;
