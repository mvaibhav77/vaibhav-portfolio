"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../context/MouseContext";
import Link from "next/link";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const isTab = useMediaQuery({ maxWidth: 1300 });
  // const [isMobile, setIsMobile] = useState(false);
  const { onCursorIn, onCursorOut } = useHover();

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("resize", () => {
  //       if (window.innerWidth > 720) {
  //         setIsMobile(false);
  //         // setIsNavbarOpen(false);
  //       } else {
  //         setIsMobile(true);
  //       }
  //     });
  //   }
  // }, [window.innerWidth]);

  return (
    mounted && (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: isNavbarOpen ? "#2c1b4795" : "transparent",
        }}
        className={`pb-4 !z-50 ${
          isMobile ? "p-4 px-5" : isTab ? "p-4 px-8" : "p-12"
        }`}
      >
        {/* logo */}
        <Box
          className="logo !z-50"
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          <Heading weight={"bold"} as="h1" size={isMobile ? "4" : "5"}>
            <Text className="text-gray-500">Vaibhav </Text>Shukla
          </Heading>
        </Box>

        {/* navbar */}
        <Box className="navbar-menu">
          {isMobile ? (
            <Button
              variant="ghost"
              size={"4"}
              className="navbar-toggle cursor-pointer block hover:bg-transparent"
              onClick={handleNavbarToggle}
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              {/* Change icon based on navbar state */}
              {isNavbarOpen ? (
                <AiOutlineClose color="white" size={"36"} />
              ) : (
                <AiOutlineMenu color="white" size={"36"} />
              )}
            </Button>
          ) : (
            <Flex
              direction={"row"}
              gap={"8"}
              className={`navbar-items `}
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              <Link
                href={"/"}
                weight={"bold"}
                className="navbar-item !text-gray-500 !text-base !cursor-none hover:bg-transparent py-4 hover:underline"
              >
                Home
              </Link>
              <Link
                href={"/resume"}
                // variant="ghost"
                className="navbar-item !text-gray-500 !text-base !cursor-none hover:bg-transparent py-4 hover:underline"
              >
                Resume
              </Link>
              <Link
                href={"/"}
                className="navbar-item !text-gray-500 !text-base !cursor-none hover:bg-transparent py-4 hover:underline"
              >
                Projects
              </Link>
              <Link
                href={"/"}
                className="navbar-item !text-gray-500 !text-base !cursor-none hover:bg-transparent py-4 hover:underline"
              >
                Contact
              </Link>
            </Flex>
          )}
        </Box>

        {isMobile && (
          <motion.Box
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${
              isNavbarOpen ? "fixed top-[4.25rem] right-0" : "hidden"
            } w-full shadow-lg z-50 `}
          >
            <Flex direction={"column"} gap={0} className={`navbar-items`}>
              <Button
                variant="soft"
                className="navbar-item !border-0 !text-gray-200 !text-base !py-8 !bg-[#2c1b4795] !cursor-none "
                onMouseOver={onCursorIn}
                onMouseOut={onCursorOut}
              >
                Home
              </Button>
              <Button
                variant="soft"
                className="navbar-item rounded-none !text-gray-200 !text-base !py-8 !bg-[#2c1b4795] !cursor-none"
                onMouseOver={onCursorIn}
                onMouseOut={onCursorOut}
              >
                About
              </Button>
              <Button
                variant="soft"
                className="navbar-item !border-0 !text-gray-200 !text-base !py-8 !bg-[#2c1b4795] !cursor-none"
                onMouseOver={onCursorIn}
                onMouseOut={onCursorOut}
              >
                Projects
              </Button>
              <Button
                variant="soft"
                className="navbar-item !border-0 !text-gray-200 !text-base !py-8 !bg-[#2c1b4795] !cursor-none"
                onMouseOver={onCursorIn}
                onMouseOut={onCursorOut}
              >
                Contact
              </Button>
            </Flex>
          </motion.Box>
        )}
      </Box>
    )
  );
};
