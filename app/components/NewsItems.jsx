"use client";
import {
	Flex,
	Heading,
	Image,
	Text,
	Button,
	VStack,
	Card,
	CardBody,
} from "@chakra-ui/react";

const NewsItems = (props) => {
	return (
		<Card bgColor="gray.700" borderRadius="3xl">
			<CardBody>
				<Flex maxW="1300px" gap="4rem" align="center">
					<Image
						alt="news item illustration"
						src="/news/news.svg"
						className="news-image"
					/>
					<VStack direction="column" spacing={2} align="flex-start">
						<Heading as="h3" size="lg" color="#946bde">
							{props.title}
						</Heading>
						<Text color="red" fontWeight="bold">
							{props.date}
						</Text>
						<Text color="white">{props.body}</Text>
						<Button mt={2} alignSelf="self-start">
							Read More
						</Button>
					</VStack>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default NewsItems;
