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
} from "@chakra-ui/react";
import Link from "next/link";
import { FaLinux, FaCopy } from "react-icons/fa";
import { AiOutlineWindows } from "react-icons/ai";
import { SiFlatpak } from "react-icons/si";

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
      <Link href="https://librumblobstorage.blob.core.windows.net/binaries/windows_installer_0-6-3.exe">
        <Button
          w="250px"
          variant="primary"
          leftIcon={<AiOutlineWindows size={18} />}
        >
          Download
        </Button>
      </Link>
    );
  } else if (os === "Linux") {
    return (
      <Menu>
        <MenuButton>
          <Button variant="primary" w="250px" leftIcon={<FaLinux size={18} />}>
            Download
          </Button>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              window.open(
                "https://librumstorageaccount.blob.core.windows.net/releases/0-6-3-linux-binaries.tar.gz",
                "_blank"
              )
            }
          >
            tar.gz
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open(
                "https://flathub.org/apps/com.librumreader.librum",
                "_blank"
              )
            }
          >
            Flatpak
          </MenuItem>
        </MenuList>
      </Menu>
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
