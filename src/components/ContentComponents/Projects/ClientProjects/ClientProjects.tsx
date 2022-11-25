import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../../DynamicTabs/DynamicTabs";
import Header from "../../Header/Header";

const ClientProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const tabData = [
  { label: "BFDI Check-in", content: "content" },
  { label: "Driveway.com", content: "content" },
  { label: "Yoscommunity.com", content: "content" },
];

const ClientProjects = () => {
  return (
    <ClientProjectsContainer>
      <Header text="Client Projects" />
      <DynamicTabs tabData={tabData} />
    </ClientProjectsContainer>
  );
};

export default ClientProjects;
