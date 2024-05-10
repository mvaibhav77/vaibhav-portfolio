import { Box } from "@radix-ui/themes";
import ProjectMainCard from "../components/Projects/ProjectMainCard";

export default function Projects() {
  return (
    <Box className="main-content hideScrollBar">
      {/* Project Cards */}
      <ProjectMainCard />
    </Box>
  );
}
