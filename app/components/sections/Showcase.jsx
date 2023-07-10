"use client";
import "../../globals.css";
import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import Lottie from "lottie-web";
import { useContext, useEffect, useRef } from "react";
import Features from "./Features";

const Showcase = () => {
	const container = useRef(null);

	useEffect(() => {
		Lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("./reading.json"),
		});
	}, []);

	return (
		<Flex direction="column" align="center">
			<Flex align="center" maxW="1300px">
				<Box>
					<Heading as="h1" mb="2rem">
						A Simple and Free E-Book Reader
					</Heading>
					<Text mb="2rem">
						A clean and simple way to read your books on any device and build
						your own online library
					</Text>
					<Flex direction="column" gap="1.5rem">
						<Button w="250px" alignSelf="flex-start">
							Download
						</Button>
						<Button w="250px" alignSelf="flex-start">
							GitHub
						</Button>
					</Flex>
				</Box>
				<Box>
					<div className="image lg" ref={container}>
						{/* <img src={image1} alt="" /> */}
					</div>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Showcase;
