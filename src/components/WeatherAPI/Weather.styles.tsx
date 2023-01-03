import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

export const WeatherContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "800px",
        alignItems: "center",
        marginBottom: "40px",
     },
  });

export const ButtonStyled = styled(Button)({
    backgroundColor: "white",
    color: "black",
    fontWeight: 600,
    textTransform: "none",
    ":hover": {
        color: "white"
    }
});

export const SeeWeatherContainer = styled(Box)({
    [`@media(max-width: ${breakpoints.tablet}px)`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0 30px",
     },
});

export const HideOnMobile = styled(Box)({
    [`@media(max-width: ${breakpoints.tablet}px)`]: {
        display: "none"
     },
})
