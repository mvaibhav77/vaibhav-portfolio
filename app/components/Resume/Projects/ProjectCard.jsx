import { Card, Box, Heading, Flex, Badge, IconButton } from "@radix-ui/themes";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useHover } from "../../../context/MouseContext";
import { GoArrowUpRight } from "react-icons/go";

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
        cursor: "pointer !important",
      }}
      key={key}
      className="cardContainer !flex items-center justify-center sticky"
      onMouseOver={onCursorIn}
      onMouseOut={onCursorOut}
    >
      <Card
        size="1"
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
        <Flex justify={"between"} align={"center"} className="my-4">
          <Heading
            as="h3"
            size={{ md: "8", initial: "6" }}
            weight={"medium"}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            {project.title}
          </Heading>
          <IconButton size={"4"} className="rounded-full !bg-white">
            <GoArrowUpRight className="text-3xl" color="black" />
          </IconButton>
        </Flex>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
