"use client";
import React from "react";
import styled from "styled-components";
import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import OurOffer from "src/components/organisms/ourOffer";

import Bonjour from "public/images/bonjour.jpeg";
import Eiffel from "public/images/book-eiffel.png";

import { Provider } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

const Introduction = styled.div`
  margin: 50px;
  max-width: 600px;
  text-align: justify;
  line-height: 2;
`;

const ImageContainerDets = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 90px;
`;

const Home = () => {
  return (
    <>
      <NavBar />

      <Wrapper className={styles.main}>
        <IntroContainer>
          <Image
            src={Bonjour}
            alt="bonjour"
            height="380"
            style={{ borderRadius: "5px" }}
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
        <ImageContainerDets>
          <p>
            Lorem ipsum lorem lorem Lorem ipsum lorem lorem Lorem ipsum lorem
          </p>
          <Image src={Eiffel} alt="book-eiffel" height="350"></Image>
        </ImageContainerDets>
        <OurOffer />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
