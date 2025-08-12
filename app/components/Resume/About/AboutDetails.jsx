import {
  Badge,
  Box,
  Button,
  Code,
  DataList,
  Flex,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { useHover } from "../../../context/MouseContext";

const Details = () => {
  const { onCursorIn, onCursorOut } = useHover();

  const handleDownloadResume = () => {
    // download resume
    window.open(
      process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf",
    );
  };

  return (
    <Box
      className="desc text-center ml-0 md:text-left lg:text-left md:ml-[145px] lg:ml-[195px]"
      id="about"
    >
      {/* bio */}
      <Text
        className="mt-0 break-words"
        onMouseOver={onCursorIn}
        onMouseOut={onCursorOut}
      >
        Hello! I’m Vaibhav Shukla. I am a full stack developer with a passion
        for building beautiful and functional user interfaces. I have rich
        experience in React, Next.js, Node.js and more.
      </Text>

      <Box className="details mt-[25px] w-fit mx-auto md:mx-0 lg:mx-0">
        <Flex
          direction={{ md: "row", initial: "column" } || "column"}
          mx={{ xs: "0", initial: "auto" }}
          maxWidth={{ xs: "full", initial: "250px" }}
          gap={{ xs: "7", initial: "4" }}
          className="pl-8 md:pl-0 lg:pl-0"
        >
          {/* First column */}
          <DataList.Root
            size={{ md: "2", lg: "3" } || "2"}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            <DataList.Item>
              <DataList.Label minWidth="88px">Name</DataList.Label>
              <DataList.Value>Vaibhav Shukla</DataList.Value>
            </DataList.Item>

            <DataList.Item>
              <DataList.Label minWidth="88px">GitHub</DataList.Label>
              <DataList.Value>
                <Link href={"https://github.com/mvaibhav77"}>
                  <Code variant="ghost" className="hover:underline">
                    mvaibhav77
                  </Code>
                </Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Phone</DataList.Label>
              <DataList.Value>
                <Link
                  href="tel:917987744456"
                  aria-label="Phone Number"
                  className="hover:underline"
                >
                  +91 7987744456
                </Link>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>

          {/* Second column */}
          <DataList.Root
            size={{ md: "2", lg: "3" } || "2"}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Freelance</DataList.Label>
              <DataList.Value>
                <Badge color="green" variant="soft" radius="full" size={"3"}>
                  Available
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email </DataList.Label>
              <DataList.Value>
                <Link
                  variant="ghost"
                  href="mailto:shukla.vaibhav1077@gmail.com"
                  aria-label="Email Address"
                  className="hover:underline overflow-hidden"
                >
                  shukla.vaibhav1077@gmail.com
                </Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">LinkedIn</DataList.Label>
              <DataList.Value>
                <Link
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  href="https://linkedin.com/in/mvaibhav77"
                  className="hover:underline"
                >
                  <Badge color="blue" variant="soft" radius="full">
                    mvaibhav77
                  </Badge>{" "}
                </Link>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Flex>

        {/* download resume */}
        <Button
          variant="outline"
          color="purple"
          size={"3"}
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
          aria-label="Download Resume"
          className="!mt-6 hover:scale-105 hover:!bg-primary hover:!text-white !rounded-none"
          onClick={handleDownloadResume}
        >
          View Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Details;
