import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "next-sanity";
import Image from "next/image";

const client = createClient({
  projectId: "46vwrypj",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: false,
});

const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

export default SanityImage;
