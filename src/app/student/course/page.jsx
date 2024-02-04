"use client";
import React, { useState } from "react";
import styles from "/src/app/page.module.css";
import NavBar from "src/components/organisms/navBar";
import OfflineCourse from "src/components/organisms/formSection/OfflineCourses";
import CourseSignUpStudentDetails from "src/components/organisms/formSection/StudentCourseSignup";
import CourseSignUp from "src/components/organisms/formSection/CourseSignUp";
import SignUpSummary from "src/components/organisms/formSection/SignUpSummary";
import Wizard from "src/components/templates/wizzard";
import Footer from "src/components/organisms/footer";

const steps = [
  "Kursy stacjonarne",
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
  const [selectedCourse, setSelectedCourse] = useState({});

  const setCourse = (course) => {
    setSelectedCourse(course);
  };

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
          <OfflineCourse
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
      case 1:
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
          />
        );
      case 2:
        return (
          <CourseSignUp
            handleNext={handleNext}
            ageGroup={ageGroup}
            setCourse={setCourse}
            handleBack={handleBack}
            activeStep={activeStep}
          />
        );
      case 3:
        return (
          <SignUpSummary
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            ageGroup={ageGroup}
            setCourse={setCourse}
            selectedCourse={selectedCourse}
            // kluczowy jest ten zapis do trzymania danych
          />
        );
    }
  };

  return (
    <>
      <NavBar />

      <div className={styles.main}>
        <Wizard
          steps={steps}
          renderForms={renderForms}
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
      </div>
      <Footer />
    </>
  );
};

export default StudentCourseSignup;
