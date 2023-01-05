import styled from "@emotion/styled";
import { Box, Dialog, DialogTitle } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

export const DialogStyled = styled(Dialog)({
    ".MuiDialog-root": {
        width: "75%"
    },
    ".MuiBackdrop-root": {
    },
    ".MuiPaper-root": {

    }
});

export const NoteStyled = styled(Box)({
    marginBottom: "20px",
    [`@media(min-width: ${breakpoints.tablet}px)`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export const EmojiContainer = styled(Box)({
    [`@media(max-width: ${breakpoints.tablet}px)`]: {
        textAlign: "center"
    },
});

export const DialogTitleStyled = styled(DialogTitle)({
    fontSize: "16px",
    [`@media(max-width: ${breakpoints.tablet}px)`]: {
        textAlign: "center"
    },
});

