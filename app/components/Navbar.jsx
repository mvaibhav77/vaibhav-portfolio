"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 680 });

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <Flex justify={"between"} align={"center"} className="bg-transparent p-12">
      <Box className="logo">
        <Heading weight={"regular"} as="h3">
          <span className="text-primary">Vaibhav </span>Shukla
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
          } w-full shadow-lg z-50`}
        >
          <Flex direction={"column"} className={`navbar-items`}>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base !py-4"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base !py-4"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base !py-4"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="navbar-item !text-gray-500 !text-base !py-4 "
            >
              Contact
            </Button>
          </Flex>
        </motion.Box>
      )}
    </Flex>
  );
};
