"use client";

import { Box, Heading } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../context/MouseContext";
import { FaArrowDown, FaChevronDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Breadcrumb, DownArrow } from "../components/Breadcrumb";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Resume() {
  const isTab = useMediaQuery({ maxWidth: 1300 });
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box className="main-content !z-30 hideScrollBar h-full">
      {/* header */}
      <Box className="relative top-[-120px] left-0 w-screen h-[60vh] ">
        <Heading
          className={`absolute top-[80%] left-[50%] translate-x-[-50%] ${
            isMobile ? "!text-3xl" : isTab ? "!text-[8vw]" : "!text-[8.5vw]"
          }`}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          Resume
        </Heading>

        {/* breadcrumbs */}
        {/* <Box className="absolute bottom-[-55%] left-[25%] text-lg text-gray-500 text-center">
          <TypeAnimation
            sequence={["Home / Resume", 2000]}
            speed={15}
            cursor={false}
          />
        </Box> */}
        <Breadcrumb />
        {/* down arrow */}
        {/* <Box className="absolute bottom-[-55%] left-[75%] text-center">
          <FaChevronDown className="text-gray-500 text-2xl animate-bounce" />
        </Box> */}
        <DownArrow />
      </Box>
    </Box>
  );
}
