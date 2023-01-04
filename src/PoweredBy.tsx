import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { breakpoints } from "./StyleTheme/theme";

const TechList = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  color: "white",
  marginBottom: "20px"
});

const Powered = styled(Typography)({
  fontSize: "10px",
  marginRight: "18px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "12px",
  },
});

const IconContainer = styled(Typography)({
  fontSize: "10px",
  fontWeight: 600,
  marginBottom: "7px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "12px",
  },
});

const imgSize = 20;

const PoweredBy = () => {
  return (
    <TechList>
      <Powered>Portfolio programmed with:</Powered>
      <IconContainer>
        Next.js{" "}
        <Image
          src="/next-js.svg"
          alt="next.js"
          height={imgSize}
          width={imgSize}
        />{" "}
        - React{" "}
        <Image
          src="/react-icon.svg"
          alt="react"
          height={imgSize}
          width={imgSize}
        />{" "}
        - Material UI{" "}
        <Image
          src="/mui-icon.svg"
          alt="mui"
          height={imgSize}
          width={imgSize}
        />{" "}
        - Emotion{" "}
        <Image
          src="/emotion.png"
          alt="emotion"
          height={imgSize}
          width={imgSize}
        />{" "}
        - GSAP{" "}
        <Image
          src="/gsap-icon.svg"
          alt="gsap"
          height={imgSize}
          width={imgSize}
        />
      </IconContainer>
    </TechList>
  );
};

export default PoweredBy;
