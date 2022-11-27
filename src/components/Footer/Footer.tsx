import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";
import ExternalLink from "./ExternalLink";

export const FooterStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  width: "100%",
  maxWidth: "450px",
  boxSizing: "border-box",
  padding: "0 40px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    padding: "0 0",
    margin: "10px 0",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    margin: "20px 0",
  },
});


const Footer = () => {
  return (
    <FooterStyled>
      <ExternalLink
        href="https://www.linkedin.com/in/erick-bravo-448234203/"
        imgSrc="./Linkedin2.svg"
        alt="linkedin"
      />
      <ExternalLink
        href="https://github.com/Erick-Bravo"
        imgSrc="./github2.png"
        alt="github"
      />
      <ExternalLink
        href="https://www.instagram.com/erickovarb/?hl=en"
        imgSrc="./instagram2.svg"
        alt="instagram"
      />
    </FooterStyled>
  );
};

export default Footer;
