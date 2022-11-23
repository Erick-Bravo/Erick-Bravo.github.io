import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { breakpoints } from "../../../StyleTheme/theme";
import Header from "../Header/Header";

const SummaryContainer = styled(Box)({
  boxSizing: "border-box",
  padding: "40px 50px",
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
      <Header text="Summary" />
      <Paragraph paragraph>
        Hello! My name is Erick Bravo and I am a self-motivated and enthusiastic
        software developer from California. I am a{" "}
        <span style={{ fontWeight: "bold" }}>front-end developer</span> with
        many <span style={{ fontWeight: "bold" }}>back-end</span> capabilities
        and have worked on high impact client projects which required effective
        and extensive direct communication with design teams and product
        management. I absolutely love putting in the time to learn and explore
        new tech if it means moving the team forward. Besides past client
        projects, I have revamped the Yosemite community website which benefits
        2000+ employees who live in Yosemite National Park. My entire career has
        been so far fully remote. I have worked with teammates of all
        time zones, and I am eager to provide skillful contributions on a
        project of high demand and reward.
      </Paragraph>
      <Testimonial align="center">
        “I can not imagine where [the project] would be without Erick, nor would
        I like to imagine that reality. He has continued to be a key member of
        the team from the very beginning.”{" "}
        <span style={{ marginTop: "8px", fontStyle: "normal", fontSize: "12px" }}>
          - Brandon, colleague Detroit Labs
        </span>
      </Testimonial>
    </SummaryContainer>
  );
};

export default Summary;
