"use client";

import { Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "../../context/MouseContext";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box
      className="absolute bottom-[40px] md:bottom-[70px] lg:bottom-[70px] md:left-[20%] lg:left-[25%] left-[30px] text-lg text-gray-500 text-center"
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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Box
      className="absolute bottom-[40px] md:bottom-[70px] lg:bottom-[60px] right-[40px] md:left-[80%] lg:left-[85%] text-center"
      onMouseOver={onCursorIn}
      onMouseOut={onCursorOut}
      onClick={() => {
        window.scrollBy({
          top: isMobile ? window.innerHeight - 20 : window.innerHeight + 80,
          behavior: "smooth",
        });
      }}
    >
      <FaChevronDown className="text-white text-2xl animate-bounce" />
    </Box>
  );
};
