import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../../DynamicTabs/DynamicTabs";
import Header from "../../Header/Header";

const PersonalProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const tabData = [
  {
    label: "Parts House",
    website: {
      label: "Parts House 2.0",
      link: "",
    },
    description: "placeholder description",
    content: "content",
  },
  {
    label: "Good Routes",
    website: {
      label: "Good Routes",
      link: ""
    },
    description: "placeholder description",
    content: "content",
  },
];

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer>
      <Header text="Personal Projects" />
      <DynamicTabs tabData={tabData} />
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
