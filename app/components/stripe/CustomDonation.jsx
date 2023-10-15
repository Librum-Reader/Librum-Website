import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

const CustomDonation = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Flex>
      <InputGroup mb="1rem">
        <InputLeftElement
          //   children="€"
          pointerEvents="none"
          fontWeight="semibold"
        >
          €
        </InputLeftElement>
        <NumberInput value={amount} type="number" w="100%">
          <NumberInputField pl="2rem" onChange={handleChange} />
        </NumberInput>
      </InputGroup>
    </Flex>
  );
};

export default CustomDonation;
