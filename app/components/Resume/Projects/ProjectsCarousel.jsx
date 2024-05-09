"use client";

import { Box } from "@radix-ui/themes";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const ProjectsCarousel = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Box ref={container} className="project-container relative !mt-20">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            totalProjects={projects.length}
          />
        );
      })}
    </Box>
  );
};

export default ProjectsCarousel;
