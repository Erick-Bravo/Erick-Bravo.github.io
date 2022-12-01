import { Box, styled } from "@mui/system";
import Image from "next/image";
import { breakpoints } from "../../StyleTheme/theme";

export const TechLogoStyled = styled(Image)({
  height: "35px",
  width: "35px",
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
