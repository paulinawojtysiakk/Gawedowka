"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ButtonText from "src/components/atoms/Button";
import Image from "next/image";
import Logo from "public/images/images.png";

const NavBarContainer = styled.div`
  background-color: #fffff9;
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 5px;
`;
const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 20px;
`;

const NavElement = styled.li`
  margin: 0 20px;
`;

const SignupButton = styled(ButtonText)`
  margin-left: 10px;
  background-color: #53a8b6;
`;

const CourseSignup = styled(ButtonText)`
  margin-right: 40px;
  background-color: #53a8b6;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLogo>
        <NavElement>
          <Link href="/">
            <Image src={Logo} alt="Logo" height={100} priority="false" />
          </Link>
        </NavElement>
        <Link href="/student/course">
          <CourseSignup variant="contained" text="Kursy stacjonarne" />
        </Link>
      </NavLogo>
      <div>
        <NavList>
          <NavElement>
            <Link href="/pages/about">O nas</Link>
          </NavElement>
          <NavElement>
            <Link href="/pages/courses">Kursy online</Link>
          </NavElement>
          <NavElement>
            <Link href="/pages/contact">Kontakt</Link>
          </NavElement>
          <NavElement>
            <Link href="/student/profile">Mój profil</Link>
          </NavElement>

          <SignupButton
            variant="contained"
            text="Logowanie"
            href="/pages/login"
          ></SignupButton>
          <SignupButton
            variant="contained"
            text="Rejestracja"
            href="/pages/registration"
          ></SignupButton>
        </NavList>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
