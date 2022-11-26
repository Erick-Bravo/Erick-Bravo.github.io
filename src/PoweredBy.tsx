import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const TechList = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  height: "40px",
  alignItems: "center",
  color: "white",
});

const IconContainer = styled(Typography)({
  fontSize: "12px",
  fontWeight: 600,
  marginBottom: "3px"
});

const imgHeight = "20px";

const PoweredBy = () => {
  return (
    <TechList>
      <Typography sx={{marginRight: "12px"}}>Portfolio Powered By:</Typography>
      <IconContainer>
        React <img src="./react-icon.svg" alt="react" height={imgHeight} /> -
        Material UI <img src="./mui-icon.svg" alt="mui" height={imgHeight} /> -
        GSAP <img src="./gsap-icon.svg" alt="gsap" height={imgHeight} />
      </IconContainer>
    </TechList>
  );
};

export default PoweredBy;
