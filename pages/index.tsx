import axios from "axios";
import Head from "next/head";
import App from "../src/App";

const Home = ({ yosemiteWeather, boulderWeather }: any) => {
  return (
    <>
      <Head>
        <title>Erick Bravo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App yosemiteWeather={yosemiteWeather} boulderWeather={boulderWeather} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const yosemiteURL = `https://api.openweathermap.org/data/2.5/weather?lat=${34.0522}&lon=${-118.2437}&units=imperial&appid=${
    process.env.NEXT_PUBLIC_WEATHER_KEY
  }`;
  const boulderURL = `https://api.openweathermap.org/data/2.5/weather?lat=${40.7128}&lon=${-74.0060}&units=imperial&appid=${
    process.env.NEXT_PUBLIC_WEATHER_KEY
  }`;

  try {
    const yosemiteWeather = await axios.get(yosemiteURL);
    const boulderWeather = await axios.get(boulderURL);
    return {
      props: {
        yosemiteWeather: yosemiteWeather.data,
        boulderWeather: boulderWeather.data,
      },
    };
  } catch (error: any) {
    console.error(error.response);
  }
};
