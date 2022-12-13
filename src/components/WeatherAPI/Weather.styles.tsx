import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)({
    backgroundColor: "white",
    color: "black",
    fontWeight: 600,
    textTransform: "none",
    ":hover": {
        color: "white"
    }
});
