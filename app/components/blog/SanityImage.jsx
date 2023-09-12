import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "next-sanity";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

const client = createClient({
  projectId: "46vwrypj",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: false,
});

const SanityImage = ({ asset, size }) => {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  let source;
  if (size === "small") {
    source = imageProps?.src + "&h=200";
  } else if (size === "medium") {
    source = imageProps?.src + "&h=400";
  } else if (size === "large") {
    source = imageProps?.src + "&h=600";
  }

  return (
    <Flex w="100%" justify="center">
      <img
        // {...imageProps}
        src={source}
        // layout="responsive"
        // // sizes="(max-width: 800px) 100vw, 800px"
        // width={200}
        // height={200}
        alt="Blog image"
      />
    </Flex>
  );
};

export default SanityImage;
