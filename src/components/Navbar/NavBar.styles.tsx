import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { breakpoints } from "../../StyleTheme/theme";

export const NavBarContainer = styled(Box)({
  visibility: "hidden",
  position: "sticky",
  zIndex: 10,
  borderRadius: "0 0 4px 4px",
  top: 0,
  height: 0,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    visibility: "visible",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80px",
    backgroundColor: "#4B98AB",
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
  width: "150px",
  color: "white",
  fontWeight: 600,
  background: "#68B3C6",
  textTransform: "none",
  ":hover": {
    background: "#84CFE2",
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
});

export const ProjectsAnchor = styled(Box)({
  ...anchorStyles,
  top: "-120px",
});

export const ContactAnchor = styled(Box)({
  ...anchorStyles,
  top: "-50px",
});
