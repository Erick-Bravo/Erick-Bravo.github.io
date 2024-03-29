import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DynamicTabs from "../../../DynamicTabs/DynamicTabs";
import Header from "../../Header/Header";

const techPartsHouse = [
  { logo: "/next-js.svg", text: "Next.js" },
  { logo: "/typescript.svg", text: "Typescript" },
  { logo: "/react-icon.svg", text: "React" },
  { logo: "/chakra.png", text: "Chakra UI" },
  { logo: "/postgresql.svg", text: "PostgreSQL" },
  { logo: "/prisma.svg", text: "Prisma" }
];

const techGoodRoutes = [
  { logo: "/javascript.svg", text: "Next.js" },
  { logo: "/react-icon.svg", text: "React" },
  { logo: "/postgresql.svg", text: "PostgreSQL" },
  { logo: "/sequelize.png", text: "Sequelize" },
];

const tabData = [
  {
    label: "Parts House",
    title: "Parts House 2.0",
    description:
      "Revamped from an earlier primitive version, Parts House aims to allow a user to keep track of various utilities and belongings in their home. Users can save item info and set notifications to re-purchase with the proper purchase link.",
    tech: techPartsHouse,
    website: {
      label: "Parts House 2.0",
      link: "",
    },
  },
  {
    label: "National Routes",
    title: "National Routes",
    description:
      "National Routes is a fun clone of Good Reads group project while studying at App Academy.",
    tech: techGoodRoutes,
    website: {
      label: "Good Routes",
      link: "https://national-routes-app.herokuapp.com/",
    },
  },
];

const PersonalProjectsContainer = styled(Box)({
  marginBottom: "40px",
});

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer>
      <Header text="Personal Projects" />
      <DynamicTabs tabData={tabData} />
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
