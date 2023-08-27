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
} from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  fetchUserInfo,
  fetchAvatar,
  updatePictureInfo,
  uploadAvatar,
} from "@/app/utils/apiFunctions";

const AvatarAndUserName = () => {
  const {
    isOpen: isAvatarOpen,
    onOpen: onAvatarOpen,
    onClose: onAvatarClose,
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
      return fetchAvatar(token);
    },
  });

  const updatePicture = useMutation({
    mutationFn: updatePictureInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onEditUserNameClose();
    },
  });

  // File upload mutation
  const queryClient = useQueryClient();
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
        <Avatar src={avatarData ?? avatarData} icon={<Spinner />} size="2xl" />

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
            Change avatar
          </Button>
          <Button
            variant="primary"
            size="sm"
            w="full"
            // onClick={logOut}
            h="40px"
          >
            Logout
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
          <ModalHeader>Upload avatar</ModalHeader>
          <ModalCloseButton />
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
    </>
  );
};

export default AvatarAndUserName;
