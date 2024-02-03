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
  margin: 100px;
  display: flex;
  align-items: center;
`;

const Introduction = styled.div`
  margin: 50px;
  max-width: 700px;
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
    <Wrapper className={styles.main}>
      <NavBar />
      <IntroContainer>
        <Image
          src={Bonjour}
          alt="bonjour"
          height="350"
          style={{ borderRadius: "5px" }}
        ></Image>
        <Introduction>
          <h3>Lorem ipsum lorem lorem</h3>
          <p>
            Darmowa platforma do nauki języka polskiego dla ukraińskich uczniów.
            Nasi nauczyciele podczas grupowych lekcji online szybko i w
            praktyczny sposób nauczą Cię używać języka polskiego w codziennych
            sytuacjach. Darmowa platforma do nauki języka polskiego dla
            ukraińskich uczniów. Nasi nauczyciele podczas grupowych lekcji
            online szybko i w praktyczny sposób nauczą Cię używać języka
            polskiego w codziennych sytuacjach.
          </p>
        </Introduction>
      </IntroContainer>
      <OurOffer />
      <ImageContainerDets>
        <p>Lorem ipsum lorem lorem Lorem ipsum lorem lorem Lorem ipsum lorem</p>
        <Image src={Eiffel} alt="book-eiffel" height="350"></Image>
      </ImageContainerDets>
      <Footer />
    </Wrapper>
  );
};

export default Home;
