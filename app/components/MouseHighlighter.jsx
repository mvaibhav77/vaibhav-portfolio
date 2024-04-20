"use client";
import { useState } from "react";

const MouseHighlighter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log("mouse move");
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-10"
      onMouseMove={handleMouseMove}
    >
      <div
        className="highlighter"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      ></div>
    </div>
  );
};

export default MouseHighlighter;
