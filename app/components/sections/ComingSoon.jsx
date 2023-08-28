import { HStack, Heading, VStack } from "@chakra-ui/react";
import FeatureCard from "./../ui/FeatureCard";

const ComingSoon = (props) => {
  return (
    <VStack spacing={8} p={8} bgColor="#282c34">
      <Heading color="#946bde">Coming Soon</Heading>
      <HStack
        justifyContent="center"
        align="center"
        flexWrap="wrap"
        width="100%"
        spacing={8}
      >
        <FeatureCard
          title="Test"
          release="Next Release"
          bodyText="Blah Blah Blah"
        />
        <FeatureCard
          title="Test"
          release="Next Release"
          bodyText="Blah Blah Blah"
        />
        <FeatureCard
          title="Test"
          release="Next Release"
          bodyText="Blah Blah Blah"
        />
      </HStack>
    </VStack>
  );
};

export default ComingSoon;
