import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import Header from "../Header/Header";

const ContactContainer = styled(Box)({
  marginBottom: "40px",
});

const InfoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "30px",
});

const Contact = () => {
  return (
    <ContactContainer>
      <Header text="Contact" />
      <InfoContainer>
        <Typography>
          Email:{" "}
          <Link href="mailto:erickbravo120@gmail.com?subject=Subject&body=Body%20goes%20here'">
            erickbravo120@gmail.com
          </Link>
        </Typography>
        <Typography>phone: (909) 354-6272</Typography>
      </InfoContainer>
    </ContactContainer>
  );
};

export default Contact;
