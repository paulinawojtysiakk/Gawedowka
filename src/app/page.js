"use client";
import "src/app/globals.css";
import React from "react";
import styled from "styled-components";
import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import GawedowkaDom from "public/images/Gawedowka-dom.JPG";
import trojka from "public/images/trojka-1.JPEG";
import domek2 from "public/images/domek2.jpg";
import studio from "public/images/studio.JPEG";
import mapa from "public/images/map.png";
import PhotoGallery from "src/components/organisms/photoGallery";
import Pricing from "src/components/organisms/pricing";

const FollowUsCont = styled.div`
  width: 100%;
  color: white;
  background-color: var(--basic-brown);
  margin-bottom: 60px;
  padding: 5px 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  color: var(--dark-brown);
`;
const IntroContainer = motion.create(styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0;
    max-width: 100vw;
  }
  @media screen and (min-width: 769px) and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    max-width: 100vw;
  }
`);

const Introduction = styled.div`
  margin: 40px 20px;
  max-width: 550px;
  text-align: justify;
  line-height: 2;

  @media screen and (min-width: 769px) and (max-width: 1180px) {
    max-width: 550px;
  }
`;

const StudyingContainer = motion.create(styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 20px 60px 20px;
  gap: 10px;
  color: var(--dark-brown);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 10px;
    padding: 20px;

    max-width: 100vw;
  }
  @media screen and (min-width: 769px) and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 50px 10px;
    max-width: 100vw;
  }
`);
const StudyingDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StudyingDetailsElement = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
`;
const StyledPhoto = styled(Image)`
  width: 100%;
  max-width: 100vw;
  border-radius: 5px;

  @media (min-width: 769px) {
    width: auto;
    max-height: 250px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    max-width: 100vw;
  }
`;

const MapContainer = styled.div`
  max-width: 700px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const Map = styled(Image)`
  width: 100%;
  max-width: 100vw;
  border-radius: 10px;
  object-fit: contain;
`;

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <FollowUsCont>
        <Typography style={{ fontSize: "13px", paddingRight: "5px" }}>
          Zadzwoń do nas: 780 433 244
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Zaobserwuj nas!
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </Typography>
      </FollowUsCont>
      <Wrapper className={styles.main}>
        <IntroContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={styles.mainIntroCont}
        >
          <Image
            src={GawedowkaDom}
            alt="bonjour"
            style={{
              borderRadius: "5px",
              maxHeight: "380px",
              maxWidth: "550px",
            }}
          ></Image>
          <Introduction className={styles.mainIntroText}>
            <h1>Apartamenty w Gawędówce</h1>
            <p>
              Zapraszamy do góralskiej Gawędówki w Krościenku nad Dunajcem.{" "}
              <br />
              Z tyłu domu jest ogród ze strumykiem, miejscem do grilla,
              huśtawkami oraz trampoliną. <br />
              Zaraz obok znajduje się Banderoza, która jest altaną z rzeczami
              starych górali kolekcjonowanymi przez lata.
              <br />W Krościenku, sercu Pienin, mozna wybrać się na piękne
              szlaki górskie, takie jak Sokolica oraz Trzy Korony.
            </p>
          </Introduction>
        </IntroContainer>

        <StudyingContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <StudyingDetails>
            <StudyingDetailsElement style={{ lineHeight: "30px" }}>
              W Gawędówce mamy Państwu do zaoferowania trzy rodzaje noclegów:
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <GroupsIcon />
              5-osobowe studio z własną kuchnią.
              {/* <StyledPhoto src={studio} alt="pokój"></StyledPhoto> */}
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <PersonIcon /> 3-osobowe pokoje na piętrze, z kuchnią na dwa
              pokoje.
              {/* <StyledPhoto src={trojka} alt="pokój"></StyledPhoto> */}
            </StudyingDetailsElement>
            <StudyingDetailsElement>
              <HomeIcon /> Osobny domek góralski 4-osobowy.
              {/* <StyledPhoto src={domek2} alt="pokój"></StyledPhoto> */}
            </StudyingDetailsElement>
          </StudyingDetails>
        </StudyingContainer>
        <Pricing></Pricing>

        <PhotoGallery></PhotoGallery>

        <MapContainer>
          <Typography style={{ fontStyle: "italic", fontSize: "23px" }}>
            Gdzie znajduje się Gawędówka
          </Typography>
          <Typography
            style={{
              fontStyle: "italic",
              paddingTop: "10px",
              textAlign: "center",
              padding: "8px",
            }}
          >
            ul. Palenicka 22, 34-450 Grywałd, Krościenko nad Dunajcem
          </Typography>
          <Map src={mapa} alt="mapa"></Map>
        </MapContainer>
      </Wrapper>

      <Footer />
    </div>
  );
};

export default Home;
