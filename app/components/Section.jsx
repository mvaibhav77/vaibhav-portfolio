import { Box } from "@radix-ui/themes";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Section = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isVisible, controls]);

  return (
    <Box
      id={id}
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
