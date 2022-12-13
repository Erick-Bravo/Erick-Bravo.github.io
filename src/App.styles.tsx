import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { breakpoints } from "./StyleTheme/theme";

export const PortfolioContainer = styled(Box)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   height: "100%",
   // width: "calc(100vw - 15px)",
   // overflow: "hidden",
   padding: "10px",
   margin: 0,
   // backgroundImage: "linear-gradient(#235347, #D56172)",
   //https://cssgradient.io/
   background: "linear-gradient(216deg, rgba(12,85,65,1) 1%, rgba(50,143,137,1) 100%);",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      padding: "25px"
   },
});
