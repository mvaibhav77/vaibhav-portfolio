import { Card, Box, Heading, Flex, Badge, IconButton } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import { useHover } from "../../context/MouseContext";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ key, project, onClick }) => {
  const { onCursorIn, onCursorOut } = useHover();
  return (
    <motion.div
      key={key}
      className="cardContainer !flex items-center justify-center w-[100%]"
      onMouseOver={onCursorIn}
      onMouseOut={onCursorOut}
      onClick={() => (window.location.href = project.link)}
    >
      <Card
        size="1"
        className="!flex flex-col relative !w-full rounded-3xl !p-4 md:!p-6 lg:!p-6 md:h-auto h-[55vh]"
      >
        <Box className="relative w-full h-[40vh]">
          <Image
            src={project.thumbnail || "/images/me_diff.png"}
            alt="Bold typography"
            fill={true}
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
          {project.tags.slice(0, 4).map((tag, index) => (
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
