"use client";
import React from "react";
import styles from "/src/app/page.module.css";
import CourseSignupStepper from "src/components/organisms/stepper";
import NavBar from "src/components/organisms/navBar";
import CourseSignUpStudentDetails from "src/components/organisms/FormSection/StudentCourseSignup";
import CourseSignUp from "src/components/organisms/FormSection/CourseSignUp";
import SignUpSummary from "src/components/organisms/FormSection/SignUpSummary";
import Wizard from "src/components/templates/wizzard";
import CourseList from "src/components/organisms/FormSection/CourseChoices";

const steps = [
  "Wpisz swoje dane",
  "Wybierz kurs na który chcesz się zapisać",
  "Potwierdź swoje dane i swój wybór",
];

const StudentCourseSignup = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [ageGroup, setAgeGroup] = React.useState("");
  const [level, setLevel] = React.useState("");

  const [course, setCourse] = useState();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderForms = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (

  
          <CourseSignUpStudentDetails
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            level={level}
            setLevel={setLevel}
          />
       
        );
      case 1:
        return (
          <CourseSignUp
            handleNext={handleNext}
            ageGroup={ageGroup}
            level={level}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
      case 2:
        return (
          <SignUpSummary
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
    }
  };

  return (
    <div className={styles.main}>
      <NavBar />

      <Wizard
        steps={steps}
        renderForms={renderForms}
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
      />
    </div>
  );
};

export default StudentCourseSignup;
