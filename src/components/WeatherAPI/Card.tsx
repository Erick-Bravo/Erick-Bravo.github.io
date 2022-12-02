import styled from "@emotion/styled";
import Image from "next/image";
import { Box } from "@mui/material";

type WeatherCardProps = {
  name: string;
  temp: number;
  high: number;
  low: number;
  description: string;
  icon: string;
};

const CardContainer = styled(Box)({
  color: "white",
  width: "150px",
});

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
      <Box sx={{ fontWeight: 600 }}>{name}</Box>
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
            width={"40"}
            height={"40"}
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
