"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 720 });

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: isNavbarOpen ? "fixed" : "relative",
        backgroundColor: isNavbarOpen ? "var(--my-dark)" : "",
      }}
      className="p-12 pb-4 !z-50 "
    >
      <Box className="logo !z-50">
        <Heading weight={"bold"} as="h3">
          <span className="text-gray-400">Vaibhav </span>Shukla
        </Heading>
      </Box>

      <Box className="navbar-menu">
        {isMobile ? (
          <Button
            variant="ghost"
            size={"4"}
            className="navbar-toggle cursor-pointer block"
            onClick={handleNavbarToggle}
          >
            {/* Change icon based on navbar state */}
            {isNavbarOpen ? (
              <AiOutlineClose size={"36"} />
            ) : (
              <AiOutlineMenu size={"36"} />
            )}
          </Button>
        ) : (
          <Flex direction={"row"} gap={"8"} className={`navbar-items `}>
            <Button
              variant="ghost"
              weight={"bold"}
              className="navbar-item !text-gray-500 !text-base"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base"
            >
              Contact
            </Button>
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
            isNavbarOpen ? "fixed top-24 right-0" : "hidden"
          } w-full shadow-lg z-50 `}
        >
          <Flex direction={"column"} className={`navbar-items`}>
            <Button
              variant="soft"
              className="navbar-item !text-gray-200 !text-base !py-8 !bg-secondary"
            >
              Home
            </Button>
            <Button
              variant="soft"
              className="navbar-item !text-gray-200 !text-base !py-8 !bg-secondary"
            >
              About
            </Button>
            <Button
              variant="soft"
              className="navbar-item !text-gray-200 !text-base !py-8 !bg-secondary"
            >
              Projects
            </Button>
            <Button
              variant="soft"
              className="navbar-item !text-gray-200 !text-base !py-8 !bg-secondary "
            >
              Contact
            </Button>
          </Flex>
        </motion.Box>
      )}
    </Box>
  );
};
