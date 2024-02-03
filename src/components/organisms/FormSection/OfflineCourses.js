import React from "react";
import ProgressMobileStepper from "src/components/organisms/stepperNav";
import styled from "styled-components";
import "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;
const Description = styled.div`
  max-width: 700px;
  padding: 30px 0;
  text-align: center;
  line-height: 2;
`;

const OfflineCourse = ({ activeStep, handleNext, handleBack }) => {
  return (
    <>
      <Wrapper>
        <h4>
          Tutaj mozesz zapisać się na zajęcia stacjonarne z języka francuskiego.
        </h4>
        <Description>
          Grupy tworzymy w pierwszym tygodniu września oraz pierwszym tygodniu
          stycznia. Wszystkie nasze zajęcia odbywają się w naszej szkole na ul.
          Żelaznej. Wpisz się na listę według poziomu, a my prześlemy Ci
          propozycję kursu mailowo.
        </Description>
        <div style={{ minWidth: "300px" }}>
          <ProgressMobileStepper
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default OfflineCourse;
