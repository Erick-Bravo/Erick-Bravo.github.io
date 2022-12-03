import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { breakpoints } from "./StyleTheme/theme";

export const PortfolioContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   height: "100%",
   width: "calc(100vw - 15px)",
   padding: "25px",
   margin: 0,
   // backgroundImage: "linear-gradient(#235347, #D56172)",
   //https://cssgradient.io/
   background: "linear-gradient(210deg, rgba(6,82,43,1) 0%, rgba(82,142,224,1) 100%)"
});

export const IntroContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   width: "100%",
   height: "350px",
   padding: "20px 40px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "700px",
      // padding: "20px 90px 0 90px",
    },
})

export const NameAndTitleContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   color: "white"
});

export const NameTypography = styled(Typography)({
   fontSize: "32px",
   marginBottom: "20px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "45px"
   },
});

export const TitleTypography = styled(Typography)({
   fontSize: "12.5px",
   opacity: .7,
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "25px"
   },
});

export const ResumeLink = styled(Link)({
   fontSize: "10px",
   marginTop: "5px",
   color: "white",
   opacity: .7,
   ":hover": {
      opacity: 1
   },
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      marginTop: "10px",
      fontSize: "15px"
   },
});

export const ImageContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
});

export const ProfileImage = styled(Image)({
   filter: "drop-shadow(3px 3px 3px black)",
   height: "140px",
   width: "140px",
   marginTop: "40px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      height: "200px",
      width: "200px",
      marginTop: 0
   },
})

