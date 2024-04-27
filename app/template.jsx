"use client";

import { motion } from "framer-motion";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = 1000; // 1 seconds
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, delay);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {!mounted ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="!mx-auto h-full"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
