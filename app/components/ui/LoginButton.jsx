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
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const LoginButton = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);

	const handleEmail = (event) => setEmail(event.target.value);
	const handlePassword = (event) => setPassword(event.target.value);

	const handleLogin = () => {
		console.log("Logging in....");
	};
	return (
		<>
			<Button onClick={onOpen} colorScheme="teal" variant="solid">
				LOGIN
			</Button>
			<Modal
				isCentered
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Login</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input
								value={email}
								onChange={handleEmail}
								ref={initialRef}
								placeholder="Email"
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Password</FormLabel>
							<Input
								value={password}
								onChange={handlePassword}
								placeholder="Password"
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={handleLogin} colorScheme="teal" mr={3}>
							Log In
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginButton;
