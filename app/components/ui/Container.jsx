"use client";

import { Flex, useColorMode } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Container = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const path = usePathname();

  useEffect(() => {
    console.log(colorMode);
  });

  return (
    <Flex
      direction="column"
      className={
        path == "/"
          ? "nav-container-gradient"
          : colorMode === "light"
          ? "nav-container-light"
          : "nav-container-dark"
      }
      height="100%"
    >
      {props.children}
    </Flex>
  );
};

export default Container;
