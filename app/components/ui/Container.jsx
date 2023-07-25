"use client";

const { Flex, useColorMode } = require("@chakra-ui/react");
import { usePathname } from "next/navigation";

const Container = (props) => {
  const path = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      className={path == "/" ? "nav-container-gradient" : "nav-container"}
      height="100vh"
    >
      {props.children}
    </Flex>
  );
};

export default Container;
