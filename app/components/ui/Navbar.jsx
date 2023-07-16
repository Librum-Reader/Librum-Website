"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Spacer,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CardBody,
  Card,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  FormControl,
  VStack,
  FormLabel,
  Input,
  Spinner,
  Textarea,
  Center,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import LoginButton from "../ui/LoginButton";
import ProfileButton from "../ui/ProfileButton";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaPatreon } from "react-icons/fa";
import ContactForm from "./ContactForm";

const navLinks = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/news",
    text: "NEWS",
  },
];

const navLinkComponents = navLinks.map((link, index) => {
  return (
    <Link key={index} href={link.href}>
      <Button variant="navLink">{link.text}</Button>
    </Link>
  );
});

const Navbar = () => {
  // Redux state for keeping track of whether or not the user is logged in
  const user = useSelector((state) => state.user.value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setiIsLoading] = useState(false);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const handleSubmit = async (e) => {
    const values = {
      Name: name,
      Email: email,
      Message: message,
    };
    setiIsLoading(true);
    try {
      await submitForm(e, values);
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setMessage("");
    setiIsLoading(false);
    e.preventDefault();
    onOpen();
  };

  const loading = <Spinner />;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        variant="contact"
        bg="transparent"
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="1000px"
          bg="transparent"
          boxShadow="0"
          alignContent="center"
        >
          <ModalBody>
            <Flex bg="white" p=".5rem" borderRadius="md">
              <Card borderRadius="md" w="800px">
                <CardBody
                  borderRadius="md"
                  bgGradient="linear(to-r, #DED3F1, #8253D6 )"
                >
                  <Flex direction="column">
                    <Box w="auto" h="400px">
                      <Heading size="lg" mb=".5rem">
                        Contact Information
                      </Heading>
                      <Text mb="2rem">
                        Fill out the form if you have any questions, comments,
                        concerns, or bug reports. Our team is 100% responsive,
                        and we reply quickly!
                      </Text>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiOutlineMail color="#47478f" size={25} />
                        <Text color="#8557d7">help@librumreader.com</Text>
                      </Flex>
                      <Flex alignItems="center" gap=".5rem" ml="1rem">
                        <AiOutlineMail color="#47478f" size={25} />
                        <Text color="#8557d7">contact@librumreader.com</Text>
                      </Flex>
                    </Box>
                    <Grid templateColumns="1fr 300px">
                      <GridItem
                        justifyItems="center"
                        alignItems="center"
                        alignContent="center"
                      >
                        <Flex
                          width="100%"
                          height="100%"
                          justifyContent="center"
                          gap="2rem"
                          alignItems="center"
                        >
                          <AiFillGithub color="#47478f" size={35} />
                          <FaPatreon color="#47478f" size={35} />
                        </Flex>
                      </GridItem>
                      <GridItem>
                        <Center>
                          <Image src="/contact.png" w="250px" h="auto" />
                        </Center>
                      </GridItem>
                    </Grid>
                  </Flex>
                </CardBody>
              </Card>
              <Flex w="800px" direction="column">
                <Heading size="md" alignSelf="center" mt="2rem">
                  Your information
                </Heading>
                <FormControl p="1rem">
                  <VStack>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="bold"
                      color="#47478f"
                      alignSelf="start"
                      m="0"
                    >
                      Name
                    </FormLabel>
                    <Input
                      bgColor="whitesmoke"
                      value={name}
                      onChange={handleName}
                      alignSelf="flex-start"
                      mb=".5rem"
                    />
                    <FormLabel
                      fontSize="sm"
                      fontWeight="bold"
                      color="#47478f"
                      alignSelf="start"
                      m="0"
                    >
                      Email address
                    </FormLabel>
                    <Input
                      bgColor="whitesmoke"
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      alignSelf="flex-start"
                      mb=".5rem"
                    />
                    <FormLabel
                      fontSize="sm"
                      fontWeight="bold"
                      color="#47478f"
                      alignSelf="start"
                      m="0"
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      bgColor="whitesmoke"
                      value={message}
                      onChange={handleMessage}
                      placeholder="I need help with..."
                      h="200px"
                    />
                  </VStack>
                  <Button
                    mt={4}
                    type="submit"
                    isLoading={isLoading}
                    variant="primary"
                  >
                    Submit Message
                  </Button>
                </FormControl>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex maxW="1300px" width="100%" mx="auto">
        <Flex
          pt={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
          className="navbar"
          pb={4}
        >
          <Image alt="librum logo" src="ereader1.png" />
          <Spacer />
          <Flex gap="2rem">
            {navLinkComponents}
            <Button variant="navLink" onClick={onOpen}>
              CONTACT
            </Button>
            {user.isLoggedIn ? <ProfileButton /> : ""}
            <LoginButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
