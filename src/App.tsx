import { useEffect, useState } from "react";
import {
  PortfolioContainer,
} from "./App.styles";
import AllContent from "./components/ContentComponents/AllContent/AllContent";
import Intro from "./components/Intro/Intro";
import Modal from "./components/Modal/Modal";
import WeatherAPI from "./components/WeatherAPI/Weather";
import PoweredBy from "./PoweredBy";
import { gsap } from "gsap";
import SplitType from 'split-type'

const App = ({ yosemiteWeather, boulderWeather }: any) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      const title = document.getElementById("name")!;
      const myText = new SplitType(title)
      gsap.to(".char", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        delay: 0.2,
      });
    }
  }, [open])

  return (
    <PortfolioContainer>
      <Modal open={open} handleClose={handleClose} />
      <Intro open={open} />
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
