"use client";
import React, { useState } from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import ButtonText from "src/components/atoms/Button";
import BasicTextField from "src/components/atoms/TextField/textField";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RegistrationContainer = styled.div`
  padding: 20px;
  margin: 100px;
  text-align: center;
`;

const Form = styled.form`
  margin: 30px 0 80px 0;
`;

const Button = styled(ButtonText)`
  margin: 10px;
  background-color: #53a8b6;
`;
const LoginButton = styled(ButtonText)`
  color: lightblue;
  border-color: #f9f6f0;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  };

  return (
    <Wrapper className={styles.main}>
      <NavBar />
      <RegistrationContainer>
        <p>Tutaj możesz założyć konto:</p>
        <form onSubmit={handleSubmit}>
          <BasicTextField
            required
            label="Imię i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></BasicTextField>
          <BasicTextField
            required
            label="Twój email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></BasicTextField>
          <BasicTextField
            required
            label="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></BasicTextField>
          <p>Akceptuję regulamin</p>
          <Button text="Zarejestruj się" variant="contained" type="submit" />
        </form>
        <p>Masz już konto?</p>
        <LoginButton
          text="Zaloguj się"
          variant="outlined"
          href="/pages/login"
        ></LoginButton>
      </RegistrationContainer>
      <Footer />
    </Wrapper>
  );
};

export default Register;
