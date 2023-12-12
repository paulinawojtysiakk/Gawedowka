import React from "react";
import ProgressMobileStepper from "src/components/organisms/stepperNav";
import CourseList from "src/components/organisms/FormSection/CourseChoices";

const courses = [{ level: "A1" }];

const CourseSignUp = ({ activeStep, handleNext, handleBack, ageGroup }) => {
  return (
    <>
      <CourseList ageGroup={ageGroup} t />

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </>
  );
};

export default CourseSignUp;
