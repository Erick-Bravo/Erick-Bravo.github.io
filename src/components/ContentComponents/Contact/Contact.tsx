import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const ContactContainer = styled(Box)({
  marginBottom: "40px",
});

const Contact = () => {
  return (
    <ContactContainer>
      <Header text="Contact" />
      Contact Component
    </ContactContainer>
  );
};

export default Contact;
