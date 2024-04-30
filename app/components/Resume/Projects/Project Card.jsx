import { Inset, Card, Text, Box, Heading, Flex, Badge } from "@radix-ui/themes";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../../../context/MouseContext";

const ProjectCard = ({
  i,
  key,
  progress,
  range,
  targetScale,
  project,
  totalProjects,
}) => {
  const { onCursorIn, onCursorOut } = useHover();

  const isLargeScreen = useMediaQuery({ minWidth: 720 });

  const scale = useTransform(progress, range, [1, targetScale]);

  const topOffset = 35;

  const topPosition = (i + 1) * topOffset;

  return (
    <motion.div
      style={{
        scale: scale,
        zIndex: totalProjects + i,
        top: isLargeScreen ? topPosition : "auto",
        marginBottom: isLargeScreen ? "10vh" : 40,
      }}
      key={key}
      className="cardContainer !flex items-center justify-center sticky"
    >
      <Card
        size="2"
        className="!flex flex-col relative top-[-5%] w-[1100px] md:h-[500px] lg:h-[700px] h-[500px] rounded-3xl !p-4 md:!p-6 lg:!p-6"
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
        <Flex
          direction={"row"}
          wrap={"wrap"}
          gap={{ md: "5", initial: "3" }}
          className="mt-6"
        >
          {project.tags.map((tag, index) => (
            <Badge
              size={{ md: "3", initial: "2" }}
              variant="surface"
              key={index}
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              {tag}
            </Badge>
          ))}
        </Flex>
        <Heading
          as="h3"
          size={{ md: "8", initial: "6" }}
          weight={"medium"}
          className="my-4"
          onMouseOver={onCursorIn}
          onMouseOut={onCursorOut}
        >
          {project.title}
        </Heading>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
