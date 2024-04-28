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
    <Box className="main-content !z-30 hideScrollBar h-[70vh] md:h-full">
      {/* header */}
      <Box className="relative top-[-120px] left-0 w-screen h-[60vh] ">
        <Heading
          className={`absolute top-[80%] md:top-[70%] lg:top-[70%] left-[50%] translate-x-[-50%] ${
            isMobile ? "!text-3xl" : isTab ? "!text-[8vw]" : "!text-[8.5vw]"
          }`}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          Resume
        </Heading>

        <Breadcrumb />

        <DownArrow />
      </Box>
    </Box>
  );
}
