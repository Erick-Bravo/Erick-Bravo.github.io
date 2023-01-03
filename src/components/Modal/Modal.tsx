import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import RocketIcon from "@mui/icons-material/Rocket";
import Image from "next/image";
import { Box } from "@mui/system";
import { color } from "../../StyleTheme/theme";
import { DialogTitleStyled, EmojiContainer, NoteStyled } from "./Modal.styles";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose("Ok");
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ backgroundColor: color.gray.one, color: "white", marginBottom: "15px" }}>
        Welcome to my Portfolio!
      </DialogTitle>
      <DialogTitleStyled>
        This portfolio is undergoing a complete revamp for job hunt 2023.
      </DialogTitleStyled>
      <NoteStyled>
        <DialogTitleStyled>
          Feel free to check out what is already available!
        </DialogTitleStyled>
        <EmojiContainer>
          <Image
            src={
              "https://emoji.slack-edge.com/T0253TWF5/meow_wave/845a99cb3729ed1c.gif"
            }
            alt={"meow-wave"}
            width={"40"}
            height={"40"}
          />
        </EmojiContainer>
      </NoteStyled>
      <List sx={{ pt: 0 }}>
        <ListItem
          onClick={() => handleListItemClick("View Portfolio")}
        >
          <ListItemAvatar>
            <Avatar>
              <RocketIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="View Portfolio" />
        </ListItem>
      </List>
    </Dialog>
  );
};

const Modal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Box>
      <SimpleDialog open={open} onClose={handleClose} />
    </Box>
  );
};

export default Modal;
