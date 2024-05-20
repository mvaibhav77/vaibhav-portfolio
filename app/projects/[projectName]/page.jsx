"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { projects } from "../../data/projects";
import Section from "../../components/Section";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import marked from "marked"; // Import for Markdown processing
import { useHover } from "../../context/MouseContext";

export default function Page({ params }) {
  const { onCursorIn, OnCursorOut } = useHover();

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
            <Flex
              direction={"row"}
              wrap={{ md: "nowrap", initial: "wrap" }}
              align={"center"}
              gap={"6"}
              justify={"center"}
            >
              {/* Github */}
              {project.github && (
                <Badge size={"3"} color="yellow">
                  <Link
                    href={`https://github.com/${project.github}`}
                    target="_blank"
                    className="flex flex-row items-center gap-2 text-xl"
                  >
                    Github <FaLink />
                  </Link>
                </Badge>
              )}

              {/* Site */}
              {project.site && (
                <Badge size={"3"} color="yellow">
                  <Link
                    href={`${project.site}`}
                    target="_blank"
                    className="flex flex-row items-center gap-2 text-xl"
                  >
                    Demo <FaLink />
                  </Link>
                </Badge>
              )}

              {/* Status */}
              {project.status && (
                <Badge
                  size={"3"}
                  className="!text-xl"
                  color={project.status === "Completed" ? "green" : "orange"}
                >
                  {project.status}
                </Badge>
              )}
            </Flex>
          </Box>

          {/* Description */}
          <Box
            className="project-description md:w-5/6 w-full"
            onMouseOver={onCursorIn}
            onMouseOut={OnCursorOut}
          >
            {/* write description here */}
            <Text
              as="p"
              className="md:text-2xl lg:text-3xl text-lg p-2 md:pl-4 text-center"
            >
              {project.description}
            </Text>
          </Box>
        </Flex>
      </Section>
    </Box>
  );
}
