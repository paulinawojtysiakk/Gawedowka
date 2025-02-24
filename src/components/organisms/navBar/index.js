"use client";
import "src/app/globals.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ButtonText from "src/components/atoms/Button";
import Image from "next/image";
import Parzenica from "public/images/parzenica.jpg";

const Wrapper = styled.div`
  margin-bottom: 180px;
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
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 20px;
  text-transform: uppercase;
`;
const NavElement = styled.li`
  margin: 0 10px;
  &:hover {
    color: #53a8b6;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
`;
const SignupButton = styled(ButtonText)`
  margin-left: 10px;
  background-color: #5072a7;
`;
const CourseSignup = styled(ButtonText)`
  margin-right: 40px;
  background-color: #5072a7;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <NavBarContainer>
        <NavLogo>
          <NavElement>
            <Link href="/">
              <Image
                src={Parzenica}
                alt="Parzenica"
                height={100}
                priority="false"
              />
            </Link>
          </NavElement>
          <LogoName>Gawędówka</LogoName>
        </NavLogo>
        <div>
          <NavList>
            <NavElement>
              <Link href="/pages/contact">Kontakt</Link>
            </NavElement>
          </NavList>
        </div>
      </NavBarContainer>
    </Wrapper>
  );
};

export default NavBar;
