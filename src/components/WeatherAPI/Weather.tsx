import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./Card";
import { currentWeatherCall } from "./WeatherAPIs";


const WeatherContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  width: "800px",
  alignItems: "center",
  marginBottom: "40px",
});

const Weather = ({ yosemiteWeather, boulderWeather }: any) => {
  const [userLocation, setUserLocation] = useState<any>({
    lat: 0,
    lon: 0,
  });

  const [currentWeather, setCurrentWeather] = useState<any>(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [geoTurnedOff, setGeoTurnedOff] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const success = (position: any) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        currentWeatherCall(
          userLocation.lat,
          userLocation.lon,
          setCurrentWeather,
          setErrorStatus
        );
      };
      const error = (err: any) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setGeoTurnedOff(true);
      };
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [userLocation.lat, userLocation.lon]);
  return (
    <WeatherContainer>
      <Card
        name={yosemiteWeather.name}
        temp={yosemiteWeather.main.temp}
        high={yosemiteWeather.main.temp_max}
        low={yosemiteWeather.main.temp_min}
        description={yosemiteWeather.weather[0].description}
        icon={yosemiteWeather.weather[0].icon}
      />
      <Card
        name={boulderWeather.name}
        temp={boulderWeather.main.temp}
        high={boulderWeather.main.temp_max}
        low={boulderWeather.main.temp_min}
        description={boulderWeather.weather[0].description}
        icon={boulderWeather.weather[0].icon}
      />
      <Box>
        {currentWeather && (
          <Card
            name={currentWeather.name}
            temp={currentWeather.main.temp}
            high={currentWeather.main.temp_max}
            low={currentWeather.main.temp_min}
            description={currentWeather.weather[0].description}
            icon={currentWeather.weather[0].icon}
          />
        )}
        {!currentWeather && !geoTurnedOff && (
          <CircularProgress color="primary" />
        )}
        {geoTurnedOff && (
          <Box sx={{ color: "white", marginTop: "25px" }}>
            geolocation is off
          </Box>
        )}
      </Box>
      {/* //   <Box sx={{ color: "orange", fontSize: "12px"}}>Please turn on geolocation</Box> */}
    </WeatherContainer>
  );
};

export default Weather;
