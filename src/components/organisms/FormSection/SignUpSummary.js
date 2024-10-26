"use client";
import React from "react";
import styled from "styled-components";
import Button from "src/components/atoms/Button";
import ProgressMobileStepper from "src/components/organisms/stepperNav";
import { createClient } from "@supabase/supabase-js";

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

const ConfirmationBtn = styled(Button)`
  padding: 10px 20px;
  margin: 15px 0;
`;

const supabaseURL = "https://grzsoccvxlecdfdlexrl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyenNvY2N2eGxlY2RmZGxleHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTExNjAsImV4cCI6MjA0MjMyNzE2MH0.xxdTk_R4WU_r9TH4sFoP5a-X5ufP1VunC2biVaUZH4c";
const supabase = createClient(supabaseURL, supabaseAnonKey);

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
  const submitToSupabase = async () => {
    const { data, error } = await supabase
      .from("onsite-courses-students")
      .insert([
        {
          name,
          email,
          phone_number: phoneNumber,
          age_group: ageGroup,
          course: selectedCourse.name,
        },
      ]);
    if (error) {
      alert("Błąd w zapisywaniu na kurs, spróbuj ponownie.", error);
    } else {
      alert("Super, zostałeś zapisany na kurs!", data);
    }
  };

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
        <ConfirmationBtn
          onClick={submitToSupabase}
          variant="contained"
          text="Potwierdzam zapisanie się na kurs"
        />
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
