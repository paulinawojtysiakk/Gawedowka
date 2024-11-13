"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Footer from "src/components/organisms/footer";
import BasicTextField from "src/components/atoms/TextField/textField";
import ButtonText from "src/components/atoms/Button";

const Wrapper = styled.div`
  color: var(--basic-text-color);

`;
const LoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  color: var(--basic-text-color);
  background-color: white;
  border-radius: 8px;
`;
const Form = styled.form`
  margin: 20px 0;
`;

const LoginButton = styled(ButtonText)`
  margin: 10px;
`;
const RegButton = styled(ButtonText)`
margin: 10px;
`;
const Text = styled.p`
  margin-bottom: 10px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("userToken", JSON.stringify(`${email}${password}`));
    console.log(email, password);
  };

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Wrapper className={styles.main}>
        <LoginContainer>
          <Text>Zaloguj się do swojego konta</Text>
          <Form onSubmit={handleSubmit}>
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
           <LoginButton text="Zaloguj się" variant="contained" type="submit" />

          </Form>

          <Text>Nie masz swojego konta?</Text>
          <RegButton
            text="Zarejestruj się"
            variant="outlined"
            href="/pages/registration"
          />
        </LoginContainer>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Login;
