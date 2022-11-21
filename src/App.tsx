import {
  ContentContainer,
  Footer,
  ImageContainer,
  IntroContainer,
  NameAndTitleContainer,
  NameTypography,
  PortfolioContainer,
  ProfileImage,
  TitleTypography,
} from "./App.styles";

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
      <ContentContainer></ContentContainer>
      <Footer>I am the Footer</Footer>
    </PortfolioContainer>
  );
};

export default App;
