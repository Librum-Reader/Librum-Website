import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";

const ThemeToggle = (props) => {
  const path = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      backgroundColor="grey"
      width="2.8rem"
      height="2.8rem"
      background="white"
      right={145}
      bottom={4}
      borderRadius="0 0 31px 0"
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? (
        <FaSun color={path == "/" ? "white" : "white"} size={20} />
      ) : (
        <FaMoon color={path == "/" ? "white" : "#946BDE"} size={20} />
      )}
    </Button>
  );
};

export default ThemeToggle;
