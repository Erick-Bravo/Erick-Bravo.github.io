import {
  ContentContainer,
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
    </PortfolioContainer>
  );
};

export default App;
