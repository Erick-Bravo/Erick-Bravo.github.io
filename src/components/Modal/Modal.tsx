import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";
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
        This site uses the Openweatherapp API for your local weather data.
      </DialogTitle>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <DialogTitle sx={{ fontSize: "16px", padding: "0 20px" }}>
          Thanks for visiting!
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
        <ListItem autoFocus button onClick={() => handleListItemClick("Close")}>
          <ListItemAvatar>
            <Avatar>
              <CancelIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Close" />
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
