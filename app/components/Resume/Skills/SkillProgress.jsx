import { Box, Flex, Heading, Progress, Text } from "@radix-ui/themes";
import { useRef } from "react";

const SkillProgress = ({ title, progress }) => {
  const progressRef = useRef(null);

  const levelColor = {
    0: "red",
    30: "orange",
    60: "green",
    80: "purple",
  };

  const getColor = (progress) => {
    if (progress >= 90) {
      return levelColor[80];
    } else if (progress >= 60) {
      return levelColor[60];
    } else if (progress >= 30) {
      return levelColor[30];
    } else {
      return levelColor[0];
    }
  };

  const getLevel = (progress) => {
    if (progress >= 90) {
      return "Professional";
    } else if (progress >= 60) {
      return "Advanced";
    } else if (progress >= 30) {
      return "Intermediate";
    } else {
      return "Beginner";
    }
  };

  const handleHover = () => {};
  return (
    <Flex
      direction="column"
      gap={{ xs: "2", initial: "7" }}
      className="skill-progress"
    >
      {/* header */}
      <Heading as="h5" size={{ md: "3", initial: "2" }} weight={"medium"}>
        {title}
      </Heading>
      {/* progress bar */}
      <Box className="relative" onMouseOver={handleHover}>
        <Progress
          ref={progressRef}
          value={progress}
          max={100}
          variant="soft"
          size={1}
          color={getColor(progress)}
          radius="none"
        />
        <Text
          className="percentage absolute top-[-28px]"
          size={{ sm: "3", initial: "2" }}
          color={getColor(progress)}
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)",
          }}
        >
          {getLevel(progress)}
        </Text>
      </Box>
    </Flex>
  );
};

export default SkillProgress;
