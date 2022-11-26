import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { breakpoints } from "./StyleTheme/theme";

const TechList = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  color: "white",
});

const Powered = styled(Typography)({
  fontSize: "10px",
  marginRight: "18px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "12px"
  },
})

const IconContainer = styled(Typography)({
  fontSize: "10px",
  fontWeight: 600,
  marginBottom: "7px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "12px",
  },
});

const imgHeight = "20px";

const PoweredBy = () => {
  return (
    <TechList>
      <Powered>Portfolio programmed with:</Powered>
      <IconContainer>
        Next.js <img src="./next-js.svg" alt="next.js" height={imgHeight} /> -
        React <img src="./react-icon.svg" alt="react" height={imgHeight} /> -
        Material UI <img src="./mui-icon.svg" alt="mui" height={imgHeight} /> -
        Emotion <img src="./emotion.png" alt="emotion" height={imgHeight} /> -
        GSAP <img src="./gsap-icon.svg" alt="gsap" height={imgHeight} />
      </IconContainer>
    </TechList>
  );
};

export default PoweredBy;
