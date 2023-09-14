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

const SanityImage = ({ asset, size, alignment, wrap }) => {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  let height;

  if (size === "small") {
    height = "&h=200";
  } else if (size === "medium") {
    height = "&h=400";
  } else if (size === "large") {
    height = "&h=600";
  }

  const source = imageProps?.src + height;
  console.log(imageProps?.wrap);
  if (wrap === "wrap-left") {
    return (
      <img
        // {...imageProps}
        src={source}
        // layout="responsive"
        // // sizes="(max-width: 800px) 100vw, 800px"
        // width={200}
        // height={200}
        alt="Blog image"
        style={{ float: "right", margin: ".5rem" }}
      />
    );
  } else if (wrap === "wrap-right") {
    return (
      <img
        // {...imageProps}
        src={source}
        // layout="responsive"
        // // sizes="(max-width: 800px) 100vw, 800px"
        // width={200}
        // height={200}
        alt="Blog image"
        style={{ float: "right", margin: ".5rem" }}
      />
    );
  } else {
    return (
      <Flex w="100%" justify={alignment}>
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
  }
};

export default SanityImage;
