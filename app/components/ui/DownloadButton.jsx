import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

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

  if (os === "Windows") {
    return (
      <Link href="https://librumblobstorage.blob.core.windows.net/binaries/windows_installer_0-6-3.exe">
        <Button w="250px" variant="primary">
          Download for Windows
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href="">
        <Button w="250px" variant="primary">
          Download
        </Button>
      </Link>
    );
  }
};

export default DownloadButton;
