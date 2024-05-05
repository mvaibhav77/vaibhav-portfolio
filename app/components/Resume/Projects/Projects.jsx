import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Section from "../../Section";
import ProjectsCarousel from "./ProjectsCarousel";

const SelectedProjects = () => {
  return (
    <Section className=" projects mx-auto lg:!px-56" id="projects-section">
      <Box className="relative  lg:mx-[40px] md:mx-4 ">
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
            <Heading as="h3" size={{ md: "9", initial: "7" }}>
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

export default SelectedProjects;
