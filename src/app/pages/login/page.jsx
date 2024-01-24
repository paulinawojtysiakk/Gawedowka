"use client";
import * as React from "react";
import { useState } from "react";
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
  margin: 30px 0 80px 0;
`;

const Button = styled(ButtonText)`
  margin: 10px;
  background-color: #53a8b6;
`;

const RegButton = styled(ButtonText)`
  margin: 10px;
  color: lightblue;
  border-color: #f9f6f0;
`;

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Wrapper className={styles.main}>
      <NavBar />
      <LoginContainer>
        <p>Zaloguj się do swojego konta</p>
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
        <p>Nie masz swojego konta?</p>
        <RegButton
          text="Zarejestruj się"
          variant="outlined"
          onClick={() => onFormSwitch("registration")}
        ></RegButton>
      </LoginContainer>
      <Footer />
    </Wrapper>
  );
};

export default Login;
