import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Section from "../../Section";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <Section className=" projects mx-auto lg:!px-56" id="about-section">
      <Box className="relative md:mx-[40px] lg:mx-[40px] mx-4">
        {/* Header */}
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            gap={"5"}
          >
            <Heading as="h2" size={"6"} color="purple">
              Projects
            </Heading>
            <Heading as="h3" size={"9"}>
              Selected <Text className="text-[var(--gray-9)]">Projects</Text>
            </Heading>
          </Flex>
        </Flex>

        {/* Selected Projects */}
        <ProjectsCarousel />
      </Box>
    </Section>
  );
};

export default Projects;
