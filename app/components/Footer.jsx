import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box className="footer fixed bottom-[50px] left-[50px] right-[50px]  height-[1px] z-100 p-0">
      {/* email and number */}
      <Flex direction={"column"} gap={"2"} className="absolute left-0 bottom-0">
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
          T: +91 7987 744 456
        </Text>
      </Flex>

      {/* socials */}
      <Box className="absolute right-0 bottom-0 w-[24px]">
        {/* label */}
        <Text
          size="3"
          weight="light"
          color="#bbb"
          className="label absolute text-right bottom-[100%] right-0 pr-[75px] h-[24px] whitespace-nowrap origin-[100%_0%] rotate-90 after:content-[''] after:absolute after:right-0 after:top-[50%] after:w-[50px] after:h-[1px] after:bg-[#fff]"
        >
          Follow me
        </Text>
        {/* socail icons */}
        <Box>
          <Link
            href={"https://www.linkedin.com/in/vaibhav-shukla-1077/"}
            className="block w-[24px] h-[24px] bg-[#fff] rounded-[50%] overflow-hidden"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              height={24}
              width={24}
              className="object-cover"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
