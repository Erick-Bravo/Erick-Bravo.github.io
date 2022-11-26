import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../../DynamicTabs/DynamicTabs";
import Header from "../../Header/Header";

const ClientProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const tabData = [
  {
    label: "BFDI",
    client: "Black Family Development, Inc - Mental Health Check-in",
    website: {
      label: "Hope is Here By BFDI",
      link: ""
    },
    description:
      "Black Family Development Inc’s mission is to strengthen and enhance the lives of children, youth, and families through partnerships that support safe, nurturing, vibrant homes, schools and communities. From beggining to end, I was on a team that created a mental health check-in that works as a Progressive Web Application. In this app, a user will take an assessment and is directed resources depending on user score.",
    content: "content",
  },
  {
    label: "Lithia Motors",
    client: "Driveway.com",
    website: {
      label: "Driveway.com",
      link: "https://www.driveway.com"
    },
    description:
      "Driveway.com, a direct competitor to Carvana, is the only online car retailer that puts you in complete control of every aspect of car ownership. As part of one of the largest automotive retailers, you get to shop directly from Lithia's nationwide inventory. I worked on the team responsible for the entire vehicle purchase cart-flow.",
    content: "content",
  },
  {
    label: "Yosemite National Park",
    client: "Yosemite Community Website",
    website: {
      label: "Yosemite Comunity Website",
      link: "https://www.yoscommunity.com"
    },
    description: "placeholder description",
    content: "content",
  },
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
