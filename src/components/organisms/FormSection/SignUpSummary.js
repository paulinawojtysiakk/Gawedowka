import React from "react";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const SignUpSummary = ({ activeStep, handleBack, handleNext }) => {
  return (
    <>
      <h3>Dziękujemy za zapisanie się na kurs</h3>
      <p>
        Twój plan lekcji pojawi się na Twoim profilu w zakładce Moje lekcje po
        rozpoczęciu kursu
      </p>
      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </>
  );
};

export default SignUpSummary;
