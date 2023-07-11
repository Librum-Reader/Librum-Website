"use client";
import { Flex, Image, Text, Heading, VStack } from "@chakra-ui/react";

const Alternate = () => {
	const data = [
		{
			title: "Available Everywhere",
			text: "Read on any device, anytime, anywhere. Librum installs in just two clicks, and is designed to run on any device and operating system, no matter if its your phone, tablet, PC, or laptop",
			image: "/features/devices.png",
		},
		{
			title: "Simple",
			text: "Your books are automatically synced to the cloud, so you can access them at any time through a simple and modern interface",
			image: "/features/reading.png",
		},
		{
			title: "Powerful and Secure",
			text: "Librum offers lightning-fast performance, small file-size, quick updates, the ability to customize the application to make it look and feel as you want, and many tools to boost your productivity",
			image: "/features/offline.png",
		},
		{
			title: "Free Books",
			text: "Explore our free online store with access to over 60,000 books. Download books in just 2 clicks and start enjoying your reading journey right away",
			image: "/features/books.png",
		},
	];

	return (
		<>
			{data.map((block, index) => {
				return (
					<Flex
						mx="auto"
						gap="10rem"
						direction={index % 2 === 0 ? "row" : "row-reverse"}
						align="center"
						key={index}
					>
						<Image
							src={block.image}
							className="features-img"
							alt="Illustration"
						/>
						<VStack spacing={6} align="flex-start">
							<Heading color="#946bde">{block.title}</Heading>
							<Text color="white">{block.text}</Text>
						</VStack>
					</Flex>
				);
			})}
		</>
	);
};

export default Alternate;
