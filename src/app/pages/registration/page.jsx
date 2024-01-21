"use client";
import * as React from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";

const RegistrationContainer = styled.div`
  padding: 20px;
  margin: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const RegistrationPage = () => {
  return (
    <Wrapper className={styles.main}>
      <NavBar />
      <RegistrationContainer>
        <div>Rejestracja</div>
      </RegistrationContainer>
      <Footer />
    </Wrapper>
  );
};

export default RegistrationPage;
