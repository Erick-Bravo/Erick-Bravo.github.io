import {
  ContentContainer,
  Footer,
  IntroContainer,
  NameTypography,
  PortfolioContainer,
  TitleTypography,
} from "./App.styles";

const App = () => {
  return (
    <PortfolioContainer>
      <IntroContainer>
        <NameTypography>Erick Bravo</NameTypography>
        <TitleTypography>Software Developer</TitleTypography>
      </IntroContainer>
      <ContentContainer></ContentContainer>
      <Footer>I am the Footer</Footer>
    </PortfolioContainer>
  );
};

export default App;
