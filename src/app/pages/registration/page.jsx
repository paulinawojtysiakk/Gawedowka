"use client";
import React, { useState } from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import ButtonText from "src/components/atoms/Button";
import BasicTextField from "src/components/atoms/TextField/textField";

const Wrapper = styled.div`
color: var(--basic-text-color);
`;

const RegistrationContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
`;

const Form = styled.form`
  margin: 10px 0 ;
`;

const Button = styled(ButtonText)`
  margin: 10px;
`;
const LoginButton = styled(ButtonText)`
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
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default Register;
