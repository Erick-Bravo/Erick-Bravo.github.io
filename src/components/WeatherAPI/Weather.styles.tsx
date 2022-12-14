import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const WeatherContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    width: "800px",
    alignItems: "center",
    marginBottom: "40px",
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
