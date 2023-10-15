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
    const validDonation = new RegExp("^(?:[1-9][0-9\\s]*)?$");

    if (validDonation.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  return (
    <Flex>
      <InputGroup mb="1rem">
        <InputLeftElement
          //   children="€"
          pointerEvents="none"
          fontWeight="semibold"
          display="flex"
          mx="auto"
          h="100%"
          w="100%"
          justifyContent="flex-start"
          pl="1rem"
          fontSize="xl"
        >
          €
        </InputLeftElement>
        <NumberInput
          value={amount}
          type="number"
          w="100%"
          borderColor="#946bde"
        >
          <NumberInputField
            pl="2rem"
            onChange={handleChange}
            h="50px"
            fontSize="xl"
          />
        </NumberInput>
      </InputGroup>
    </Flex>
  );
};

export default CustomDonation;
