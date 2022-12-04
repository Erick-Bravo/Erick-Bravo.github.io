import { ButtonStyled, NavBarContainer, NavLink } from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink>
        <ButtonStyled>Summary</ButtonStyled>
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
