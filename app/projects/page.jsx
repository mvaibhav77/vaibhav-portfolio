"use client";

import { Box } from "@radix-ui/themes";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../context/MouseContext";
import HeaderPage from "../components/_shared/HeaderPage";

export default function Projects() {
  // const isTab = useMediaQuery({ maxWidth: 1300 });
  // const isMobile = useMediaQuery({ maxWidth: 720 });
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box className="main-content !z-30 hideScrollBar">
      {/* header */}
      <HeaderPage />

      {/* Project Cards */}
    </Box>
  );
}
