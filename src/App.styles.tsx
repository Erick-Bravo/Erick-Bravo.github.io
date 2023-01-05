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
   // width: "86.5vw",
   // overflow: "hidden",
   padding: "10px",
   margin: 0,
   // backgroundImage: "linear-gradient(#235347, #D56172)",
   //https://cssgradient.io/
   background: "linear-gradient(216deg, rgba(14,102,78,1) 17%, rgba(0,34,24,1) 83%)",
   [`@media(min-width: ${breakpoints.tablet}px)`]: {
      padding: "25px"
   },
});
