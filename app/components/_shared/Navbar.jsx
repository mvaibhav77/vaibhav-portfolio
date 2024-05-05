"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../../context/MouseContext";
import Link from "next/link";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const isTab = useMediaQuery({ maxWidth: 1300 });
  const { onCursorIn, onCursorOut } = useHover();

  const handleNavbarToggle = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    // { name: "Projects", link: "/" },
    { name: "Contact", link: "/#" },
  ];

  return (
    mounted && (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: isMobile ? "fixed" : "relative",
          top: "0",
          overflow: "hidden",
          backgroundColor:
            isNavbarOpen || isScrolled ? "var(--gray-2)" : "transparent",
        }}
        className={`pb-4 !z-50 transition-colors duration-500 ease-out ${
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
            <Link href={"/"} area-label="Logo Button">
              <Text className="text-gray-400">Vaibhav </Text>Shukla
            </Link>
          </Heading>
        </Box>

        {/* navbar */}
        <Box className="navbar-menu">
          {isMobile ? (
            <Button
              variant="ghost"
              size={"4"}
              aria-label={
                isNavbarOpen ? "Close navigation menu" : "Open navigation menu"
              }
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
              className={`navbar-items`}
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              {links.map((item, index) => (
                <Link
                  name={item.name}
                  key={index}
                  href={item.link}
                  aria-label={`${item.name} route link`}
                  weight={"bold"}
                  className="navbar-item !text-gray-200 !text-base !cursor-none hover:bg-transparent py-4 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </Flex>
          )}
        </Box>

        {isMobile && (
          <motion.Box
            initial={{ opacity: 0, height: 0 }}
            animate={
              isNavbarOpen
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isNavbarOpen ? "fixed top-[4.2rem] right-0" : "hidden"
            } w-full shadow-lg z-50 `}
          >
            <Flex direction={"column"} gap={0} className={`navbar-items`}>
              {links.map((item, index) => (
                <Link
                  name={item.name}
                  key={index}
                  href={item.link}
                  aria-label={`${item.name} route link`}
                  onClick={() => setIsNavbarOpen(false)}
                  className="navbar-item text-center rounded-none !text-gray-200 !text-base !py-6 !bg-[var(--gray-2)] !cursor-none"
                >
                  {item.name}
                </Link>
              ))}
            </Flex>
          </motion.Box>
        )}
      </Box>
    )
  );
};
