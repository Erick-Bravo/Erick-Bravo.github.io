import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { breakpoints } from "../../StyleTheme/theme";

export const NavBarContainer = styled(Box)({
  position: "sticky",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 10,
  borderRadius: "0 0 4px 4px",
  top: 0,
  backgroundColor: "#3e8b9e",
  height: "85px",

  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    // visibility: "visible",
    height: "80px",
    width: "100%",
    padding: "0 40px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "0 150px",
  },
});

export const NavLink = styled(Link)({
  textDecoration: "none",
  textDecorationLine: "none",
});

export const ButtonStyled = styled(Button)({
  color: "white",
  fontWeight: 600,
  background: "#68B3C6",
  textTransform: "none",
  width: "90px",
  height: "45px",
  ":hover": {
    background: "#84CFE2",
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    width: "150px",
  },
});

const anchorStyles: object = {
  display: "block",
  position: "relative",
  visibility: "hidden",
};

export const SummaryAnchor = styled(Box)({
  ...anchorStyles,
  top: "-120px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    top: "-120px",
  },
});

export const ProjectsAnchor = styled(Box)({
  ...anchorStyles,
  top: "-120px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    top: "-120px",
  },
});

export const ContactAnchor = styled(Box)({
  ...anchorStyles,
  top: "0px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    top: "-50px",
  },
});
