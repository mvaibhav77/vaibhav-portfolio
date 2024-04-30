import {
  Badge,
  Box,
  Button,
  Code,
  DataList,
  Dialog,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import Section from "../../Section";
import Link from "next/link";
import { useHover } from "../../../context/MouseContext";
import { experience } from "../../../data/experience";

const Experience = () => {
  const { onCursorIn, onCursorOut } = useHover();
  return (
    <Section className=" experience mx-auto " id="experience-section">
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
            Work
          </Heading>
          <Heading
            as="h3"
            size={{ md: "9", initial: "7" }}
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            Valuable <Text className="text-[var(--gray-9)]">Experience</Text>
          </Heading>
        </Flex>
      </Flex>

      {/* Experience Cards */}
      <Grid columns={{ md: "2", initial: "1" }} gap={"8"} className="mt-16">
        {/* {experience.map((exp, i) => (
            <Box
              key={i}
              variant="ghost"
              className="border-[1px] border-[#ffffff1a] !rounded-none md:!p-6 lg:!py-6 lg:!px-8  !p-4"
            >
              <Flex align={"center"} justify={"between"}>
                <Heading
                  as="h4"
                  size={{ md: "6", initial: "5" }}
                  weight="bold"
                  color="purple"
                >
                  {exp.title}
                </Heading>

                <Text as="p" size={"4"} className="text-[var(--gray-9)]">
                  {exp.date}
                </Text>
              </Flex>
              <Flex align={"center"} justify={"between"}>
                <Text as="h5" size={{ md: "5", initial: "4" }} className="">
                  {exp.company}{" "}
                </Text>
              </Flex>
              <Text as="p" className="text-[var(--gray-9)]">
                {exp.location}
              </Text>
              <Box className="description mt-2">
                <ul key={i} className="!list-disc pl-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="!mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          ))} */}
        {experience.map((exp, i) => (
          <Box
            key={i}
            variant="ghost"
            className="relative border-[1px] border-[#ffffff1a] !rounded-none md:!pt-6 md:!px-6 lg:!pt-6 lg:!px-8 !p-4 !pb-20"
            onMouseOver={onCursorIn}
            onMouseOut={onCursorOut}
          >
            <Flex align={"center"} justify={"between"} gap={"4"}>
              <Heading
                as="h4"
                size={{ md: "7", initial: "6" }}
                weight="bold"
                color="purple"
              >
                {exp.title}
              </Heading>

              <Text
                as="p"
                size={{ md: "3", initial: "1" }}
                className="text-[var(--gray-9)]"
              >
                {exp.date}
              </Text>
            </Flex>

            <Heading as="h5" size={{ md: "5", initial: "4" }} className="!mt-2">
              {exp.company || "-"}{" "}
            </Heading>
            <Text as="p" className="text-[var(--gray-9)]">
              {exp.location}
            </Text>

            <Text as="p" size={"5"} className="tagLine mt-2">
              {exp.tagLine}
            </Text>
            <Box className="mt-4 absolute bottom-6 md:left-6 lg:left-8">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button
                    variant="soft"
                    aria-label={`View more about ${exp.title}`}
                    size={"3"}
                  >
                    Know More
                  </Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="650px" className="!cursor-visible">
                  <Dialog.Title>{exp.title}</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    {exp.tagLine}
                  </Dialog.Description>
                  <Flex
                    direction={{ xs: "row", initial: "column" }}
                    maxWidth={{ xs: "full", initial: "250px" }}
                    gap={{ xs: "9", initial: "4" }}
                  >
                    <DataList.Root
                      size={{ md: "2", lg: "3" } || "2"}
                      onMouseOver={onCursorIn}
                      onMouseOut={onCursorOut}
                    >
                      <DataList.Item align="center">
                        <DataList.Label minWidth="88px" color="purple">
                          Campany
                        </DataList.Label>
                        <DataList.Value>
                          {" "}
                          <Link
                            href={exp.site || "#"}
                            aria-label="Phone Number"
                            className="hover:underline"
                          >
                            {exp.company}
                          </Link>
                        </DataList.Value>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.Label minWidth="88px" color="purple">
                          Location
                        </DataList.Label>
                        <DataList.Value>{exp.location}</DataList.Value>
                      </DataList.Item>
                    </DataList.Root>

                    <DataList.Root
                      size={{ md: "2", lg: "3" } || "2"}
                      onMouseOver={onCursorIn}
                      onMouseOut={onCursorOut}
                    >
                      <DataList.Item align="start">
                        <DataList.Label minWidth="88px" color="purple">
                          Date
                        </DataList.Label>
                        <DataList.Value>{exp.date}</DataList.Value>
                      </DataList.Item>
                    </DataList.Root>
                  </Flex>

                  <Box className="description mt-2">
                    <Heading
                      as="h6"
                      size={{ md: "2", lg: "3", initial: "2" }}
                      className="!my-3"
                      color="purple"
                    >
                      Description
                    </Heading>
                    <ul key={i} className="!list-disc pl-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="!mb-2">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </Box>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Box>
          </Box>
        ))}
      </Grid>
    </Section>
  );
};

export default Experience;
