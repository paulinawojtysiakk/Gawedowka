"use client";
import React from "react";
import CourseSignupStepper from "src/components/organisms/stepper";

const Wizard = ({ steps, renderForms, handleNext, handleBack, activeStep }) => {
  return (
    <CourseSignupStepper
      steps={steps}
      renderForms={renderForms}
      handleNext={handleNext}
      handleBack={handleBack}
      activeStep={activeStep}
    />
  );
};

export default Wizard;
