import React from "react";
import {
  Flex,
  Avatar,
  Button,
  Box,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  fetchUserInfo,
  fetchAvatar,
  updatePictureInfo,
  uploadAvatar,
  deleteAvatar,
} from "@/app/utils/apiFunctions";

import FileUpload from "./FileUpload";

const AvatarAndUserName = () => {
  const queryClient = useQueryClient();

  const {
    isOpen: isAvatarOpen,
    onOpen: onAvatarOpen,
    onClose: onAvatarClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteAvatarOpen,
    onOpen: onDeleteAvatarOpen,
    onClose: onDeleteAvatarClose,
  } = useDisclosure();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUserInfo(token);
    },
  });

  const {
    isLoading: isAvatarLoading,
    error: avatarError,
    data: avatarData,
  } = useQuery({
    queryKey: ["avatar"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      fetchAvatar(token);
    },
  });

  const updatePicture = useMutation({
    mutationFn: updatePictureInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const deletePicture = useMutation({
    mutationFn: deleteAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avatar"] });
      onDeleteAvatarClose();
    },
  });

  // File upload mutation
  const avatarUpload = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avatar"] });
      onAvatarClose();
    },
  });

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

  // Delete avatar function

  const deleteUserAvatar = () => {
    const token = localStorage.getItem("token");
    deletePicture.mutate(token);
  };

  const [avatar, setAvatar] = useState();

  const handleFileSelect = (e) => {
    setAvatar(e.target.files[0]);
  };

  const cancelUpload = () => {
    setAvatar(null);
    onAvatarClose();
  };

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="2rem"
        borderRight={{ base: "0px", md: "1px" }}
        borderBottom={{ base: "1px", md: "0px" }}
        borderColor={{
          base: "user-profile-border",
          md: "user-profile-border",
        }}
        pr={{ base: "0", md: "2rem" }}
        pb={{ base: "1rem", md: "0" }}
        pt={{ base: "1rem", md: "0" }}
      >
        <Avatar src={avatarData ?? avatarData} size="2xl" />

        {/* {!isAvatarLoading && <Image src={avatarData} alt="Fetched" />} */}
        <Text fontWeight="bold">
          {data?.firstName} {data?.lastName}
        </Text>
        <Box>
          <Button
            variant="secondary"
            size="sm"
            mb="1rem"
            w={{ base: "full", md: "auto" }}
            h="40px"
            onClick={onAvatarOpen}
          >
            Upload avatar
          </Button>
          <Button variant="destructive" w="full" onClick={onDeleteAvatarOpen}>
            Delete avatar
          </Button>
        </Box>
      </Flex>

      {/* Upload/change avatar modal */}
      <Modal
        isOpen={isAvatarOpen}
        onClose={onAvatarClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Avatar upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={(e) => {
                uploadFile(e, avatar);
              }}
            >
              <FileUpload />
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* Delete avatar modal */}
      <Modal
        isOpen={isDeleteAvatarOpen}
        onClose={onDeleteAvatarClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Delete avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap="1rem">
              <Text>
                This will remove the current avatar you have set. Are you sure
                you want to proceed?
              </Text>
              <Flex gap="1rem">
                <Button variant="destructive" onClick={deleteUserAvatar}>
                  Delete avatar
                </Button>
                <Button variant="secondary" onClick={onDeleteAvatarClose}>
                  Cancel
                </Button>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AvatarAndUserName;
