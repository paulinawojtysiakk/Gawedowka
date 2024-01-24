"use client";
import React, { useState } from "react";
import LoginPage from "/src/app/pages/login/page.jsx";
import RegistrationPage from "/src/app/pages/registration/page.jsx";

const StudentPage = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <p>Student Page</p>
      {currentForm === "login" ? (
        <LoginPage onFormSwitch={toggleForm} />
      ) : (
        <RegistrationPage onFormSwitch={toggleForm} />
      )}

      <button onClick={() => setCurrentForm("login")}>Login</button>
      <button onClick={() => setCurrentForm("registration")}>Register</button>
    </>
  );
};

export default StudentPage;
