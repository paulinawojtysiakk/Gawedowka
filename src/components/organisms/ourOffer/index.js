import React from "react";
import styled from "styled-components";
import styles from "src/app/page.module.css";
import BasicCard from "src/components/molecules/Card";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 10px;
  }
`;
const CardWrapper = styled.li`
  margin: 0 10px;
  padding: 10px;
  max-width: 33%;
  flex: 1;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const cardsContent = [
  {
    title: "Dla ucznia",
    description:
      "Jeśli chcesz zostać jednym z uczniów naszej szkoły, kliknij tutaj aby załozyć konto oraz zapisać się na zajęcia.",
    buttonText: "Ucz się z nami",
    link: "/student/course",
  },
  {
    title: "Dla nauczyciela",
    description:
      "Jeśli chcesz zostać nauczycielem w naszej szkole, kliknij tutaj aby załozyć konto i dowiedzieć się o procesie rekrutacyjnym.",
    buttonText: "Współpracuj z nami",
    link: "/pages/contact",
  },
  {
    title: "Oferta B2B",
    description:
      "Jeśli jesteś zainteresowany naszą ofertą B2B, kliknij tutaj aby dowiedzieć się więcej szczegółowych informacji.",
    buttonText: "Wybierz ofertę",
    link: "/pages/contact",
  },
];

const OurOffer = () => {
  return (
    <Wrapper>
      <CardContainer>
        {cardsContent.map((card, index) => (
          <CardWrapper key={index}>
            <Link href={card.link} passHref>
              <BasicCard
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                titleColor="var(--basic-text-color)"
                descriptionColor="var(--basic-text-color)"
                src="/images/lefrancaise.jpeg"
                variant="contained"
              ></BasicCard>
            </Link>
          </CardWrapper>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default OurOffer;
