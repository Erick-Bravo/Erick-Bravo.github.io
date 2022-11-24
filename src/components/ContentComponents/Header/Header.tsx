import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { color } from "../../../StyleTheme/theme";

const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  width: "100%"
});

const HeaderStyled = styled(Typography)({
  fontSize: "30px",
  opacity: 0.8,
  marginBottom: "8px",
});

const HR = styled("hr")({
  width: "100px",
  height: "3px",
  backgroundColor: color.teal.one,
  borderRadius: 4,
  borderStyle: "none",
  margin: "0 0 20px 0"
  //   borderWidth: 0,
});

const Header = ({ text }: { text: string }) => {
  return (
    <HeaderContainer>
      <HeaderStyled variant="h1">{text}</HeaderStyled>
      <HR />
    </HeaderContainer>
  );
};

export default Header;
