"use client";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Card from "./Card"; // Import Card component
import { projects } from "../../data/projects"; // Import project data

const ProjectsGrid = () => {
  return (
    <Flex direction={"column"} gap={"5"} className="projects-grid mt-12">
      {/* Row 1 - Two Cards */}
      <Grid
        columns={{ md: "2", initial: "1" }}
        gap="5"
        align={"stretch"}
        className="mx-auto w-full"
      >
        {projects.slice(0, 2).map((project) => (
          <Card key={project.id} project={project} /> // Pass project data
        ))}
      </Grid>

      {/* Row 2 - One Card */}
      <Grid columns={"1"} gap="5" className="mx-auto w-full">
        <Card key={projects[2].id} project={projects[2]} />
      </Grid>

      {/* Row 3 - Two Cards */}
      <Grid
        columns={{ md: "2", initial: "1" }}
        align={"stretch"}
        gap="5"
        className="mx-auto"
      >
        {projects.slice(3).map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </Grid>
    </Flex>
  );
};

export default ProjectsGrid;
