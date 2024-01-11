import React from "react";
import styled from "styled-components";
import ProgressMobileStepper from "src/components/organisms/stepperNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  &:first-child {
    margin: 20px;
  }
`;
const DetailsSummary = styled.p`
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
      <h3>Dziękujemy za zapisanie się na kurs</h3>
      <DetailsSummary>
        Twój plan lekcji pojawi się na Twoim profilu w zakładce Moje lekcje po
        rozpoczęciu kursu
      </DetailsSummary>
      <DetailsSummary>
        Podsumowanie Twojego zapisu:
        <p>Imię i nazwisko: {name}</p>
        <p>Email: {email}</p>
        <p>Numer telefonu: {phoneNumber}</p>
        <p>Grupa wiekowa: {ageGroup}</p>
        <p>Kurs na który jesteś zapisany: {selectedCourse.name}</p>
      </DetailsSummary>

      <ProgressMobileStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Wrapper>
  );
};

export default SignUpSummary;
