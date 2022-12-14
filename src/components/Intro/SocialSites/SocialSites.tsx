import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { breakpoints } from "../../../StyleTheme/theme";
import ExternalLink from "./ExternalLink";
import { gsap } from "gsap";

export const SocialStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "450px",
  paddingLeft: "40px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "0 0",
    marginLeft: "20px",
  },
  // [`@media(min-width: ${breakpoints.desktop}px)`]: {
  //   marginLeft: "20px",
  // },
});

const SocialSites = ({open}: {open: boolean}) => {

  useEffect(() => {
    if (!open) {
      gsap.to("#social", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "back",
        stagger: 0.1,
        delay: 0.6,
      })
    }
  }, [open])

  return (
    <SocialStyled id="social-container">
      <Box id="social">
        <ExternalLink
          href="https://www.linkedin.com/in/erick-bravo-448234203/"
          imgSrc="./linkedin-clouds.svg"
          alt="linkedin"
        />
      </Box>
      <Box id="social">
        <ExternalLink
          href="https://github.com/Erick-Bravo"
          imgSrc="./github-clouds.svg"
          alt="github"
        />
      </Box>
      <Box id="social">
        <ExternalLink
          href="https://www.instagram.com/erickovarb/?hl=en"
          imgSrc="./instagram-clouds.svg"
          alt="instagram"
        />
      </Box>
    </SocialStyled>
  );
};

export default SocialSites;
