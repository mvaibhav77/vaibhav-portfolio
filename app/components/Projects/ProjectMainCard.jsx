"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import Section from "../Section";

const ProjectMainCard = () => {
  return (
    <Section className={" bg-[var(--gray-1)]"}>
      <Flex direction={"column"} gap={"9"} className="relative">
        {/* Header */}
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            gap={"5"}
          >
            <Heading as="h2" size={"6"} color="purple">
              Skills
            </Heading>
            <Heading as="h3" size={{ md: "9", initial: "7" }}>
              Technical <Text className="text-[var(--gray-9)]">Skills</Text>
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ProjectMainCard;
