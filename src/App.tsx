import { Link } from "@mui/material";
import {
  ImageContainer,
  IntroContainer,
  NameAndTitleContainer,
  NameTypography,
  PortfolioContainer,
  ProfileImage,
  ResumeLink,
  TitleTypography,
} from "./App.styles";
import AllContent from "./components/ContentComponents/AllContent/AllContent";
import SocialSites from "./components/SocialSites/SocialSites";
import WeatherAPI from "./components/WeatherAPI/Weather";
import PoweredBy from "./PoweredBy";

const App = ({ yosemiteWeather, boulderWeather }: any) => {
  return (
    <PortfolioContainer>
      <IntroContainer>
        <NameAndTitleContainer>
          <NameTypography>Erick Bravo</NameTypography>
          <TitleTypography>Application Developer</TitleTypography>
          <ResumeLink
            href="/ErickBravoResume.pdf"
            target={"_blank"}
            rel="noopener noreferrer"
          >
          {"--> View Resume <--"}
          </ResumeLink>
        </NameAndTitleContainer>
        <ImageContainer>
          <ProfileImage
            src="/Baldy-modified.png"
            alt="Profile Pic"
            height="140"
            width="140"
          />
          <SocialSites />
        </ImageContainer>
      </IntroContainer>
      <WeatherAPI
        yosemiteWeather={yosemiteWeather}
        boulderWeather={boulderWeather}
      />
      <AllContent />
      <PoweredBy />
    </PortfolioContainer>
  );
};

export default App;
