import React, { useEffect, useState } from "react";
import { HStack, useRadioGroup, Button, Tooltip } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

const DonationFreq = () => {
  const options = ["One time", "Monthly"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "donationFreq",
    defaultValue: "One time",
  });

  const group = getRootProps();

  return (
    <HStack {...group} w="100%">
      <Button w="full" px={5} py={3} variant="primary">
        One time
      </Button>
      <Tooltip hasArrow label="Coming soon!" bg="#946bde" textColor="white">
        <Button
          w="full"
          px={5}
          py={3}
          variant="secondary"
          isDisabled
          leftIcon={<AiFillHeart />}
        >
          Monthly
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default DonationFreq;
