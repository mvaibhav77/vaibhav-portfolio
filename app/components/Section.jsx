import { Box } from "@radix-ui/themes";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Section = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75; // Adjust threshold as needed
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeInOut" },
      });
    }
  }, [isVisible, controls]);

  return (
    <Box
      className={
        `relative bg-[var(--gray-1)] lg:px-[20%] lg:py-[70px]  md:px-[50px] py-[50px] px-[30px] z-10 ` +
        className
      }
    >
      <motion.div
        ref={sectionRef}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default Section;
