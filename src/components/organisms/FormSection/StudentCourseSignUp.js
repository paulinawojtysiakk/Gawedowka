"use client";
import * as React from "react";
import BasicTextField from "src/components/atoms/TextField/textField";
import BasicSelect from "src/components/atoms/Select";
import Button from "@mui/material/Button";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const CourseSignUpStudentDetails = ({
  activeStep,
  handleNext,
  handleBack,
  setAgeGroup,
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [ageGroup, setAgeGroup] = React.useState("");

  const signUp = () => {
    console.log("Post request do bazy danych", { name });
    console.log("Post request do bazy danych", { email });
    console.log("Post request do bazy danych", { phoneNumber });
    console.log("Post request do bazy danych", { ageGroup });
    setAgeGroup(ageGroup);
    handleNext();
  };

  const getAgeGroup = () => {
    if (ageGroup === "option1") {
      return "6-9";
    } else if (ageGroup === "option2") {
      return "10-12";
    } else if (ageGroup === "option3") {
      return "13-18";
    } else {
      return "N/A";
    }
  };

  return (
    <>
      <BasicTextField
        required
        id="outlined-required"
        label="Imię i nazwisko"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></BasicTextField>

      <BasicTextField
        required
        id="outlined-required"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <BasicTextField
        required
        id="outlined-required"
        label="Numer telefonu"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></BasicTextField>

      <BasicSelect
        required
        id="demo-simple-select"
        label="Grupa wiekowa"
        text="Grupa wiekowa"
        option1="9-12"
        option2="13-16"
        option3="17-20"
        value={ageGroup}
        onChange={(e) => {
          setAgeGroup(e.target.value);
        }}
      ></BasicSelect>

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={signUp}
        handleBack={handleBack}
      />
    </>
  );
};

export default CourseSignUpStudentDetails;
