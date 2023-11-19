import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  forwardRef,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaLinux, FaCopy } from "react-icons/fa";
import { AiOutlineWindows, AiFillApple, AiFillFileZip } from "react-icons/ai";
import { SiFlatpak } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

const DownloadButton = () => {
  const [os, setOS] = useState("");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      let detectedOS = "";

      if (userAgent.indexOf("Win") !== -1) {
        detectedOS = "Windows";
      } else if (userAgent.indexOf("Mac") !== -1) {
        detectedOS = "MacOS";
      } else if (userAgent.indexOf("Linux") !== -1) {
        detectedOS = "Linux";
      } else if (userAgent.indexOf("Android") !== -1) {
        detectedOS = "Android";
      } else if (
        userAgent.indexOf("iOS") !== -1 ||
        userAgent.indexOf("iPhone") !== -1 ||
        userAgent.indexOf("iPad") !== -1
      ) {
        detectedOS = "iOS";
      } else {
        detectedOS = "Unknown";
      }

      setOS(detectedOS);
    };

    detectOS();
  }, []);

  async function copyTextToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        "flatpak install flathub com.librumreader.librum"
      );
    } else {
      return document.execCommand(
        "copy",
        true,
        "flatpak install flathub com.librumreader.librum"
      );
    }
  }

  const CustomButton = forwardRef((props, ref) => {
    return (
      <Button variant="primary" w="250px" ref={ref}>
        Flatpak
      </Button>
    );
  });

  if (os === "Windows") {
    return (
      <a
        href="https://librumstorageaccount.blob.core.windows.net/releases/librum-windows-0.10.2-installer.exe"
        target="#"
      >
        <Button
          w="250px"
          variant="primary"
          leftIcon={<AiOutlineWindows size={18} />}
        >
          Download
        </Button>
      </a>
    );
  } else if (os === "Linux") {
    return (
      <Menu>
        <MenuButton>
          <Button
            variant="primary"
            w="250px"
            leftIcon={<FaLinux size={18} />}
            rightIcon={<FiChevronDown size={18} className="download-chevron" />}
          >
            Download
          </Button>
        </MenuButton>
        <MenuList w="250px">
          <MenuItem
            onClick={() =>
              window.open(
                "https://flathub.org/apps/com.librumreader.librum",
                "_blank"
              )
            }
          >
            {<SiFlatpak />}
            <Text ml="1rem">Flatpak</Text>
          </MenuItem>
          <MenuItem onClick={() => window.open("", "_blank")}>
            {<AiFillFileZip />}
            <Text ml="1rem">tar.gz (Coming Soon)</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else if (os === "MacOS") {
    return (
      <Button w="250px" variant="primary" leftIcon={<AiFillApple size={18} />}>
        Coming soon
      </Button>
    );
  } else {
    return (
      <Button w="250px" variant="primary">
        Download
      </Button>
    );
  }
};

export default DownloadButton;
