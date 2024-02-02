"use client";
import React from "react";
import styled from "styled-components";
import styles from "./page.module.css";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Wrapper className={styles.main}>
      <NavBar />

      <Footer />
    </Wrapper>
  );
};

export default Home;
