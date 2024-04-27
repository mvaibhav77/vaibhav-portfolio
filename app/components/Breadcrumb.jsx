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
      className="absolute bottom-[-55%] left-[25%] text-lg text-gray-500 text-center"
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
            2000,
          ]}
          speed={10}
          cursor={false}
        />
      </Link>
    </Box>
  );
};

export const DownArrow = () => {
  return (
    <Box className="absolute bottom-[-55%] left-[75%] text-center">
      <FaChevronDown className="text-gray-500 text-2xl animate-bounce" />
    </Box>
  );
};
