import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "next-sanity";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const client = createClient({
  projectId: "46vwrypj",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: false,
});

const SanityImage = ({ asset, size, alignment, wrap }) => {
  const imageProps = useNextSanityImage(client, asset);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  if (!imageProps) return null;

  let width;

  if (size === "small") {
    height = "400px";
  } else if (size === "medium") {
    width = "600px";
  } else if (size === "large") {
    width = "800px";
  } else if (size === "auto") {
    width = "100%";
  }

  const source = imageProps?.src;
  // + height;

  // if (wrap === "wrap-left") {
  //   return (
  //     <img
  //       // {...imageProps}
  //       src={source}
  //       // layout="responsive"
  //       // // sizes="(max-width: 800px) 100vw, 800px"
  //       // width={200}
  //       // height={200}
  //       alt="Blog image"
  //       style={{ float: "right", margin: ".5rem" }}
  //     />
  //   );
  // } else if (wrap === "wrap-right") {
  //   return (
  //     <img
  //       // {...imageProps}
  //       src={source}
  //       // layout="responsive"
  //       // // sizes="(max-width: 800px) 100vw, 800px"
  //       // width={200}
  //       // height={200}
  //       alt="Blog image"
  //       style={{ float: "right", margin: ".5rem" }}
  //     />
  //   );
  // } else {
  //   return (
  //     <Flex w="100%" justify={alignment}>
  //       <img
  //         // {...imageProps}
  //         src={source}
  //         // layout="responsive"
  //         // // sizes="(max-width: 800px) 100vw, 800px"
  //         // width={200}
  //         // height={200}
  //         alt="Blog image"
  //       />
  //     </Flex>
  //   );
  // }

  return (
    <Flex w="100%" justify={alignment}>
      <Flex w={windowWidth < 400 ? "100%" : width}>
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
    </Flex>
  );
};

export default SanityImage;
