"use client";

import React, { createContext, useContext, useState } from "react";

const HoverContext = createContext();

export const useHover = () => useContext(HoverContext);

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onCursorIn = () => {
    setIsHovered(true);
  };

  const onCursorOut = () => {
    setIsHovered(false);
  };

  return (
    <HoverContext.Provider
      value={{ isHovered, setIsHovered, onCursorIn, onCursorOut }}
    >
      {children}
    </HoverContext.Provider>
  );
};
