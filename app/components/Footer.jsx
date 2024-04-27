"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useHover } from "../context/MouseContext";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Footer = () => {
  const { onCursorIn, onCursorOut } = useHover();
  const isTab = useMediaQuery({ maxWidth: 1300 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Box
        className={`footer ${
          isTab
            ? "relative bg-[var(--gray-2)] py-[50px] top-[25vh] left-0 h-auto right-auto"
            : "fixed bottom-[50px] left-[50px] right-[50px] height-[1px] z-100 p-0"
        }`}
      >
        {/* email and number */}
        <Flex
          direction={"column"}
          gap={"2"}
          className={` ${
            isTab
              ? "relative block mb-8 text-center"
              : "absolute left-0 bottom-0"
          }`}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          <Text size="3" weight="light" color="#bbb">
            E:{" "}
            <Link
              href={"mailto:shukla.vaibhav1077@gmail.com"}
              className="hover:underline"
            >
              shukla.vaibhav1077@gmail.com
            </Link>
          </Text>
          <Text size="3" weight="light">
            T:{" "}
            <Link href={"tel:+917987744456"} className="hover:underline">
              +91 7987 744 456
            </Link>
          </Text>
        </Flex>

        {/* socials */}
        <Box
          className={
            isTab
              ? "relative left-0 top-0 text-center"
              : "absolute right-0 bottom-0 w-[24px]"
          }
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          {/* label */}
          <Text
            size="3"
            weight="light"
            color="#bbb"
            className={
              isTab
                ? "hidden"
                : `label absolute text-right bottom-[100%] right-0 pr-[75px] h-[24px] whitespace-nowrap origin-[100%_0%] rotate-90 after:content-[''] after:bg-secondary after:absolute after:right-0 after:top-[50%] after:w-[50px] after:h-[1px] after:bg-[#fff]`
            }
          >
            Follow me
          </Text>
          {/* social icons */}
          <Box
            className={`socials ${
              isTab &&
              "!flex flex-row gap-4 align-center justify-center h-fit-content"
            }`}
          >
            <Link
              href={"https://www.linkedin.com/in/mvaibhav77"}
              target="_blank"
              className="flex flex-col items-center justify-center my-4 w-[24px] h-[24px] rounded-full overflow-hidden"
            >
              <FaLinkedinIn color="white" className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={"https://www.twitter.com/im_vaibhav77"}
              target="_blank"
              className="flex flex-col items-center justify-center my-4 w-[24px] h-[24px] rounded-full overflow-hidden"
            >
              <FaTwitter color="white" className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href={"https://www.github.com/mvaibhav77"}
              target="_blank"
              className="flex flex-col items-center justify-center my-4 w-[24px] h-[24px] rounded-full overflow-hidden"
            >
              <FaGithub color="white" className="h-[18px] w-[18px]" />
            </Link>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default Footer;
