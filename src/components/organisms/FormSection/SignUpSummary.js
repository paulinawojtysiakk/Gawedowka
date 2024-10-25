"use client";
import React from "react";
import styled from "styled-components";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: var(--basic-text-color);

  &:first-child {
    margin: 20px;
  }
`;
const DetailsSummary = styled.div`
  padding: 15px;

  p {
    padding: 10px;
  }
`;

const SignUpSummary = ({
  activeStep,
  handleBack,
  handleNext,
  name,
  email,
  phoneNumber,
  ageGroup,
  selectedCourse,
}) => {
  return (
    <Wrapper>
      <h3>Dziękujemy za zapisanie się na kurs.</h3>
      <DetailsSummary>
        Twój plan lekcji pojawi się w zakładce 'Moje lekcje' w momencie
        rozpoczęcia kursu.
      </DetailsSummary>
      <DetailsSummary>
        Podsumowanie Twojego zapisu:
        <p>Imię i nazwisko: {name}</p>
        <p>Email: {email}</p>
        <p>Numer telefonu: {phoneNumber}</p>
        <p>Grupa wiekowa: {ageGroup}</p>
        <p>
          Kurs na który jesteś zapisany: <b>{selectedCourse.name}</b>
        </p>
        <ProgressMobileStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </DetailsSummary>
    </Wrapper>
  );
};

export default SignUpSummary;
