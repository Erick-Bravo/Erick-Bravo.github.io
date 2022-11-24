import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../DynamicTabs/DynamicTabs";
import Header from "../Header/Header";

const ProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header text="Projects" />
      <DynamicTabs />
    </ProjectsContainer>
  );
};

export default Projects;
