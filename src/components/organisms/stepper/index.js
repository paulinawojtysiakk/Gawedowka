"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ProgressMobileStepper from "../stepperNav";
import CourseSignUpStudentDetails from "src/components/organisms/FormSection/form1";
import SignUpForm2 from "src/components/organisms/FormSection/form2";
import SignUpForm3 from "../FormSection/form3";

const CourseSignupStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    "Wpisz swoje dane",
    "Wybierz kurs na który chcesz się zapisać",
    "Potwierdź swoje dane i swój wybór",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderForms = () => {
    switch (activeStep) {
      case 0:
        return <CourseSignUpStudentDetails />;
      case 1:
        return <SignUpForm2 />;
      case 2:
        return <SignUpForm3 />;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderForms()}
      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Box>
  );
};

export default CourseSignupStepper;

// const steps = [
//   "Wpisz swoje dane",
//   "Wybierz kurs na który chcesz się zapisać",
//   "Potwierdź swoje dane i swój wybór",
// ];

// const CourseSignupStepper = () => {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper activeStep={1} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <ProgressMobileStepper />
//     </Box>
//   );
// };
