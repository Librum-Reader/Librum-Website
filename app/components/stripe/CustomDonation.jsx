import React from "react";
import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";

const CustomDonation = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Flex>
      <InputGroup mb="1rem">
        <InputLeftElement
          children="€"
          pointerEvents="none"
          fontWeight="semibold"
        />
        <Input value={amount} onChange={handleChange} />
      </InputGroup>
    </Flex>
  );
};

export default CustomDonation;
