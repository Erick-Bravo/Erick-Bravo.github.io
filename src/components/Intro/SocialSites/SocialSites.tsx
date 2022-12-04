import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../../StyleTheme/theme";
import ExternalLink from "./ExternalLink";

export const SocialStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "450px",
  padding: "0 40px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "0 0",
    marginLeft: "20px",
  },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   marginLeft: "20px",
  // },
});

const SocialSites = () => {
  return (
    <SocialStyled>
      <ExternalLink
        href="https://www.linkedin.com/in/erick-bravo-448234203/"
        imgSrc="./linkedin-clouds.svg"
        alt="linkedin"
      />
      <ExternalLink
        href="https://github.com/Erick-Bravo"
        imgSrc="./github-clouds.svg"
        alt="github"
      />
      <ExternalLink
        href="https://www.instagram.com/erickovarb/?hl=en"
        imgSrc="./instagram-clouds.svg"
        alt="instagram"
      />
    </SocialStyled>
  );
};

export default SocialSites;
