"use client";

const { Flex, useColorMode } = require("@chakra-ui/react");
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Container = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const path = usePathname();

  if (colorMode === "light") {
    return (
      <Flex
        direction="column"
        className={
          path == "/" ? "nav-container-gradient" : "nav-container-light"
        }
        height="100vh"
      >
        {props.children}
      </Flex>
    );
  } else {
    return (
      <Flex
        direction="column"
        className={path == "/" ? "nav-container-gradient" : "nav-container"}
        height="100vh"
      >
        {props.children}
      </Flex>
    );
  }
};

export default Container;
