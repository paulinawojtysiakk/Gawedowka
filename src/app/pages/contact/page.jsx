"use client";
import * as React from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import { Card, CardContent, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafc 0%, #e1e9f7 100%);
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 50px 20px;
  flex-grow: 1;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
`;

const ContactCard = styled(Card)`
  padding: 40px 25px;
  text-align: center;
  background-color: #5072a7;
  color: #fbfbf5;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ContactDetails = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Contact = () => {
  return (
    <PageWrapper>
      <NavBar />
      <ContactContainer>
        <ContactGrid>
          <ContactCard variant="outlined">
            <ContactDetails>
              <Typography variant="h6">Dział obsługi klienta</Typography>
              <ContactDetail>
                <EmailIcon />
                <Typography>contact@learnfrench.pl</Typography>
              </ContactDetail>
              <ContactDetail>
                <PhoneIcon />
                <Typography>+48 780 455 288</Typography>
              </ContactDetail>
            </ContactDetails>
          </ContactCard>
          <ContactCard variant="outlined">
            <ContactDetails>
              <Typography variant="h6">Kontakt dla firm</Typography>
              <ContactDetail>
                <EmailIcon />
                <Typography>dlafirm@learnfrench.pl</Typography>
              </ContactDetail>
              <ContactDetail>
                <PhoneIcon />
                <Typography>+48 720 345 990</Typography>
              </ContactDetail>
              <ContactDetail>
                <BusinessIcon />
                <Typography>Oferta B2B</Typography>
              </ContactDetail>
            </ContactDetails>
          </ContactCard>
        </ContactGrid>
      </ContactContainer>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
