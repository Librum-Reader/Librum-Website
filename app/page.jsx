"use client";
import Image from "next/image";
import Showcase from "./components/sections/Showcase";
import Features from "./components/sections/Features";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Showcase />
      <Features />
    </>
  );
}
