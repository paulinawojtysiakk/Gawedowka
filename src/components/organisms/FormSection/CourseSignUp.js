import React from "react";
import ProgressMobileStepper from "src/components/organisms/stepperNav";
import CourseList from "src/components/organisms/FormSection/CourseChoices";

const CourseSignUp = ({
  activeStep,
  handleNext,
  handleBack,
  ageGroup,

  setCourse,
}) => {
  return (
    <>
      <CourseList
        ageGroup={ageGroup}
        setCourse={setCourse}
        handleNext={handleNext}
      />

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </>
  );
};

export default CourseSignUp;
