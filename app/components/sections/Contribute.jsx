import { VStack, Button, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Contribute = (props) => {
  return (
    <VStack spacing={8} color="whitesmoke" bgColor="#282c34" p={8}>
      <Text>Text inviting to contribute and more and more and more text</Text>
      <Link
        textDecoration="none"
        as={NextLink}
        href="https://github.com/Librum-Reader/Librum"
      >
        <Button
          width="16rem"
          _hover={{
            bgColor: "whiteAlpha.100",
          }}
          bgColor="red.600"
          color="whitesmoke"
        >
          Contribute
        </Button>
      </Link>
    </VStack>
  );
};

export default Contribute;
