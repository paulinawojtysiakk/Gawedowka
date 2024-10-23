"use client";
import "src/app/globals.css";
import React, { Fragment } from "react";
import styled from "styled-components";
import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import OurOffer from "src/components/organisms/ourOffer";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

import Bonjour from "public/images/bonjour.jpeg";
import Eiffel from "public/images/book-eiffel.png";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--basic-text-color);
`;
const IntroContainer = motion.create(styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 100px;
`);

const Introduction = styled.div`
  margin: 50px 20px;
  max-width: 600px;
  text-align: justify;
  line-height: 2;
`;

const StudyingContainer = motion.create(styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 90px 20px;
  color: var(--basic-text-color);
`);
const StudyingDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`;
const StudyingDetailsElement = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Wrapper className={styles.main}>
        <IntroContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={Bonjour}
            alt="bonjour"
            style={{
              borderRadius: "5px",
              maxHeight: "380px",
              maxWidth: "550px",
            }}
          ></Image>
          <Introduction>
            <h1>Język francuski to nasza pasja</h1>
            <p>
              Ogólny kurs francuskiego w Learn French to najczęściej kilkuletni
              cykl nauki prowadzący od poziomu początkującego A1 do poziomu
              biegłości językowej C1/C2. Jeden poziom zaawansowania realizowany
              jest przez 2 semestry nauki. Nasze programy nauczania języka
              francuskiego realizujemy z wykorzystaniem serii podręczników
              opracowanych we Francji przez wydawnictwo Hachette. Po każdym
              etapie nasi Słuchacze mogą przystępować do międzynarodowych
              egzaminów DELF (A1-B2) i DALF (C1, C2).
            </p>
          </Introduction>
        </IntroContainer>
        <OurOffer />

        <StudyingContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <StudyingDetails>
            <StudyingDetailsElement>
              W naszej szkole masz wybór różnych trybów nauki:
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <GroupsIcon /> W ramach zajęć grupowych
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <PersonIcon /> W ramach zajęć indywidualnych
            </StudyingDetailsElement>

            <StudyingDetailsElement>
              <LaptopMacIcon /> Z domu, na zajęciach online
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <HomeIcon /> W naszej szkole, na zajęciach stacjonarnych
            </StudyingDetailsElement>
          </StudyingDetails>
          <Image src={Eiffel} alt="book-eiffel" height="350"></Image>
        </StudyingContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
