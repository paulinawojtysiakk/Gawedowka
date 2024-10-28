"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-bottom: 50px;
`;

const CourseSignupStepper = ({ steps, renderForms, activeStep }) => {
  return (
    <StyledBox sx={{ width: "100%" }}>
      <Card sx={{ minHeight: "600px" }}>
        <CardContent>
          <Stack
            direction="column"
            divider={<Divider flexItem />}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ minHeight: "500px" }}>{renderForms(activeStep)}</Box>
            {/* <ProgressMobileStepper
             activeStep={activeStep}
             handleNext={handleNext}
             handleBack={handleBack}
           /> */}
          </Stack>
        </CardContent>
      </Card>
    </StyledBox>
  );
};

export default CourseSignupStepper;
