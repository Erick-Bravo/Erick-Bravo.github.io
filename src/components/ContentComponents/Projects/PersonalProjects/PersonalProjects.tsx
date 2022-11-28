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
    title: "Parts House 2.0",
    description: "Revamped from an earlier primitive version, Parts House aims to allow a user to keep track various utilities and belongings in their home. Users can save item info and set notifications to re-purchase with the proper purchase link.",
    content: "content",
    website: {
      label: "Parts House 2.0",
      link: "",
    },
  },
  {
    label: "Good Routes",
    title: "Good Routes",
    description: "Good Routes is a fun clone of Good Reads group project while studying at App Academy.",
    content: "content",
    website: {
      label: "Good Routes",  
      link: ""
    },
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
