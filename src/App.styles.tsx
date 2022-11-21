import styled from "@emotion/styled";
import { Box } from "@mui/material";
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
   boxSizing: "border-box",
   // backgroundImage: "linear-gradient(#235347, #D56172)",
   //https://cssgradient.io/
   background: "linear-gradient(210deg, rgba(6,82,43,1) 0%, rgba(82,142,224,1) 100%)"
});

export const IntroContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   width: "600px",
   height: "300px",
   color: "white"
})

export const NameTypography = styled(Box)({
   fontSize: "32px",
   marginBottom: "20px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "45px"
   },
});

export const TitleTypography = styled(Box)({
   fontSize: "12.5px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "25px"
   },
});

export const ContentContainer = styled(Box)({
   width: "100%",
   boxSizing: "border-box",
   height: "2000px",
   padding: "4px",
   background: "white",
   borderRadius: "4px",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      width: "700px"
    },
})
