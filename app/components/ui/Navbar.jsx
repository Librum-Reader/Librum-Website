"use client";
import styles from "../ui/navlinks.module.css";
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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  Divider,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import LoginButton from "../ui/LoginButton";
import LoginButtonMobile from "../ui/LoginButtonMobile";
import Logo from "./Logo";
import MobileNavLogo from "./MobileNavLogo";
import ProfileButton from "../ui/ProfileButton";
import ProfileButtonMobile from "../ui/ProfileButtonMobile";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { FaBars, FaMoon, FaSun, FaAngleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import ContactForm from "./ContactForm";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import SunIcon from "../ui/SunIcon";
import { LoginContext } from "../../context/loginModalContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/pricing",
    text: "PRICING",
  },
  {
    href: "/news",
    text: "NEWS",
  },
];

let inactive;
let active;

const Navbar = () => {
  const { loginOpen, setLoginOpen } = useContext(LoginContext);
  const router = useRouter();

  const path = usePathname();
  if (path === "/") {
    inactive = "navLinkHome";
    active = "navActive";
  } else {
    inactive = "navLink";
  }

  const { colorMode, toggleColorMode } = useColorMode();

  const toggleColorTheme = () => {
    toggleColorMode();
  };
  const navLinkComponents = navLinks.map((link, index) => {
    return (
      <Link key={index} href={link.href} className={styles.navHover}>
        {/* <Button variant={path === link.href ? active : inactive}> */}
        <Button
          variant={
            path === "/"
              ? path === link.href
                ? "navActive"
                : "navLinkHome"
              : path === link.href
                ? "navActive"
                : "navLink"
          }
        >
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
  const {
    isOpen: isThankYouOpen,
    onOpen: onThankYouOpen,
    onClose: onThankYouClose,
  } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const { isOpen: isSlideOpen, onToggle: onSlideToggle } = useDisclosure();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setiIsLoading] = useState(false);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const toast = useToast();

  const submitForm = async (e, values) => {
    e.preventDefault();
    try {
      console.log("Form submitting");
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
    if (!email || !message) {
      e.preventDefault();
      toast({
        title: "Uh oh!",
        description:
          "Please make sure all the fields are filled out before submitting your message.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
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
      onClose();
      onThankYouOpen();
    }
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
        isOpen={isThankYouOpen}
        onClose={onThankYouClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent boxShadow="0" alignContent="center">
          <ModalBody>
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              pl="1rem"
              py="1rem"
            >
              <Heading mb="2rem">Thank you!</Heading>
              <Text mb="2rem" color="text-default">
                We have received your message, and someone from our team will be
                in touch shortly.
              </Text>

              <Button
                variant="primary"
                onClick={() => {
                  onThankYouClose();
                  resetModal();
                }}
              >
                Close
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

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
              <Card
                borderRadius="md"
                w="800px"
                display={{ base: "none", md: "flex" }}
              >
                <CardBody
                  borderRadius="md"
                  bgGradient="linear(to-r, #37366d, #4e4d8d )"
                >
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    height="100%"
                  >
                    <Box
                      w="auto"
                      h="3ß00px"
                      display={{ base: "none", md: "block" }}
                    >
                      <Heading size="lg" mb=".5rem">
                        Contact Information
                      </Heading>
                      <Text mb="2rem" fontSize="sm" color="white">
                        Fill out the form if you have any questions, comments,
                        concerns, or bug reports. Our team is 100% responsive,
                        and we reply quickly! Check out other contact options
                        below:
                      </Text>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillMail color="#946bde" size={20} />
                        <Text fontSize="sm" color="white">
                          <Link href="mailto:help@librumreader.com">
                            help@librumreader.com
                          </Link>
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillMail color="#946bde" size={20} />
                        <Text fontSize="sm" color="white">
                          <Link href="mailto:contact@librumreader.com">
                            contact@librumreader.com
                          </Link>
                        </Text>
                      </Flex>
                      <Flex alignItems="center" gap=".5rem" mb="1rem" ml="1rem">
                        <AiFillGithub color="#946bde" size={20} />
                        <Text fontSize="sm" color="white">
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
                          <Image
                            src="/contact.png"
                            w="250px"
                            h="auto"
                            display={{ base: "none", md: "block" }}
                          />
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
      <Flex width="100%" px={{ base: ".5rem", md: "9rem" }}>
        <Flex
          pt={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
          className="navbar"
          pb={4}
        >
          <Flex
            align="center"
            gap="1rem"
            onClick={() => {
              router.push("/");
            }}
            _hover={{ cursor: "pointer" }}
          >
            {/* <Image alt="librum logo" src="ereader1.png" /> */}
            {/* <ThemeToggle /> */}
            <Logo />
            <Heading
              size="lg"
              textColor={path == "/" ? "white" : "text-default"}
            >
              Librum
            </Heading>
          </Flex>
          <Spacer />
          <Flex
            gap="1rem"
            display={{ base: "none", lg: "flex" }}
            align="center"
          >
            {navLinkComponents}
            <Button
              variant={path == "/" ? "navLinkHome" : "navLink"}
              onClick={onOpen}
              className="nav-hover"
            >
              CONTACT
            </Button>
            {isLoggedIn ? <ProfileButton /> : <LoginButton />}
            <Button variant="link" onClick={toggleColorTheme}>
              {colorMode === "dark" ? (
                <SunIcon />
              ) : (
                <FaMoon color={path == "/" ? "white" : "#946BDE"} size={16} />
              )}
            </Button>
          </Flex>
          <IconButton
            icon={<FaBars />}
            display={{ base: "flex", md: "none" }}
            onClick={onDrawerOpen}
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        variant="defaultVariant"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex align="center" justify="space-between" pr="24px">
              <Flex align="center" gap="1rem" mt="1rem" mb="1rem" px="24px">
                <MobileNavLogo />
                <Heading
                  size="lg"
                  textColor={colorMode === "dark" ? "white" : "#946BDE"}
                >
                  Librum
                </Heading>
              </Flex>
              <FaXmark className="res-theme-icon" onClick={onDrawerClose} />
            </Flex>
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" h="100%">
              <Flex
                direction="column"
                w="100%"
                align="start"
                gap="1rem"
                px="10px"
              >
                <Link
                  href="/"
                  style={{ display: "flex", width: "100%" }}
                  onClick={onDrawerClose}
                >
                  <Button
                    w="full"
                    size="md"
                    variant={path === "/" ? "drawerActive" : "drawerButton"}
                    rightIcon={<FaAngleRight />}
                    iconSpacing="auto"
                  >
                    HOME
                  </Button>
                </Link>
                <Link
                  href="/pricing"
                  style={{ display: "flex", width: "100%" }}
                  onClick={onDrawerClose}
                >
                  <Button
                    w="full"
                    size="md"
                    variant={path === "/pricing" ? "drawerActive" : "drawerButton"}
                    rightIcon={<FaAngleRight />}
                    iconSpacing="auto"
                  >
                    PRICING
                  </Button>
                </Link>
                <Link
                  href="/news"
                  style={{ display: "flex", width: "100%" }}
                  onClick={onDrawerClose}
                >
                  <Button
                    w="full"
                    size="md"
                    variant={path === "/news" ? "drawerActive" : "drawerButton"}
                    rightIcon={<FaAngleRight />}
                    iconSpacing="auto"
                  >
                    NEWS
                  </Button>
                </Link>
                {/* <Link
                  style={{ display: "flex", width: "100%" }}
                  href=""
                  onClick={() => {
                    onOpen();
                    onDrawerClose();
                  }}
                > */}
                <Button
                  w="full"
                  size="md"
                  variant="drawerButton"
                  rightIcon={<FaAngleRight />}
                  iconSpacing="auto"
                  onClick={() => {
                    onOpen();
                    onDrawerClose();
                  }}
                >
                  CONTACT
                </Button>
                {/* </Link> */}

                {/* <Flex w="100%" justify="space-between" align="center">
                  <Link href="3">LOGOUT</Link>
                  <FaAngleRight />
                </Flex> */}
              </Flex>
              <Flex direction="column" mt="auto">
                <Divider />
                <Flex
                  justify="space-between"
                  align="center"
                  px="10px"
                  pt="1rem"
                  pb=".5rem"
                >
                  <Flex align="center" gap="1rem">
                    {isLoggedIn ? (
                      <Link href="" onClick={onDrawerClose}>
                        <ProfileButtonMobile />
                      </Link>
                    ) : (
                      // <Link href="">
                      <Button
                        onClick={() => {
                          setLoginOpen(true);
                          console.log("open login", loginOpen);
                        }}
                        variant="drawerButton"
                      >
                        LOGIN
                      </Button>
                      // </Link>
                    )}
                  </Flex>
                  {colorMode === "dark" ? (
                    <Button variant="link" onClick={toggleColorTheme}>
                      <SunIcon />
                    </Button>
                  ) : (
                    <Button variant="link" onClick={toggleColorTheme}>
                      <FaMoon
                        color={"#946BDE"}
                        size={20}
                        className="res-theme-icon"
                      />
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <LoginButtonMobile closeDrawer={onDrawerClose} />
    </>
  );
};

export default Navbar;
