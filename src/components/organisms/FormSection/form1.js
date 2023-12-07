"use client";
import * as React from "react";
import BasicTextField from "src/components/atoms/TextField/textField";
import BasicSelect from "src/components/atoms/Select";
import Button from "@mui/material/Button";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const CourseSignUpStudentDetails = ({ activeStep, handleNext, handleBack }) => {
  const [name, setName] = React.useState("");

  const signUp = () => {
    console.log("Post request do bazy danych", { name });
    handleNext();
  };

  return (
    <>
      <BasicTextField
        // required
        id="outlined-required"
        label="Imię i nazwisko"
        // background-color="white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></BasicTextField>

      {/* <BasicTextField
        required
        id="outlined-required"
        label="Email"
        color="white"
      ></BasicTextField>

      <BasicTextField
        required
        id="outlined-required"
        label="Numer telefonu"
        color="white"
      ></BasicTextField>

      <BasicSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        text="Grupa wiekowa"
        label="Grupa wiekowa"
        option1="6-9"
        option2="10-12"
        option3="13-18"
      ></BasicSelect> */}

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={signUp}
        handleBack={handleBack}
      />
    </>
  );
};

export default CourseSignUpStudentDetails;
