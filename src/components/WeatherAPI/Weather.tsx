import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Card from "./Card";

const WeatherContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  width: "900px",
  alignItems: "center",
  marginBottom: "40px",
});


const Weather = ({ yosemiteWeather }: any) => {
  console.log(yosemiteWeather);
  return (
    <WeatherContainer>
      <Card
        name={yosemiteWeather.name}
        temp={yosemiteWeather.main.temp}
        high={yosemiteWeather.main.temp_max}
        low={yosemiteWeather.main.temp_min}
        description={yosemiteWeather.weather[0].description}
      />
    </WeatherContainer>
  );
};

export default Weather;
