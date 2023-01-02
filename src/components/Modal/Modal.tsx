import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import RocketIcon from '@mui/icons-material/Rocket';
import Image from "next/image";
import { Box } from "@mui/system";
import { color } from "../../StyleTheme/theme";

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
      <DialogTitle sx={{ backgroundColor: color.gray.one, color: "white" }}>
        Welcome to my Portfolio!
      </DialogTitle>
      <DialogTitle sx={{ fontSize: "16px" }}>
        This portfolio is undergoing a complete revamp for job hunt 2023.
      </DialogTitle>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}
      >
        <DialogTitle sx={{ fontSize: "16px", padding: "0 20px" }}>
        Feel free to check out what is already available!
        </DialogTitle>
        <Image
          src={
            "https://emoji.slack-edge.com/T0253TWF5/meow_wave/845a99cb3729ed1c.gif"
          }
          alt={"meow-wave"}
          width={"40"}
          height={"40"}
        />
      </Box>
      <List sx={{ pt: 0 }}>
        <ListItem autoFocus button onClick={() => handleListItemClick("View Portfolio")}>
          <ListItemAvatar sx={{dispaly: "flex", justifyContent: "space-around"}}>
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
