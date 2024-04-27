"use client";
import Image from "next/image";
import { Box, Heading, Strong, Text } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "./context/MouseContext";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export default function Home() {
  const isTab = useMediaQuery({ maxWidth: 1300 });
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box className="main-content w-[90%] mx-auto !z-30">
      {/* Image */}
      <Box
        className={`relative logo  bg-center bg-contain bg-no-repeat !z-30  ${
          isMobile
            ? "image-container-big top-[-12vh] left-[-20px] !w-[100vw] !h-[69vh]"
            : isTab
            ? "image-container top-[20px] left-[-50px] !w-[640px] !h-[560px]"
            : "image-container -top-[15.3vh] left-[1vw] !w-[47vw] !h-[78vh]"
        }`}
      >
        <Image
          src={"/images/me_blacknwhite.png"}
          layout="fill"
          objectFit="cover"
          alt="profile photo "
          className="!z-30 bg-center !overflow-hidden"
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
        <Heading
          as="h1"
          weight={"light"}
          size={isMobile ? "5" : "6"}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          {`Hello, I'm`} <Strong className="bg-primary">Vaibhav Shukla</Strong>
          {`, a Full Stack Web Developer Based in Pune`}
        </Heading>
      </Box>

      {/* Typing animation */}
      <div
        className={`absolute bottom-[50px] top-auto ${
          isMobile
            ? "left-0 !bottom-[140px] text-[25px] pl-[50px] "
            : isTab
            ? " left-[50px] text-[60px] !bottom-[100px]"
            : " left-[20%] text-[90px] !bottom-[30px] "
        }`}
        onMouseOver={onCursorIn}
        onMouseOut={onCursorOut}
      >
        <TypeAnimation
          sequence={["I develop cool websites", 2000, "I love ReactJS", 1000]}
          speed={15}
          repeat={Infinity}
        />
      </div>
    </Box>
  );
}
