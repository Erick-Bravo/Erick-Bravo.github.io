import { ButtonStyled, NavBarContainer, NavLink } from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink href="#Summary">
        <ButtonStyled>Summary</ButtonStyled>
      </NavLink>
      <NavLink href="#Projects">
        <ButtonStyled>Projects</ButtonStyled>
      </NavLink>
      <NavLink href="#Contact">
        <ButtonStyled>Contact</ButtonStyled>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
