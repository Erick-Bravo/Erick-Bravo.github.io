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
import WeatherAPI from "./components/WeatherAPI/Weather";
import PoweredBy from "./PoweredBy";

const App = ({ yosemiteWeather, boulderWeather }: any) => {
  return (
    <PortfolioContainer>
      <PoweredBy />
      <IntroContainer>
        <NameAndTitleContainer>
          <NameTypography>Erick Bravo</NameTypography>
          <TitleTypography>Software Developer</TitleTypography>
        </NameAndTitleContainer>
        <ImageContainer>
          <ProfileImage
            src="/Baldy-modified.png"
            alt="Profile Pic"
            height="140"
            width="140"
          />
        </ImageContainer>
      </IntroContainer>
      <WeatherAPI
        yosemiteWeather={yosemiteWeather}
        boulderWeather={boulderWeather}
      />
      <AllContent />
      <Footer />
    </PortfolioContainer>
  );
};

export default App;
