import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints, maxWidths } from "../../../StyleTheme/theme";
import NavBar from "../../Navbar/NavBar";
import Contact from "../Contact/Contact";
import ClientProjects from "../Projects/ClientProjects/ClientProjects";
import PersonalProjects from "../Projects/PersonalProjects/PersonalProjects";
import Summary from "../Summary/Summary";

export const ContentContainer = styled(Box)({
  width: "100%",
  padding: "0",
  background: "#d8d8d8",
  borderRadius: "4px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: maxWidths.tablet.content,
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: maxWidths.desktop.content,
  },
});

const InnerContent = styled(Box)({
  padding: "20px 25px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "40px 50px",
  },
});

const AllContent = () => {
  return (
    <ContentContainer>
      <NavBar />
      <InnerContent>
        <Summary />
        <ClientProjects />
        <PersonalProjects />
        <Contact />
      </InnerContent>
    </ContentContainer>
  );
};

export default AllContent;
