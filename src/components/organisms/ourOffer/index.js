import React from "react";
import styled from "styled-components";
import BasicCard from "src/components/molecules/Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.ul`
  display: flex;
  padding: 30px;
  margin: 30px;
  list-style: none;
`;
const CardWrapper = styled.li`
  margin: 0 20px;
  padding: 15px;
  max-width: 300px;
  height: 500px;
  text-align: justify;
`;

const OurOffer = () => {
  return (
    <Wrapper>
      <CardContainer>
        <CardWrapper>
          <BasicCard
            title="Dla ucznia"
            description="Jeśli chcesz zostać jednym z uczniów naszej szkoły, kliknij tutaj aby załozyć konto oraz zapisać się na zajęcia."
            src="/images/logo.jpeg"
            buttonText="Ucz się z nami"
          ></BasicCard>
        </CardWrapper>
        <CardWrapper>
          <BasicCard
            title="Dla nauczyciela"
            description="Jeśli chcesz zostać nauczycielem w naszej szkole, kliknij tutaj aby załozyc konto oraz dowiedzieć się o naszym procesie rekrutacyjnym."
            src="/images/logo.jpeg"
            buttonText="Współpracuj z nami"
          ></BasicCard>
        </CardWrapper>
        <CardWrapper>
          <BasicCard
            title="Oferta B2B"
            description="Jeśli jesteś zainteresowany naszą ofertą B2B, kliknij tutaj aby dowiedzieć się więcej szczegółowych informacji."
            src="/images/logo.jpeg"
            buttonText="Wybierz ofertę"
          ></BasicCard>
        </CardWrapper>
      </CardContainer>
    </Wrapper>
  );
};

export default OurOffer;
