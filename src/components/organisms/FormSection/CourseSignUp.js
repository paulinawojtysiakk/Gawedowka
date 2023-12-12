import React from "react";
import ProgressMobileStepper from "src/components/organisms/stepperNav";
import CourseList from "src/components/organisms/FormSection/CourseChoices";

const CourseSignUp = ({
  activeStep,
  handleNext,
  handleBack,
  ageGroup,
  level,
}) => {
  return (
    <>
      <CourseList ageGroup={ageGroup} level={level} />

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </>
  );
};

export default CourseSignUp;
