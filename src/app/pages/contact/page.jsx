"use client";
import * as React from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";

const ContactContainer = styled.div`
  padding: 20px;
  margin-top: 150px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Contact = () => {
  return (
    <>
      <NavBar />
      <Wrapper className={styles.main}>
        <ContactContainer>
          <div>Hello hi</div>
        </ContactContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
