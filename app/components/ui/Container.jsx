const { Flex } = require("@chakra-ui/react");

const Container = (props) => {
	return (
		<Flex
			direction="column"
			bgGradient="linear(to-br, #9494ee, #8f98ee, #8c9ded,#89a0ec,#87a4ea,#7f9add,#7691d0,#6e87c3,#5d6fa8,#4c578e,#3b4175,#2b2c5c)"
			height="100%"
		>
			{props.children}
		</Flex>
	);
};

export default Container;
