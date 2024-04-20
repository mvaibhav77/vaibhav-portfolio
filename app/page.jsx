"use client";

import Image from "next/image";
import { Box, Heading, Strong, Text } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const isTab = useMediaQuery({ maxWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 720 });

  return (
    <Box className="main-content !z-30">
      {/* Image */}
      <Box
        className={`relative logo image-container bg-center bg-contain bg-no-repeat !z-30 ${
          isMobile
            ? "top-[-12vh] left-[-30px] !w-[110vw] !h-[62vh]"
            : isTab
            ? "top-[20px] left-[-50px] !w-[640px] !h-[560px]"
            : "-top-[13.3vh] left-[1vw] !w-[50vw] !h-[80vh]"
        }`}
      >
        <Image
          src={"/images/me_diff.jpeg"}
          layout="fill"
          objectFit="cover"
          alt="profile photo"
          className="!z-30"
        />
      </Box>
      {/* Heading */}
      <Box
        className={`absolute ${
          isMobile
            ? "top-[67vh] "
            : isTab
            ? "w-[360px] ml-[15px] mt-[115px] left-[50%] top-[50vh] bottom-auto"
            : "left-[49vw] top-[60vh] max-w-[560px]"
        }`}
      >
        <Heading as="h1" weight={"light"} size={"6"}>
          {`Hello, I'm`} <Strong className="bg-primary">Vaibhav Shukla</Strong>
          {`, a Full Stack Web Developer Based in Pune`}
        </Heading>
      </Box>
      {/* Typing animation */}
      {/* <Heading
        as="h2"
        weight={"bold"}
        className={`typing-master text-left w-fit ${
          isMobile ? "" : isTab ? "" : "!text-[90px] bottom-[50px] left-[20%]"
        }`}
      >
        I develop web applications...
      </Heading> */}
    </Box>
  );
}
