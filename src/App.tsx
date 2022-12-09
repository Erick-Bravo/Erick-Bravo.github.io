import {
  PortfolioContainer,
} from "./App.styles";
import AllContent from "./components/ContentComponents/AllContent/AllContent";
import Intro from "./components/Intro/Intro";
import Modal from "./components/Modal/Modal";
import WeatherAPI from "./components/WeatherAPI/Weather";
import PoweredBy from "./PoweredBy";

const App = ({ yosemiteWeather, boulderWeather }: any) => {
  return (
    <PortfolioContainer>
      <Modal />
      <Intro />
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
