"use client";

import { Box } from "@radix-ui/themes";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useHover } from "../../context/MouseContext";
import { useMediaQuery } from "react-responsive";

const MouseHighlighter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const isMobile = useMediaQuery({ maxWidth: 720 });

  const { isHovered } = useHover();

  const [mounted, setMounted] = useState(false);
  const throttleRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCursorVariant(isHovered ? "hover" : "default");
  }, [isHovered]);

  const handleMouseMove = useCallback((e) => {
    if (throttleRef.current) clearTimeout(throttleRef.current);

    throttleRef.current = setTimeout(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 8); // ~120fps throttle for smooth animation
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleRef.current) clearTimeout(throttleRef.current);
    };
  }, [handleMouseMove]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
    hover: {
      // default
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      transition: {
        type: "smooth",
        duration: 0,
      },
      // for text
      backgroundColor: "#ddd",
      height: 60,
      width: 60,
      mixBlendMode: "difference",
    },
  };

  return (
    mounted && (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className={`${
          isMobile && "hidden"
        } fixed top-0 left-0 bg-primary opacity-90 h-[32px] w-[32px] rounded-full pointer-events-none z-[5000]`}
      ></motion.div>
    )
  );
};

export default MouseHighlighter;
