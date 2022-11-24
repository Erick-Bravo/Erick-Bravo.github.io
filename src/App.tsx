import { Typography } from "@mui/material";
import {
  ImageContainer,
  IntroContainer,
  NameAndTitleContainer,
  NameTypography,
  PortfolioContainer,
  ProfileImage,
  TechList,
  TitleTypography,
} from "./App.styles";
import Content from "./components/ContentComponents/Content/Content";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <PortfolioContainer>
      <IntroContainer>
        <NameAndTitleContainer>
          <NameTypography>Erick Bravo</NameTypography>
          <TitleTypography>Software Developer</TitleTypography>
        </NameAndTitleContainer>

        <ImageContainer>
          <ProfileImage src="./Baldy-modified.png" alt="Profile Pic" />
        </ImageContainer>
      </IntroContainer>
      <TechList>
        Portfolio Powered By:{" "}
        <Typography sx={{ fontWeight: 600, marginTop: "5px" }}>
          React <img src="./react-icon.svg" alt="react" height="30px" /> -
          Material UI <img src="./mui-icon.svg" alt="mui" height="30px" /> -
          GSAP <img src="./gsap-icon.svg" alt="gsap" height="30px" />
        </Typography>
      </TechList>
      <Content />
      <Footer />
    </PortfolioContainer>
  );
};

export default App;
