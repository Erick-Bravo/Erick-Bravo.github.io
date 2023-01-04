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
      const name = document.getElementById("name")!;
      const title = document.getElementById("title")!;
      const splitName = new SplitType(name, {charClass: "namechar"})
      const splitTitle = new SplitType(title, {charClass: "titlechar"})
      gsap.to(".namechar", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        delay: 0.1,
      });
      gsap.to(".titlechar", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        delay: 0.5,
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
      <PoweredBy />
      <AllContent />
    </PortfolioContainer>
  );
};

export default App;
