import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints, maxWidths } from "../../StyleTheme/theme";
import NavBar from "../Navbar/NavBar";
import Summary from "./Summary/Summary";

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

const Content = () => {
  return (
    <ContentContainer>
      <NavBar />
      <Summary />
    </ContentContainer>
  );
};

export default Content;
