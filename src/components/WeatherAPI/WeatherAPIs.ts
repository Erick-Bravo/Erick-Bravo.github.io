import axios from "axios";

export const currentWeatherCall = async (
  lat: number,
  lon: number,
  setCurrentWeather: Function,
  setErrorStatus: Function
) => {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  if (lat) {
    try {
      const request = await axios.get(currentURL);
      setCurrentWeather(request.data);
    } catch (error: any) {
      console.error(error.response);
      setErrorStatus(error.response);
    }
  }
};
