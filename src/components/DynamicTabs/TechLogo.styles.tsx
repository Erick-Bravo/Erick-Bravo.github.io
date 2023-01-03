import { Box, styled } from "@mui/system";
import Image from "next/image";
import { breakpoints } from "../../StyleTheme/theme";


export const TechLogoContainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0 40px 0",
})

export const TechLogoStyled = styled(Image)({
  height: "25px",
  width: "25px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    height: "35px",
    width: "35px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    height: "40px",
    width: "40px",
  },
});

export const TechLabelStyled = styled(Box)({
  fontSize: "10px",
  marginTop: "10px",
  fontWeight: 600,
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    fontSize: "12px",
  },
});
