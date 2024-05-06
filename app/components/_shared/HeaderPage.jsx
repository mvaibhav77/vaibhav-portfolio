import { Box, Heading } from "@radix-ui/themes";
import React from "react";
import { Breadcrumb, DownArrow } from "./Breadcrumb";
import { useHover } from "../../context/MouseContext";
import { useMediaQuery } from "react-responsive";

const HeaderPage = () => {
  const { onCursorIn, onCursorOut } = useHover();
  const isTab = useMediaQuery({ maxWidth: 1300 });
  const isMobile = useMediaQuery({ maxWidth: 720 });

  return (
    <Box className="relative top-[-130px] md:top-[-100px] lg:top-[-200px] left-0 w-screen h-screen ">
      <Heading
        className={`absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ${
          isMobile ? "!text-3xl" : isTab ? "!text-[8vw]" : "!text-[8.5vw]"
        }`}
        onMouseOver={onCursorIn}
        onMouseOut={onCursorOut}
      >
        Projects
      </Heading>

      <Breadcrumb />

      <DownArrow />
    </Box>
  );
};

export default HeaderPage;
