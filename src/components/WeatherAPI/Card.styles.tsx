import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";


export const CardContainer = styled(Box)({
    color: "white",
    width: "300px",
    margin: "20px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        width: "200px",
     },
})

export const FlexContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "10px",
     },
})
