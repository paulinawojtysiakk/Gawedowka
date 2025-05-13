"use client";
import * as React from "react";
import "src/app/globals.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafc 0%,rgb(247, 235, 225) 100%);
`;
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
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  color: var(--dark-brown);
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  line-height: 1.8;
`;

const BlogSection = styled.div`
  margin-bottom: 60px;
`;

const BlogTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const BlogParagraph = styled.div`
  margin-bottom: 16px;
  text-align: justify;
`;
const BlogList = styled.ul`
  padding-left: 20px;
  margin-bottom: 30px;
  list-style: disc;

  li {
    margin-bottom: 10px;
  }
`;


const Blog = () => {
  return (
    <PageWrapper>
      <NavBar />

      <FollowUsCont>
        <Typography style={{ fontSize: "13px", paddingRight: "5px" }}>
          Zadzwoń do nas: <b>780 433 244</b>
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

      <Wrapper>
        <BlogSection>
          <BlogTitle>Poradnik turystyczny: Trzy Korony i okolice</BlogTitle>
          <BlogParagraph>
            Trzy Korony to jeden z najpiękniejszych i najbardziej charakterystycznych szczytów w Pieninach. Znajduje się na terenie Pienińskiego Parku Narodowego i oferuje zapierający dech w piersiach widok na przełom Dunajca, pasmo Tatr, a przy dobrej pogodzie — nawet na Babią Górę.
          </BlogParagraph>

          <BlogParagraph>
            Szlak mozna rozpocząć z centrum Krościenka. Trasa jest dobrze oznakowana i zajmuje około 2,5 godziny w jedną stronę. Na szczycie znajduje się stalowa platforma widokowa, z której rozciąga się panorama na cały region — to niezapomniane przeżycie warte symbolicznego biletu wstępu.
          </BlogParagraph>

          <BlogParagraph>
            Krościenko jest świetną bazą wypadową, z licznymi parkingami, restauracjami i dostępem do szlaków prowadzących zarówno na Trzy Korony, jak i Sokolicę.
          </BlogParagraph>

          <BlogParagraph>
            Po zejściu z gór, warto zrelaksować się nad brzegiem Dunajca lub skorzystać ze spływu tratwą z flisakami — tradycyjna atrakcja regionu, idealna do podziwiania Pienin z innej perspektywy.
          </BlogParagraph>

          <BlogParagraph>
            Okolice Trzech Koron to także:
          </BlogParagraph>

          <BlogList>
            <li>⛪ Drewniane kościółki w Grywałdzie i okolicach – perełki architektury ludowej</li>
            <li>🛶 Wypożyczalnie kajaków i rowerków wodnych</li>
            <li>🚴‍♀️ Trasa rowerowa wokół jeziora – idealna dla rodzin i aktywnych</li>
            <li>🏰 Zamek w Czorsztynie – ruiny z pięknym widokiem na Jezioro Czorsztyńskie</li>
            <li>🏞️ Zapora wodna w Niedzicy – doskonałe miejsce na spacer i zdjęcia</li>
          </BlogList>

          <BlogParagraph>
            Grywałd to prawdziwa oaza spokoju. To właśnie tu znajduje się Gawędówka — idealne miejsce na odpoczynek po górskich wędrówkach. Bliskość natury, cicha okolica i szybki dojazd do głównych szlaków czynią z niej świetną bazę wypadową do eksplorowania Pienin.
          </BlogParagraph>
        </BlogSection>

      </Wrapper>

      <Footer />
    </PageWrapper>
  );
};

export default Blog;

