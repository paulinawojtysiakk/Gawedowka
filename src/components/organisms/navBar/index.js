"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ButtonText from "src/components/atoms/Button";

const NavBarContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  margin: 0 20px;
`;

const NavElement = styled.li`
  margin: 0 20px;
`;

const SignupButton = styled(ButtonText)`
  margin-left: 10px;
`;

const CourseSignup = styled(ButtonText)`
  margin-right: 40px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLogo>
        <NavElement>
          <Link href="/">Logo</Link>
        </NavElement>
        <Link href="/student/course">
          <CourseSignup
            variant="contained"
            text="Zapisz się na kurs"
            color="secondary"
          />
        </Link>
      </NavLogo>
      <div>
        <NavList>
          <NavElement>
            <Link href="/pages/about">O nas</Link>
          </NavElement>
          <NavElement>
            <Link href="/pages/courses">Kursy</Link>
          </NavElement>
          <NavElement>
            <Link href="/pages/contact">Kontakt</Link>
          </NavElement>

          <SignupButton
            variant="contained"
            text="Logowanie"
            color="secondary"
          ></SignupButton>
          <SignupButton
            variant="contained"
            text="Rejestracja"
            color="secondary"
          ></SignupButton>
        </NavList>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
