import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleName = (event) => setName(event.target.value);
	const handleEmail = (event) => setEmail(event.target.value);
	const handleMessage = (event) => setMessage(event.target.value);
	const handleSubmit = () =>
		console.log("Submitting...\n", name, email, message);
	return (
		<>
			<FormControl alignSelf="flex-start" onSubmit={handleSubmit}>
				<VStack spacing={2} align="flex-start">
					<FormLabel fontSize="xl" color="white">
						Name
					</FormLabel>
					<Input
						bgColor="whitesmoke"
						value={name}
						onChange={handleName}
						alignSelf="flex-start"
					/>
					<FormLabel fontSize="xl" color="white">
						Email address
					</FormLabel>
					<Input
						bgColor="whitesmoke"
						value={email}
						onChange={handleEmail}
						type="email"
						alignSelf="flex-start"
					/>
					<FormLabel fontSize="xl" color="white">
						Message
					</FormLabel>
					<Textarea
						bgColor="whitesmoke"
						value={message}
						onChange={handleMessage}
					/>
					<Button mt={4} type="submit">
						Submit
					</Button>
				</VStack>
			</FormControl>
		</>
	);
};

export default Form;
