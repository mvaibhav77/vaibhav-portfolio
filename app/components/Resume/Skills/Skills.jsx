import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Section from "../../Section";
import { useHover } from "../../../context/MouseContext";
import { skills } from "../../../data/skills";

const toId = (category) =>
  `skills-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const Skills = () => {
  const { onCursorIn, onCursorOut } = useHover();
  return (
    <Section
      className=" skills mx-auto"
      id="skills-section"
      role="region"
      aria-label="Technical Skills"
    >
      {/* Header */}
      <Flex direction={"column"} align={"center"}>
        <Flex direction={"column"} align={"center"} gap={"5"}>
          <Heading
            as="h2"
            size={"6"}
            color="purple"
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            Skills
          </Heading>
          <Heading
            as="h3"
            size={{ md: "9", initial: "7" }}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            Technical <Text className="text-[var(--gray-9)]">Skills</Text>
          </Heading>
          <Text
            as="p"
            size={{ md: "4", initial: "3" }}
            align={"center"}
            className="text-[var(--gray-11)] max-w-[520px]"
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            The languages, frameworks and tools I use across my work and
            projects.
          </Text>
        </Flex>
      </Flex>

      {/* Skill Groups */}
      <Grid columns={{ md: "2", initial: "1" }} gap={"6"} className="mt-16">
        {skills.map(({ category, items }, i) => (
          <Box
            key={category}
            gridColumn={
              skills.length % 2 === 1 && i === skills.length - 1
                ? { md: "span 2" }
                : undefined
            }
            className="border-[1px] border-[#ffffff1a] p-5 md:p-6 lg:p-8"
          >
            <Heading
              as="h4"
              id={toId(category)}
              size={{ md: "6", initial: "5" }}
              color="purple"
              className="!mb-5"
              onMouseOver={onCursorIn}
              onMouseOut={onCursorOut}
            >
              {category}
            </Heading>

            <ul
              aria-labelledby={toId(category)}
              className="flex flex-wrap gap-2.5"
            >
              {items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group inline-flex items-center gap-2 rounded-full border-[1px] border-[#ffffff1a] bg-[var(--gray-2)] px-3 py-1.5 text-sm text-[var(--gray-12)] transition-colors duration-200 hover:border-[var(--accent-8)] hover:bg-[var(--accent-3)] hover:text-[var(--accent-12)]"
                  onMouseOver={onCursorIn}
                  onMouseOut={onCursorOut}
                >
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      focusable="false"
                      className="shrink-0 text-[1.05em] text-[var(--gray-11)] transition-colors duration-200 group-hover:text-[var(--accent-11)]"
                    />
                  )}
                  {name}
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
