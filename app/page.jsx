"use client";
import Image from "next/image";
import { Box, Heading, Strong } from "@radix-ui/themes";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "./context/MouseContext";
import About from "./components/Resume/About/About";
import Experience from "./components/Resume/Experience/Experience";
import SelectedProjects from "./components/Resume/Projects/Projects";

export default function Home() {
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box className="relative top-[-20vh] main-content mt-0 mx-auto bg-[var(--gray-2)]">
      {/* Hero */}
      <Box className="hero relative w-full lg:w-[90%] lg:px-0 px-4 overflow-x-hidden  h-screen top-0 mx-auto !z-30">
        {/* Image */}
        <Box
          className={`relative logo bg-center bg-contain bg-no-repeat !z-30 image-container top-[12vh] left-[-10px] !w-[100vw] !h-[65vh] md:top-[200px] md:left-[20px] md:!w-[640px] md:!h-[560px] lg:-top-[0] lg:left-[3vw] lg:!w-[47vw] lg:!h-[78vh] !overflow-hidden
        `}
        >
          <Image
            src={"/images/me_transparent.png"}
            layout="fill"
            objectFit="cover"
            alt="profile photo "
            className="!z-30 bg-center !overflow-hidden bg-[var(--gray-4)]"
            priority
          />
        </Box>

        {/* Heading */}
        <Box
          className={`absolute top-[80vh] md:w-[360px] md:ml-[15px] md:mt-[115px] md:left-[50%] md:top-[60vh] md:bottom-auto lg:left-[45vw] lg:top-[65vh] lg:max-w-[560px]`}
        >
          <Heading
            as="h1"
            weight={"light"}
            size={{ md: "6", initial: "4" }}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            {`Hello, I'm`}{" "}
            <Strong className="bg-primary">Vaibhav Shukla</Strong>
            {`, a Full Stack Web Developer Based in Pune`}
          </Heading>
        </Box>

        {/* Typing animation */}
        <div
          className={`absolute top-auto left-0 !bottom-[30px] text-[25px] pl-[50px] md:left-[10%] md:text-[60px] md:!bottom-[20px] lg:left-[20%] lg:text-[90px] lg:!bottom-[30px] `}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          <TypeAnimation
            sequence={["I develop cool websites", 2000, "I love ReactJS", 1000]}
            speed={15}
            repeat={Infinity}
          />
        </div>
      </Box>

      {/* Resume */}
      <Box className="resume">
        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <SelectedProjects />
      </Box>
    </Box>
  );
}
