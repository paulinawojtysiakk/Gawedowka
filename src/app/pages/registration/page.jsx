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
  margin: 10px 0 50px 0;
`;

const Button = styled(ButtonText)`
  margin: 10px;
  background-color: #53a8b6;
`;
const LoginButton = styled(ButtonText)`
  color: lightblue;
  border-color: #f9f6f0;
`;

const Text = styled.p`
  margin: 10px;
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
    <>
      <NavBar />
      <Wrapper className={styles.main}>
        <RegistrationContainer>
          <Text>Tutaj możesz założyć konto:</Text>
          <Form onSubmit={handleSubmit}>
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
            <Text>Akceptuję regulamin</Text>
            <Button text="Zarejestruj się" variant="contained" type="submit" />
          </Form>
          <Text>Masz już konto?</Text>
          <LoginButton
            text="Zaloguj się"
            variant="outlined"
            href="/pages/login"
          ></LoginButton>
        </RegistrationContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Register;
