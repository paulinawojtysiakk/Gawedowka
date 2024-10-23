import React from "react";
import styled from "styled-components";
import styles from "src/app/page.module.css";
import BasicCard from "src/components/molecules/Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
`;
const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  // margin: 30px;
  list-style: none;
`;
const CardWrapper = styled.li`
  margin: 0 10px;
  padding: 15px;
  max-width: 33%;
  flex: 1;
  // max-height: 500px;
  text-align: justify;
`;

const cardsContent = [
  {
    title: "Dla ucznia",
    description:
      "Jeśli chcesz zostać jednym z uczniów naszej szkoły, kliknij tutaj aby załozyć konto oraz zapisać się na zajęcia.",
    buttonText: "Ucz się z nami",
  },
  {
    title: "Dla nauczyciela",
    description:
      "Jeśli chcesz zostać nauczycielem w naszej szkole, kliknij tutaj aby załozyć konto i dowiedzieć się o naszym procesie rekrutacyjnym.",
    buttonText: "Współpracuj z nami",
  },
  {
    title: "Oferta B2B",
    description:
      "Jeśli jesteś zainteresowany naszą ofertą B2B, kliknij tutaj aby dowiedzieć się więcej szczegółowych informacji.",
    buttonText: "Wybierz ofertę",
  },
];

const OurOffer = () => {
  return (
    <Wrapper>
      <CardContainer>
        {cardsContent.map((card, index) => (
          <CardWrapper key={index}>
            <BasicCard
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              titleColor="var(--basic-text-color)"
              descriptionColor="var(--basic-text-color)"
              src="/images/lefrancaise.jpeg"
              variant="contained"
            ></BasicCard>
          </CardWrapper>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default OurOffer;
