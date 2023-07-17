"use client";
import Image from "next/image";
import Showcase from "./components/sections/Showcase";
import Features from "./components/sections/Features";
import ComingSoon from "./components/sections/ComingSoon";

export default function Home() {
  return (
    <>
      <Showcase />
      <Features />
      <ComingSoon />
    </>
  );
}
