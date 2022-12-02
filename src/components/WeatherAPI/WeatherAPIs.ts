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

export const forcastCall = async (
  lat: number,
  lon: number,
  setForcast: Function,
  setErrorStatus: Function
) => {
  const forcastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  if (lat) {
    try {
      const request = await axios.get(forcastURL);
      setForcast(request.data);
    } catch (error: any) {
      console.error(error.response);
      setErrorStatus(error.response);
    }
  }
};

export const nonDynamic_ClientCall = async (
  setCurrentWeather: Function,
  setErrorStatus: Function
) => {
  const nonDynamicURL = `https://api.openweathermap.org/data/2.5/weather?lat=${42.3314}&lon=${-83.0458}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  try {
    const request = await axios.get(nonDynamicURL);
    setCurrentWeather(request.data);
  } catch (error: any) {
    console.error(error.response);
    setErrorStatus(error.response);
  }
};

export const nonDynamic_ServerCall = async (
  setServerSide: Function,
  setErrorStatus: Function
) => {
  const nonDynamicURL = `https://api.openweathermap.org/data/2.5/weather?lat=${42.3314}&lon=${-83.0458}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  try {
    const request = await axios.get(nonDynamicURL);
    setServerSide(request.data);
  } catch (error: any) {
    console.error(error.response);
    setErrorStatus(error.response);
  }
};
