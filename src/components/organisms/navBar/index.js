"use client";
import "src/app/globals.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Parzenica from "public/images/parzenica.jpg";

const Wrapper = styled.div`
  margin-bottom: 115px;
`;
const NavBarContainer = styled.div`
  background-color: rgb(255, 255, 255);
  color: var(--basic-brown);
  font-weight: 500;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: fixed;
  z-index: 10;
    @media screen and (max-width: 768px) {
    padding: 5px;
`;
const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const LogoName = styled.p`
  color: var(--basic-brown);
  font-family: Pinyon Script;
  font-size: 40px;
   @media screen and (max-width: 768px) {
font-size: 35px;
  }
`;
const NavElement = styled.p`
  margin: 0 10px;
    @media screen and (max-width: 768px) {
    margin: 5px;
`;
const StyledImage = styled(Image)`
 @media screen and (max-width: 768px) {
 max-height: 90px;
 max-width: 90px;
`
const NavBar = () => {
  return (
    <Wrapper>
      <NavBarContainer>
        <NavLogo>
          <NavElement>
            <Link href="/">
              <StyledImage
                src={Parzenica}
                alt="Parzenica"
                height={100}
                priority="false"
              />
            </Link>
          </NavElement>
          <Link href="/">
            <LogoName>Gawędówka</LogoName>
          </Link>
        </NavLogo>
        <NavElement>
              <Link href="/pages/blog" style={{marginRight:'20px', fontFamily: 'Pinyon Script', fontSize:'23px'}}>Blog</Link>
            </NavElement>
      </NavBarContainer>
    </Wrapper>
  );
};

export default NavBar;
