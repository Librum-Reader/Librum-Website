import { Card, CardBody, VStack, Heading, Tag, Text } from "@chakra-ui/react";

const FeatureCard = (props) => {
  return (
    <Card w="32rem">
      <CardBody>
        <VStack align="start" spacing={2}>
          <Heading size="md">{props.title}</Heading>
          <Tag bgColor="purple.200" color="purple.800">
            {props.release}
          </Tag>
          <Text>{props.bodyText}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
