import styled from "@emotion/styled";
import Image from "next/image";
import { Box } from "@mui/material";
import { CardContainer } from "./Card.styles";

type WeatherCardProps = {
  name: string;
  temp: number;
  high: number;
  low: number;
  description: string;
  icon: string;
};


const floorTemp = (temp: number) => {
  return `${Math.floor(temp)}ºF`;
};

const Card = ({
  name,
  temp,
  high,
  low,
  description,
  icon,
}: WeatherCardProps) => {
  return (
    <CardContainer>
      <Box sx={{ fontWeight: 600, textOverflow: "ellipsis" }}>{name}</Box>
      <Box>{description}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <Box sx={{ fontSize: "24px" }}>{floorTemp(temp)}</Box>
        <Box sx={{marginRight: "10px"}}>
          <Image
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={"weather-icon"}
            width={"60"}
            height={"60"}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: "12px" }}>{`low ${floorTemp(low)}`}</Box>
        <Box sx={{ fontSize: "12px" }}>{`high ${floorTemp(high)}`}</Box>
      </Box>
    </CardContainer>
  );
};

export default Card;
