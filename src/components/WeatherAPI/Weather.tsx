import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { color } from "../../StyleTheme/theme";

const WeatherContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  width: "900px",
  alignItems: "center",
  marginBottom: "40px",
});

const YosCard = styled(Box)({
  display: "flex",
  justifyContent: "center",
  minHeight: "80px",
  minWidth: "190px",
  border: "2px solid black",
  color: "white",
});

const Weather = ({ yosemiteWeather }: any) => {
  console.log(yosemiteWeather);
  return (
    <WeatherContainer>
      <YosCard>Yosemite Valley</YosCard>
      <YosCard>Placeholder</YosCard>
      <YosCard>Placeholder</YosCard>
    </WeatherContainer>
  );
};

export default Weather;
