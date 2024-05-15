"use client";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useHover } from "../context/MouseContext";
import Section from "../components/Section";
import ProjectsGrid from "../components/Projects/ProjectsGrid";

export default function Projects() {
  const { onCursorIn, onCursorOut } = useHover();

  return (
    <Box className="main-content mx-auto">
      <Section className="!pt-0 lg:-mt-[5vh]">
        {/* Header */}
        <Flex direction={"column"} align={"start"}>
          <Flex direction={"column"} align={"start"} gap={"5"}>
            <Heading
              as="h2"
              size={"6"}
              color="purple"
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              Projects
            </Heading>
            <Heading
              as="h3"
              size={{ md: "9", initial: "7" }}
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
              className="!flex flex-col lg:gap-2"
            >
              Some of my
              <Text className="text-[var(--gray-9)]">Remarkable Projects</Text>
            </Heading>
          </Flex>
        </Flex>
        {/* Projects Grid */}
        <ProjectsGrid />
      </Section>
    </Box>
  );
}
