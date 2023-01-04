import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../../DynamicTabs/DynamicTabs";
import { ProjectsAnchor } from "../../../Navbar/NavBar.styles";
import Header from "../../Header/Header";

const ListBFDI = [
  "Made important decision making contributions for the initial direction of the project.",
  "Communicated directly with design teams for design verifications and considerations.",
  "Researched potential features being introduced to code base.",
  "Styled and introduced logic in extensive portions of the application."
];

const ListLithia = [
  "Jumped in and learned existing client code base to perform duties.",
  "Help maintain and introduce many new features for the vehicle purchase cart flow.",
  "Met many project deadlines for client stake holders."
];

const ListYosemite = [
  "Tasked to portray the Yosemite national park service as a professional and inviting organization.",
  "Was responsible for a total website refresh using the existing CMS, Squarespace.",
  "Communicated with multiple supervisors and departments to understand how they wanted to be individually represented on the website.",
  "Changes included: Adding approved color scheme, formatting, copy, and including valuable information of many departments."
];

const techBFDI = [
  { logo: "/gatsby.svg", text: "Gatsby" },
  { logo: "/typescript.svg", text: "Typscript" },
  { logo: "/react-icon.svg", text: "React" },
  { logo: "/mui-icon.svg", text: "Material UI" },
  { logo: "/emotion.png", text: "Emotion" },
  { logo: "/graphql.svg", text: "GraphQL" },
  { logo: "/contentful.png", text: "Contentful" },
];

const techLithia = [
  { logo: "/typescript.svg", text: "Typscript" },
  { logo: "/react-icon.svg", text: "React" },
  { logo: "/mui-icon.svg", text: "Material UI" },
];

const techYosemite = [
  { logo: "/squarespace.svg", text: "Squarespace" },
];

const tabData = [
  {
    label: "BFDI",
    title: "Black Family Development, Inc - Mental Health Check-in",
    description:
    "Black Family Development Inc’s mission is to strengthen and enhance the lives of children, youth, and families through partnerships that support safe, nurturing, vibrant homes, schools and communities. From beggining to end, I was on a team that created a mental health check-in that works as a Progressive Web Application. In this app, a user will take an assessment and is directed relevant resources depending on user score.",
    responsibilities: ListBFDI,
    tech: techBFDI,
    videoLink: "/BFDI.mp4",
    website: {
      label: "Hope is Here By BFDI",
      link: "",
    },
  },
  {
    label: "Lithia Motors",
    title: "Driveway",
    description:
    "Driveway.com, a direct competitor to Carvana, is the only online car retailer that puts you in complete control of every aspect of car ownership. As part of one of the largest automotive retailers, you get to shop directly from Lithia's nationwide inventory. I worked on the team responsible for the entire vehicle purchase cart-flow.",
    responsibilities: ListLithia, 
    tech: techLithia,
    videoLink: "/Lithia.mp4",
    website: {
      label: "Driveway.com",
      link: "https://www.driveway.com",
    },
  },
  {
    label: "Yosemite NP",
    title: "Yosemite Community Website",
    description:
    "Yoscommunity.com website was created to help provide resources to the 2000+ employees who live in Yosemite National Park.",
    responsibilities: ListYosemite,
    tech: techYosemite,
    videoLink: "/Yosemite.mp4",
    website: {
      label: "Yosemite Community Website",
      link: "https://www.yoscommunity.com",
    },
  },
];

const ClientProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const ClientProjects = () => {
  return (
    <ClientProjectsContainer>
      <ProjectsAnchor id="Projects"/>
      <Header text="Client Projects" />
      <DynamicTabs tabData={tabData} />
    </ClientProjectsContainer>
  );
};

export default ClientProjects;
