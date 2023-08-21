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
  Slide,
  Fade,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import ProfileButton from "../ui/ProfileButton";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const path = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleColorTheme = () => {
    toggleColorMode();
  };

  const navLinkComponents = navLinks.map((link, index) => {
    return (
      <Link key={index} href={link.href}>
        <Button variant={path == "/" ? "navLinkHome" : "navLink"}>
          {link.text}
        </Button>
      </Link>
    );
  });

  // Redux state for keeping track of whether or not the user is logged in
  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isSlideOpen, onToggle: onSlideToggle } = useDisclosure();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setiIsLoading] = useState(false);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const submitForm = async (e, values) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/help@librumreader.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if ((await data?.success) !== "true") {
            throw new Error("Something went wrong!");
          }
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
    setContactOpen(false);
  };

  const loading = <Spinner />;
  const [contactOpen, setContactOpen] = useState(true);

  const resetModal = () => {
    setContactOpen(true);
    onClose();
  };

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
            <Flex bg="bg-default" p=".5rem" borderRadius="md">
              <Card borderRadius="md" w="800px">
                <CardBody
                  borderRadius="md"
                  bgGradient="linear(to-r, #37366d, #4e4d8d )"
                >
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    height="100%"
                  >
                    <Box w="auto" h="3ß00px">
                      <Heading size="lg" mb=".5rem">
                        Contact Information
                      </Heading>
                      <Text mb="2rem" fontSize="sm" color="text-default">
                        Fill out the form if you have any questions, comments,
                        concerns, or bug reports. Our team is 100% responsive,
                        and we reply quickly! Check out other contact options
                        below:
                      </Text>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillMail color="#946bde" size={20} />
                        <Text fontSize="sm" color="text-default">
                          <Link href="mailto:help@librumreader.com">
                            help@librumreader.com
                          </Link>
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillMail color="#946bde" size={20} />
                        <Text fontSize="sm" color="text-default">
                          <Link href="mailto:contact@librumreader.com">
                            contact@librumreader.com
                          </Link>
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillGithub color="#946bde" size={20} />
                        <Text fontSize="sm" color="text-default">
                          <Link
                            href="http://github.com/librum-reader"
                            target="#"
                          >
                            GitHub
                          </Link>
                        </Text>
                      </Flex>
                    </Box>
                    <Grid templateColumns="1fr 300px">
                      <GridItem
                        justifyItems="center"
                        alignItems="center"
                        alignContent="center"
                      ></GridItem>
                      <GridItem>
                        <Center>
                          <Image src="/contact.png" w="250px" h="auto" />
                        </Center>
                      </GridItem>
                    </Grid>
                  </Flex>
                </CardBody>
              </Card>
              <Flex
                w="800px"
                direction="column"
                className={
                  contactOpen
                    ? "contact-success-message closed"
                    : "contact-success-message"
                }
                align="center"
                justify="space-between"
                pl="1rem"
              >
                <Flex direction="column" align="center" mt="4rem">
                  <Heading mb="2rem">Thank you!</Heading>
                  <Text mb="2rem" fontSize="sm" color="#47478f">
                    We have received your message, and someone from our team
                    will be in touch shortly.
                  </Text>
                </Flex>
                <Button
                  alignSelf="end"
                  variant="primary"
                  onClick={() => {
                    resetModal();
                  }}
                >
                  Close
                </Button>
              </Flex>
              <Flex
                w="800px"
                direction="column"
                className={
                  contactOpen ? "contact-modal" : "contact-modal closed"
                }
              >
                <Heading size="md" alignSelf="center" mt="1rem" mb="1rem">
                  Your information
                </Heading>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <FormControl pl=".5rem">
                    <VStack>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="bold"
                        color="text-default"
                        alignSelf="start"
                        m="0"
                      >
                        Name
                      </FormLabel>
                      <Input
                        value={name}
                        onChange={handleName}
                        alignSelf="flex-start"
                        mb=".5rem"
                        // size="sm"
                        variant="defaultVariant"
                      />
                      <FormLabel
                        fontSize="sm"
                        fontWeight="bold"
                        color="text-default"
                        alignSelf="start"
                        m="0"
                      >
                        Email address
                      </FormLabel>
                      <Input
                        value={email}
                        onChange={handleEmail}
                        type="email"
                        alignSelf="flex-start"
                        mb=".5rem"
                        // size="sm"
                        variant="defaultVariant"
                      />
                      <FormLabel
                        fontSize="sm"
                        fontWeight="bold"
                        color="text-default"
                        alignSelf="start"
                        m="0"
                      >
                        Message
                      </FormLabel>
                      <Textarea
                        value={message}
                        onChange={handleMessage}
                        placeholder="I need help with..."
                        h="200px"
                        // size="sm"
                        variant="defaultVariant"
                      />
                    </VStack>
                    <Flex w="100%" justifyContent="end">
                      <Button
                        mt={4}
                        type="submit"
                        isLoading={isLoading}
                        variant="primary"
                      >
                        Submit Message
                      </Button>
                    </Flex>
                  </FormControl>
                </form>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex width="100%" px="8rem">
        <Flex
          pt={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
          className="navbar"
          pb={4}
        >
          <Flex align="center" gap="1rem">
            {/* <Image alt="librum logo" src="ereader1.png" /> */}
            <Logo />
            <Heading
              size="lg"
              textColor={path == "/" ? "white" : "text-default"}
            >
              Librum
            </Heading>
          </Flex>
          <Spacer />
          <Flex gap="2rem">
            <Button variant="link" onClick={toggleColorTheme}>
              {colorMode === "dark" ? (
                <FaSun color={path == "/" ? "white" : "white"} size={20} />
              ) : (
                <FaMoon color={path == "/" ? "white" : "#946BDE"} size={20} />
              )}
            </Button>
            {navLinkComponents}
            <Button
              variant={path == "/" ? "navLinkHome" : "navLink"}
              onClick={onOpen}
            >
              CONTACT
            </Button>
            {isLoggedIn ? <ProfileButton /> : null}
            <LoginButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
