"use client";
import Image from "next/image";
import Showcase from "./components/sections/Showcase";
import Features from "./components/sections/Features";
import Foss from "./components/sections/Foss";
import ComingSoon from "./components/sections/ComingSoon";
import Contribute from "./components/sections/Contribute";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Showcase />
      <Features />
      <Foss />
      {/* <ComingSoon /> */}
      {/* <Contribute /> */}
    </>
  );
}
