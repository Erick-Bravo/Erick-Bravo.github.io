import styled from "@emotion/styled";
import { Box, Button, Link } from "@mui/material";
import { breakpoints } from "../../StyleTheme/theme";

const NavBarContainer = styled(Box)({
    visibility: "hidden",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    visibility: "visible",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80px",
    backgroundColor: "#4B98AB",
    width: "100%",
    borderRadius: "4px",
    boxSizing: "border-box",
    padding: "0 20px",
  },
});

const NavLink = styled(Link)({
  textDecoration: "none",
  textDecorationLine: "none",
});

const ButtonStyled = styled(Button)({
  width: "150px",
  color: "white",
  fontWeight: 600,
  background: "#68B3C6",
  textTransform: "none",
  ":hover": {
    background: "#84CFE2",
  },
});

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink>
        <ButtonStyled>About</ButtonStyled>
      </NavLink>
      <NavLink>
        <ButtonStyled>Skills</ButtonStyled>
      </NavLink>
      <NavLink>
        <ButtonStyled>Projects</ButtonStyled>
      </NavLink>
      <NavLink>
        <ButtonStyled>Contact</ButtonStyled>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
