import { ButtonStyled, NavBarContainer, NavLink } from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink href="#Summary" scroll={false}>
        <ButtonStyled>Summary</ButtonStyled>
      </NavLink>
      <NavLink href="#Projects" scroll={false}>
        <ButtonStyled>Projects</ButtonStyled>
      </NavLink>
      <NavLink href="#Contact" scroll={false}>
        <ButtonStyled>Contact</ButtonStyled>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
