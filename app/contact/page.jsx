"use client";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Form from "../components/ui/Form";
const Contact = () => {
	return (
		<Flex background="#282c34" align="center" direction="column" h="100vh">
			<Box>
				<Heading size="2xl" color="#946bde" mt="10rem" mb="2rem">
					Need Help?
				</Heading>
				<Text fontSize="xl" color="white" mb="2rem">
					Reach us through the form below, or at help@librumreader.com if you
					have any questions, we are 100% responsive and reply quickly!
				</Text>
				<Form />
			</Box>
		</Flex>
	);
};

export default Contact;
