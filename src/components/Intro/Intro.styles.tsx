import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { breakpoints } from "../../StyleTheme/theme";

export const IntroContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  padding: "20px 40px",
  marginBottom: "30px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "700px",
    marginTop: "40px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    width: "800px",
  },
});

export const NameAndTitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "white",
});

type NameStyledProps = {
  open: boolean;
};

const preventDomList = (prop: string | number | symbol) => prop !== "open";

export const NameTypography = styled(Typography, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<NameStyledProps>((props) => ({
  visibility: props.open ? "hidden" : "visible",
  fontSize: "32px",
  marginBottom: "20px",
  marginTop: "20px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "45px",
  },
}));

export const TitleTypography = styled(Typography, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<NameStyledProps>((props) => ({
  visibility: props.open ? "hidden" : "visible",
  fontSize: "20px",
  opacity: 0.7,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "25px",
  },
}));

export const ResumeLink = styled(Link)({
  fontSize: "16px",
  marginTop: "40px",
  color: "white",
  textDecorationLine: "underline",
  opacity: 0.7,
  ":hover": {
    opacity: 1,
  },
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    marginTop: "20px",
    fontSize: "15px",
  },
});

export const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
      marginTop: 0
  },
});

export const ProfileImage = styled(Image)({
  filter: "drop-shadow(3px 3px 3px black)",
  height: "140px",
  width: "140px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: "200px",
    width: "200px",
  },
});
