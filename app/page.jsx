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
    <Box className="main-content mx-auto ">
      <Box className="hero relative w-[90%] h-screen md:h-screen lg:h-auto mx-auto !z-30">
        {/* Image */}
        <Box
          className={`relative logo bg-center bg-contain bg-no-repeat !z-30 image-container top-[-12vh] left-[-20px] !w-[100vw] !h-[65vh] md:top-[20px] md:left-[-50px] md:!w-[640px] md:!h-[560px] lg:-top-[19.5vh] lg:left-[1vw] lg:!w-[47vw] lg:!h-[78vh]
        `}
        >
          <Image
            src={"/images/me_blacknwhite.png"}
            layout="fill"
            objectFit="cover"
            alt="profile photo "
            className="!z-30 bg-center !overflow-hidden"
            priority
          />
        </Box>

        {/* Heading */}
        <Box
          className={`absolute top-[60vh] md:w-[360px] md:ml-[15px] md:mt-[115px] md:left-[50%] md:top-[40vh] md:bottom-auto lg:left-[45vw] lg:top-[45vh] lg:max-w-[560px]`}
        >
          <Heading
            as="h1"
            weight={"light"}
            size={"6"}
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
          className={`absolute top-auto left-0 !bottom-[140px] text-[25px] pl-[50px] md:left-[50px] md:text-[60px] md:!bottom-[200px] lg:left-[20%] lg:text-[90px] lg:!bottom-[30px] `}
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
