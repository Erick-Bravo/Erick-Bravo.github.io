import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../DynamicTabs/DynamicTabs";
import Header from "../Header/Header";

const ProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const tabData = [
  { label: "BFDI Check-in", content: "content" },
  { label: "Driveway.com", content: "content" },
  { label: "Yoscommunity.com", content: "content" },
  { label: "PartsHouse", content: "content" },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header text="Projects" />
      <DynamicTabs tabsData={tabData} />
    </ProjectsContainer>
  );
};

export default Projects;
