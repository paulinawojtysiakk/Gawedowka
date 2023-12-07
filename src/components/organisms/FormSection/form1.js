import * as React from "react";
import BasicTextField from "src/components/atoms/TextField/textField";
import BasicSelect from "src/components/atoms/Select";

const CourseSignUpStudentDetails = () => {
  return (
    <>
      <BasicTextField
        required
        id="outlined-required"
        label="Imię i nazwisko"
        background-color="white"
      ></BasicTextField>

      <BasicTextField
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
      ></BasicSelect>
    </>
  );
};

export default CourseSignUpStudentDetails;
