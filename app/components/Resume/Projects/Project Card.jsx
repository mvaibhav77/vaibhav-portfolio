import { Inset, Card, Text, Box, Heading, Flex, Badge } from "@radix-ui/themes";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({
  i,
  key,
  progress,
  range,
  targetScale,
  project,
  totalProjects,
}) => {
  const isLargeScreen = useMediaQuery({ minWidth: 720 });

  const scale = useTransform(progress, range, [1, targetScale]);

  const topOffset = 50;

  const topPosition = (i + 1) * topOffset;

  return (
    <motion.div
      style={{
        scale: scale,
        zIndex: totalProjects + i,
        top: isLargeScreen ? topPosition : "auto",
        marginBottom: isLargeScreen ? "10vh" : 50,
      }}
      key={key}
      className="cardContainer !flex items-center justify-center sticky"
    >
      <Card
        size="2"
        className="!flex flex-col relative top-[-5%] w-[1100px] h-[700px] rounded-3xl !p-6"
      >
        <Box clip="padding-box" side="top" className="relative w-full h-full ">
          <Image
            src={project.image || "/images/me_diff.png"}
            alt="Bold typography"
            // width={1000}
            // height={540}
            fill="fill"
            style={{
              objectFit: "cover",
              background: "center",
              borderRadius: "var(--radius-2)",
            }}
          />
        </Box>
        <Flex direction={"row"} gap={"5"} className="mt-6">
          {project.tags.map((tag, index) => (
            <Badge size={"3"} variant="surface" key={index}>
              {tag}
            </Badge>
          ))}
        </Flex>
        <Heading as="h3" size="8" weight={"medium"} className="my-4">
          {project.title}
        </Heading>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
