import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

export const WeatherContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "700px",
        alignItems: "center",
        marginBottom: "40px",
    },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
        width: "900px",
        paddingRight: "25px"
     },
  });

export const ButtonStyled = styled(Button)({
    backgroundColor: "white",
    color: "black",
    fontWeight: 600,
    textTransform: "none",
    height: "40px",
    width: "175px",
    ":hover": {
        color: "white"
    },
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        width: "150px",
        marginRight: "20px",
     },
    [`@media(min-width: ${breakpoints.desktop}px)`]: {
        width: "200px",
     },
});

export const AlwaysVisibleContainer = styled(Box)({
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        width: "200px",
        margin: "0 30px",
     },

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
     display: "flex",
     justifyContent: "space-around",
     width: "100%"
})
