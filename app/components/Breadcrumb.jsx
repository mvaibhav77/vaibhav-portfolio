"use client";

import { Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "../context/MouseContext";
import Link from "next/link";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box
      className="absolute bottom-[-55%] md:bottom-[-45%] lg:bottom-[-45%] md:left-[20%] lg:left-[25%] left-[30px] text-lg text-gray-500 text-center"
      onMouseOver={onCursorIn}
      onMouseOut={onCursorOut}
    >
      <Link href="/">
        <TypeAnimation
          sequence={[
            `Home / ${
              pathname.slice(1, 2).toUpperCase() +
              pathname.slice(2).toLowerCase()
            }`,
          ]}
          speed={5}
          cursor={false}
        />
      </Link>
    </Box>
  );
};

export const DownArrow = () => {
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box
      className="absolute bottom-[-55%] md:bottom-[-45%] lg:bottom-[-45%] right-[40px] md:left-[80%] lg:left-[75%] text-center"
      onMouseOver={onCursorIn}
      onMouseOut={onCursorOut}
      onClick={() => {
        const nextSection = document.getElementById("about-section");
        nextSection?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <FaChevronDown className="text-white text-2xl animate-bounce" />
    </Box>
  );
};
