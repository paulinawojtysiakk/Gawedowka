"use client";
import "src/app/globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Parzenica from "public/images/parzenica.jpg";

const FooterContainer = styled.div`
  background-color:rgb(255, 255, 255);
  color: var(--dark-brown);
  border: 1px solid cream;
  border-radius: 5px
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: 30px;
  margin-top: auto;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
`;
const LogoContainer = styled.div`
  padding: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const FooterColumn = styled.ul`
  margin-top: 10px;
  padding: 0 20px;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
  }
`;

const FooterElement = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  list-style: none;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={Parzenica} alt="Parzenica" height={100} priority="false" />
      </LogoContainer>
      <TextContainer>
        <FooterColumn>
          <b>Kontakt</b>
          <FooterElement>+48 780 433 244</FooterElement>

          <FooterElement>
            <p>apartamentygawedowka@gmail.com</p>
          </FooterElement>
        </FooterColumn>
        <FooterColumn>
          <b>Adres</b>
          <FooterElement>
            ul. Palenicka 22 <br />
            34-450, Grywałd <br />
            Krościenko nad Dunajcem
          </FooterElement>
        </FooterColumn>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
