"use client";
import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";
import NewsItems from "../components/ui/NewsItems";

const News = () => {
  return (
    <Flex background="#282c34" align="center" direction="column">
      <Box>
        <Heading size="2xl" color="#946bde" mt={24} mb={24}>
          News and Updates
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        <NewsItems
          title="Welcome to the Librum-Reader Blog"
          date="October 25, 2022"
          body=" Welcome to our blog page. Here you will find the latest news and
          updates for Librum-Reader. If you would like to share an article or
          announce an event you are organizing, feel free to contact us."
        />
        <NewsItems
          title="Launching of Librum Reader"
          date="October 23, 2022"
          body="So, as you can tell, the beta version of the website is live. Many more features are to come for this iteration. In the meanwhile, feel free to browse through our pages and download the latest version of Librum. Report any bugs or issues to us via our contact page which is up and running"
        />
      </VStack>
    </Flex>
  );
};

export default News;
