"use client";

const { Flex } = require("@chakra-ui/react");
import { usePathname } from "next/navigation";

const Container = (props) => {
  const path = usePathname();

  return (
    <Flex
      direction="column"
      bgGradient={
        path == "/"
          ? "linear(to-br, #9494ee, #8f98ee, #8c9ded,#89a0ec,#87a4ea,#7f9add,#7691d0,#6e87c3,#5d6fa8,#4c578e,#3b4175,#2b2c5c)"
          : "linear(to-br, #282c34, #282c34)"
      }
      height="100%"
    >
      {props.children}
    </Flex>
  );
};

export default Container;
