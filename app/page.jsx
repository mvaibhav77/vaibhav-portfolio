"use client";
import Image from "next/image";
import { Box, Heading, Strong } from "@radix-ui/themes";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "./context/MouseContext";
import About from "./components/Resume/About/About";
import Experience from "./components/Resume/Experience/Experience";
import SelectedProjects from "./components/Resume/Projects/Projects";
import Skills from "./components/Resume/Skills/Skills";
import { DownArrow } from "./components/_shared/Breadcrumb";

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
            src={"/images/me-color.png"}
            layout="fill"
            objectFit="cover"
            alt="profile photo "
            className="!z-30 bg-bottom !overflow-hidden bg-[var(--gray-4)]"
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
            I design and build powerful web experiences. <br />
            <Strong className="bg-primary">Vaibhav Shukla</Strong>, Full Stack
            Developer
          </Heading>
        </Box>

        {/* Typing animation */}
        <div
          className={`absolute top-auto left-0 !bottom-[30px] text-[25px] pl-[50px] md:left-[10%] md:text-[60px] md:!bottom-[20px] lg:left-[20%] lg:text-[90px] lg:!bottom-[30px] `}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          <TypeAnimation
            sequence={[
              "I Code Magic",
              2000,
              "Building Web Apps",
              2000,
              "Let's Connect 🚀",
              2000,
            ]}
            speed={15}
            repeat={Infinity}
          />
        </div>

        <DownArrow />
      </Box>

      {/* breakcrumbs */}

      {/* Resume */}
      <Box className="resume">
        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <SelectedProjects />
      </Box>
    </Box>
  );
}
