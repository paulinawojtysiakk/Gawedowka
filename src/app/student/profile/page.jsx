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
      {/* {currentForm === "login" ? (
        <LoginPage onFormSwitch={toggleForm} />
      ) : (
        <RegistrationPage onFormSwitch={toggleForm} />
      )} */}
      <LoginPage />
      <p>Student Page</p>
    </>
  );
};

export default StudentPage;
