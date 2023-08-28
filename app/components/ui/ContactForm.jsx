import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { SP } from "next/dist/shared/lib/utils";
import { useState } from "react";

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

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setiIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your feedback was received, and we will be in touch.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormControl>
          <VStack spacing={2}>
            <FormLabel fontSize="md" color="white">
              Name
            </FormLabel>
            <Input
              bgColor="whitesmoke"
              value={name}
              onChange={handleName}
              alignSelf="flex-start"
            />
            <FormLabel fontSize="md" color="white">
              Email address
            </FormLabel>
            <Input
              bgColor="whitesmoke"
              value={email}
              onChange={handleEmail}
              type="email"
              alignSelf="flex-start"
            />
            <FormLabel fontSize="md" color="white">
              Message
            </FormLabel>
            <Textarea
              bgColor="whitesmoke"
              value={message}
              onChange={handleMessage}
              placeholder="I need help with..."
              h="200px"
            />
            <Button mt={4} type="submit" isLoading={isLoading}>
              Submit Message
            </Button>
          </VStack>
        </FormControl>
      </form>
    </>
  );
};

export default ContactForm;
