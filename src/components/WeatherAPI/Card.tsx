import styled from "@emotion/styled";
import { Box } from "@mui/material";

type WeatherCardProps = {
  name: string;
  temp: number;
  high: number;
  low: number;
  description: string;
};

const CardContainer = styled(Box)({
  //   marginBottom: "20px",
  color: "white",
  width: "150px",
//   border: "1px solid white",
//   padding: "6px",
//   borderRadius: "4px",
});

const floorTemp = (temp: number) => {
  return `${Math.floor(temp)}ºF`;
};

const Card = ({ name, temp, high, low, description }: WeatherCardProps) => {
  return (
    <CardContainer>
      <Box sx={{ fontWeight: 600 }}>{name}</Box>
      <Box>{description}</Box>
      <Box sx={{ fontSize: "24px", marginLeft: "10px" }}>{floorTemp(temp)}</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: "12px" }}>{`low ${floorTemp(low)}`}</Box>
        <Box sx={{ fontSize: "12px" }}>{`high ${floorTemp(high)}`}</Box>
      </Box>
    </CardContainer>
  );
};

export default Card;
