import React, { useEffect, useState } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

const DonationCards = ({ setAmount }) => {
  const options = ["€5", "€10", "€15"];

  const handleChange = (value) => {
    setAmount(value.slice(1));
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "€5",
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} w="100%">
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default DonationCards;
