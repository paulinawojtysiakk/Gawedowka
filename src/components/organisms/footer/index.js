"use client";
import "src/app/globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Logo from "public/images/images.png";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterContainer = styled.div`
  background-color: #fffff9;
  color: var(--basic-text-color);
  border: 1px solid cream;
  border-radius: 5px
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 100px;
 display: flex;
 justify-content: space-between;
`;
const LogoContainer = styled.div`
  padding: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FooterColumn = styled.ul`
  padding: 0 80px;
`;

const FooterElement = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  list-style: none;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={Logo} alt="Logo" height={100} priority="false" />
      </LogoContainer>
      <TextContainer>
        <FooterColumn>
          <b>Prawne</b>
          <FooterElement>
            <Link href="/legal/przewodnik.pdf" target="_blank">
              Regulamin
            </Link>
          </FooterElement>
          <FooterElement>Dla nauczyciela</FooterElement>
        </FooterColumn>

        <FooterColumn>
          <b>Linki</b>
          <FooterElement>
            <Link href="/pages/registration">Rejestracja</Link>
          </FooterElement>
          <FooterElement>
            <Link href="/pages/login"> Logowanie</Link>
          </FooterElement>
        </FooterColumn>
        <FooterColumn>
          <b>Napisz do nas</b>
          <FooterElement>
            <Link href="/pages/contact">Contact@learnfrench.pl</Link>
          </FooterElement>
          <FooterElement>
            <FacebookIcon />

            <Link
              href="https://www.facebook.com/learn.french.school/"
              target="_blank"
            >
              Facebook{" "}
            </Link>
          </FooterElement>
        </FooterColumn>
        <FooterColumn>
          <b>Kontakt</b>
          <FooterElement>
            +48 507 888 201 <br />
            ul. Żelazna 59 <br />
            Warszawa <br />
            00-802
          </FooterElement>
        </FooterColumn>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
