"use client";

import { Badge, Box, Flex, Heading } from "@radix-ui/themes";
import { projects } from "../../data/projects";
import Section from "../../components/Section";
import Image from "next/image";

export default function Page({ params }) {
  const project = projects.find(
    (project) => project.link === `/projects/${params.projectName}`
  );
  return (
    <Box className="project-main mx-auto">
      <Section className="lg:!pt-0 lg:-mt-[3vh]">
        <Flex direction={"column"} align={"center"} gap={"7"}>
          {/* Header */}
          <Box className="project-header">
            <Flex direction={"column"} align={"center"} gap={"5"}>
              {/* tags */}
              <Flex direction={"row"} align={"center"} gap={"5"}>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    size={{ md: "3", initial: "2" }}
                    color="purple"
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>

              {/* title */}
              <Flex direction={"column"} align={"center"}>
                <Heading
                  as="h2"
                  size={{ md: "9", initial: "6" }}
                  color="white"
                  weight={"regular"}
                  align={"center"}
                >
                  {project.title}
                </Heading>
              </Flex>
            </Flex>
          </Box>

          {/* Image */}
          <Box className="relative project-image w-full lg:w-[90%] h-[60vw] md:h-[50vw] lg:h-[65vh]">
            <Image src={project.image} fill={true} alt={project.title} />
          </Box>

          {/* Info cards */}
          <Box className="project-cards">
            <Flex direction={'row'} wrap={{md:"nowrap", initial:"wrap"}} align={'center'} justify={'center'}>
               {/* Links */}
               
            </Flex>
          </Box>

          {/* Description  */}
        </Flex>
      </Section>
    </Box>
  );
}
