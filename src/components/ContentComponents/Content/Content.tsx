import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints, maxWidths } from "../../../StyleTheme/theme";
import NavBar from "../../Navbar/NavBar";
import ClientProjects from "../Projects/ClientProjects/ClientProjects";
import PersonalProjects from "../Projects/PersonalProjects/PersonalProjects";
import Summary from "../Summary/Summary";

export const ContentContainer = styled(Box)({
  width: "100%",
  boxSizing: "border-box",
  height: "2000px",
  padding: "0",
  margin: "0 0 25px 0",
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
  padding: "40px 50px",
});

const Content = () => {
  return (
    <ContentContainer>
      <NavBar />
      <InnerContent>
        <Summary />
        <ClientProjects />
        <PersonalProjects />
      </InnerContent>
    </ContentContainer>
  );
};

export default Content;
