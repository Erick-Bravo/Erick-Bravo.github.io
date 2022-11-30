import {
  ImageContainer,
  IntroContainer,
  NameAndTitleContainer,
  NameTypography,
  PortfolioContainer,
  ProfileImage,
  TitleTypography,
} from "./App.styles";
import AllContent from "./components/ContentComponents/AllContent/AllContent";
import Footer from "./components/Footer/Footer";
import PoweredBy from "./PoweredBy";

const App = () => {
  return (
    <PortfolioContainer>
      <PoweredBy />
      <IntroContainer>
        <NameAndTitleContainer>
          <NameTypography>Erick Bravo</NameTypography>
          <TitleTypography>Software Developer</TitleTypography>
        </NameAndTitleContainer>
        <ImageContainer>
          <ProfileImage src="./Baldy-modified.png" alt="Profile Pic" />
        </ImageContainer>
      </IntroContainer>
      <AllContent />
      <Footer />
    </PortfolioContainer>
  );
};

export default App;
