"use client";
import * as React from "react";
import BasicTextField from "src/components/atoms/TextField/textField";
import BasicSelect from "src/components/atoms/Select";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const CourseSignUpStudentDetails = ({
  activeStep,
  handleNext,
  handleBack,
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  ageGroup,
  setAgeGroup,
}) => {
  const signUp = () => {
    console.log("Post request do bazy danych", {
      name,
      email,
      phoneNumber,
      ageGroup,
    });

    setAgeGroup(ageGroup);
    handleNext();
  };

  return (
    <div>
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
    </div>
  );
};

export default CourseSignUpStudentDetails;
