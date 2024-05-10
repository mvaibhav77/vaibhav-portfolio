import { Flex, Heading, Popover, Text, Tooltip } from "@radix-ui/themes";
import Section from "../../Section";
import SkillProgress from "./SkillProgress";
import { AiFillInfoCircle } from "react-icons/ai";
import { useHover } from "../../../context/MouseContext";
import { useMediaQuery } from "react-responsive";
import { progress } from "framer-motion";

const basicSkills = [
  {
    title: "Frontend Development",
    skills: [
      {
        title: "Implementing UI/UX designs",
        progress: 95,
      },
      {
        title: "Responsive Web design",
        progress: 85,
      },
      {
        title: "Animations and Transitions",
        progress: 50,
      },
      {
        title: "State and Context Management",
        progress: 65,
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        title: "Server-side programming",
        progress: 80,
      },
      {
        title: "RESTful APIs",
        progress: 95,
      },
      {
        title: "DBMS (MongoDB, PostgreSQL, etc.)",
        progress: 65,
      },
      {
        title: "Authentication and Authorization",
        progress: 60,
      },
    ],
  },
  {
    title: "Coding Skills",
    skills: [
      {
        title: "HTML/CSS",
        progress: 95,
      },
      {
        title: "JavaScript/Typescript",
        progress: 85,
      },
      {
        title: "React.js",
        progress: 80,
      },
      {
        title: "Next.js",
        progress: 50,
      },
      {
        title: "Node.js",
        progress: 80,
      },
    ],
  },
];

const SelectedProjects = () => {
  const { onCursorIn, onCursorOut } = useHover();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 520px)" });
  return (
    <Section className=" skills mx-auto" id="skills-section">
      {/* Technical Skills */}
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

        {/* Main Skills */}
        <Flex direction={"column"} gap={"6"} className="main-skills">
          {basicSkills.map(({ title, skills }, i) => (
            <Flex direction={"column"} gap={"5"} key={i}>
              <Heading
                as="h4"
                size={{ md: "7", initial: "5" }}
                color="purple"
                className="flex items-center gap-3"
                onMouseOver={onCursorIn}
                onMouseOut={onCursorOut}
              >
                {title}{" "}
                {isSmallScreen ? (
                  <Popover.Root>
                    <Popover.Trigger>
                      <Text
                        size={"1"}
                        radius="full"
                        className="!text-lg text-[var(--gray-9)]"
                      >
                        <AiFillInfoCircle color="white" />
                      </Text>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white shadow rounded p-2 w-[300px]">
                      Skill levels are a self-assessment based on experience and
                      projects. Your interpretation may vary.
                    </Popover.Content>
                  </Popover.Root>
                ) : (
                  <Tooltip
                    content={
                      "Skill levels are a self-assessment based on experience and projects. Your interpretation may vary."
                    }
                  >
                    <Text
                      size={"1"}
                      radius="full"
                      className="!text-lg text-[var(--gray-9)] !cursor-default"
                    >
                      <AiFillInfoCircle
                        color="white"
                        className="!cursor-default"
                      />
                    </Text>
                  </Tooltip>
                )}
              </Heading>

              <Flex
                direction={"column"}
                gap="6"
                className="border-[1px] border-[#ffffff1a] p-8"
              >
                {skills.map(({ title: skillTitle, progress }, i) => (
                  <SkillProgress
                    title={skillTitle}
                    progress={progress}
                    key={i}
                  />
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default SelectedProjects;
