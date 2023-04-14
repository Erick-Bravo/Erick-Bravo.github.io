import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { breakpoints } from "../../../StyleTheme/theme";
import { SummaryAnchor } from "../../Navbar/NavBar.styles";
import Header from "../Header/Header";
import Skills from "./Skills";

const SummaryContainer = styled(Box)({
  marginBottom: "40px",
  width: "100%",
});

const Paragraph = styled(Typography)({
  fontSize: "14px",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "16px",
  },
});

const Testimonial = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "14px",
  marginTop: "20px",
  fontStyle: "italic",
  [`@media(min-width: ${breakpoints.tablet}px)`]: {
    fontSize: "14px",
    padding: "0 40px",
  },
});

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryAnchor id="Summary"/>
      <Header text="Summary" />
      <Paragraph paragraph>
        As a <span style={{ fontWeight: "bold" }}>Frontend React developer</span> with
        many <span style={{ fontWeight: "bold" }}>Fullstack</span> capabilities, I am a self-motivated and enthusiastic
        problem solver with 3 years programming experience ready to take on a new task. I have worked on a variety of projects both large and small with a 
        focus on responsiveness and performance, while engaging in an Agile workplace.
        I enjoy working in environments that require effective
        and extensive direct communication with design teams and stakeholders. 
        During my last role, I experienced exponential growth in areas of leadership and 
        professional software development due to my need to be in a constant learning and curious state.
        I have worked with teammates of all
        time zones across the United States and I am eager to again provide skillful contributions on an existing project, or a new one.
      </Paragraph>
      <Testimonial align="center">
        “I can not imagine where [the project] would be without Erick, nor would
        I like to imagine that reality. He has continued to be a key member of
        the team from the very beginning.”{" "}
        <span style={{ marginTop: "8px", fontStyle: "normal", fontSize: "12px" }}>
          - Brandon, colleague Detroit Labs
        </span>
      </Testimonial>
      <Header text="Skills" />
      <Skills />
    </SummaryContainer>
  );
};

export default Summary;
