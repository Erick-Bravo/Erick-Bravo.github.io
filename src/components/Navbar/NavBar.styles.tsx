import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { breakpoints } from "../../StyleTheme/theme";

const preventDomList = (prop: string | number | symbol) =>
  prop !== "label" &&
  prop !== "usersCurrentAnswer" &&
  prop !== "light" &&
  prop !== "dark";

export const NavBarContainer = styled(Box, {
    shouldForwardProp: (prop) => preventDomList(prop),
  })({
    visibility: "hidden",
    position: "sticky",
    zIndex: 10,
    top: 0,
    height: 0,
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    visibility: "visible",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80px",
    backgroundColor: "#4B98AB",
    width: "100%",
    borderRadius: "4px",
    padding: "0 40px",
  },
  [`@media(min-width: ${breakpoints.desktop}px)`]: {
    padding: "0 150px",
  },
});

export const NavLink = styled(Link)({
  textDecoration: "none",
  textDecorationLine: "none",
});

export const ButtonStyled = styled(Button)({
  width: "150px",
  color: "white",
  fontWeight: 600,
  background: "#68B3C6",
  textTransform: "none",
  ":hover": {
    background: "#84CFE2",
  },
});

export const SummaryAnchor = styled(Box)({
  display: "block",
  position: "relative",
  top: "-270px",
  visibility: "hidden"
})

export const ProjectsAnchor = styled(Box)({
  display: "block",
  position: "relative",
  top: "-120px",
  visibility: "hidden"
})

export const ContactAnchor = styled(Box)({
  display: "block",
  position: "relative",
  top: "-50px",
  visibility: "hidden"
})


// export const AnswerStyled = styled(Button, {
//   shouldForwardProp: (prop) => preventDomList(prop),
// })<AnswerStyledProps>((props) => ({
//   ...generalButtonStyles,
//   width: "100%",
//   maxWidth: maxWidths.mobile.buttons,
//   margin: "8px 0",
//   color:
//     props.usersCurrentAnswer === props.label ? color.white : color.teal.one,
//   border:
//     props.usersCurrentAnswer === props.label
//       ? "0"
//       : `2px solid ${color.teal.two}`,
//   backgroundColor:
//     props.usersCurrentAnswer === props.label ? color.teal.one : color.white,
//   ":hover": {
//     backgroundColor:
//       props.usersCurrentAnswer === props.label
//         ? color.teal.one
//         : color.teal.four,
//     border:
//       props.usersCurrentAnswer === props.label
//         ? "0"
//         : `2px solid ${color.teal.two}`,
//   },
//   [`@media(min-width: ${breakpoints.tablet}px)`]: {
//     maxWidth: maxWidths.tablet.buttons,
//     margin: "12px 0",
//   },
//   [`@media(min-width: ${breakpoints.desktop}px)`]: {
//     maxWidth: maxWidths.desktop.buttons,
//     margin: "16px 0",
//   },
// }));