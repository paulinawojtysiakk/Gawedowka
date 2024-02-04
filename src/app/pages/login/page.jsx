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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LoginContainer = styled.div`
  padding: 20px;
  margin: 100px;
  text-align: center;
`;
const Form = styled.form`
  margin: 20px 0 60px 0;
`;
const Button = styled(ButtonText)`
  margin: 30px;
  background-color: #53a8b6;
`;
const RegButton = styled(ButtonText)`
  margin: 20px;
  color: lightblue;
  border-color: #f9f6f0;
`;
const Text = styled.p`
  margin-bottom: 10px;
`;

const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("userToken", JSON.stringify(`${email}${password}`));
    console.log(email, password);
  };

  return (
    <>
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
            <Button text="Zaloguj się" variant="contained" type="submit" />
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
    </>
  );
};

export default Login;
