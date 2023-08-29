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

  const showOS = () => {
    console.log(os);
  };

  return (
    <Link
      href={
        os === "Windows"
          ? "https://librumblobstorage.blob.core.windows.net/binaries/windows_installer_0-6-3.exe"
          : "download for mac"
      }
    >
      <Button w="250px" variant="primary" onClick={showOS}>
        {os === "Windows" ? "Download for Windows" : "Download"}
      </Button>
    </Link>
  );
};

export default DownloadButton;
