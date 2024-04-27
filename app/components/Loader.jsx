"use client";

import { Box } from "@radix-ui/themes";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { Rubik_Mono_One } from "next/font/google";

const jersey = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Loader() {
  const text = "EXPLORING NEW HORIZONS. ";
  const characters = text.split("");

  const radius = 150;
  const fontSize = "30px";
  const letterSpacing = 14.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.35, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.35, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        ease: "linear",
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 6, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <Box className="fixed h-screen w-screen bg-black top-0 left-0 z-[1000]">
      <Box className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <motion.div
          ref={scope}
          className="circle"
          style={{ width: radius * 2 }}
        >
          <p aria-label={text} />
          <p aria-hidden="true" className={`text ${jersey.className}`}>
            {characters.map((ch, i) => (
              <motion.span
                key={i}
                className={`letter letter-${i}`}
                style={{
                  transformOrigin: `0 ${radius}px`,
                  transform: `rotate(${i * letterSpacing}deg)`,
                  fontSize,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </Box>
    </Box>
  );
}
