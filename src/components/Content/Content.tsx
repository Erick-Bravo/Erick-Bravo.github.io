import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

export const ContentContainer = styled(Box)({
  width: "100%",
  boxSizing: "border-box",
  height: "2000px",
  padding: "4px",
  margin: "0 0 25px 0",
  background: "white",
  borderRadius: "4px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: "700px",
  },
});

const Content = () => {
  return (
    <ContentContainer>This is the Content ContentContainer</ContentContainer>
  );
};

export default Content;
