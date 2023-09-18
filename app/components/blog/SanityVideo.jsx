import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "next-sanity";
import { buildFileUrl } from "@sanity/asset-utils";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const client = createClient({
  projectId: "46vwrypj",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: true,
});

const SanityVideo = ({ asset, size, alignment }) => {
  // const videoProps = useNextSanityImage(client, asset);
  // if (!imageProps) return null;
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_id == '${assetId}'] {
      url
    }`
      )
      .then((data) => {
        setVideoUrl(data[0].url);
      })
      .catch((error) => {
        console.error("Error fetching asset data:", error);
      });
  }, []);

  const assetId = asset?._ref;

  return <ReactPlayer url={videoUrl} controls={true} />;
};

export default SanityVideo;
