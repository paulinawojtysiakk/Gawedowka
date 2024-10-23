"use client";
import React from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Link from "next/link";
import Footer from "src/components/organisms/footer";
import Image from "next/image";
import LearningImage from "public/images/LearningImage.jpg";
import TeamImage from "public/images/TeamImage.jpg";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--basic-text-color);
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Introduction = styled.div`
  margin: 40px;
  max-width: 600px;
  text-align: justify;
  line-height: 2;
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px;
`;

const ValuesTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ValueElement = styled.p`
  text-align: justify;
  margin: 20px 0;
    line-height: 2;

`;
const ProgramsContainer = styled.div`
  margin: 50px 0;
`;

const ProgramsTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const ProgramCard = styled.div`
  background-color: #fffdf6;
  border: 1px solid #ece8d9;
  border-radius: var(--border-radius);
  margin: 30px 0;
  padding: 50px;
  text-align: center;
`;

const ProgramName = styled.h3`
  margin-bottom: 20px;
`;

const ProgramDescription = styled.p`
  line-height: 1.5;
  font-size: 14px;
`;

const About = () => {
  return (
    <>
      <NavBar />
      <Wrapper className="container">
      <IntroContainer>
          <Image
            src={TeamImage}
            alt="Our Team"
            height="380"
            style={{ borderRadius: "5px" }}
          />
          <Introduction>
            <h1>Kim jesteśmy?</h1>
            <p>
              W Learn French wierzymy, że nauka języka jest przygodą, która
              otwiera drzwi do nowych kultur i możliwości. Nasza platforma
              powstała dzięki zaangażowaniu zespołu pasjonatów języka francuskiego,
              którzy chcą inspirować innych do nauki. Oferujemy różnorodne
              kursy, które dostosowujemy do potrzeb uczniów w każdym wieku i na
              każdym poziomie zaawansowania. Nasze podejście kładzie nacisk na
              interaktywność, komunikację oraz praktyczne umiejętności.
            </p>
          </Introduction>
        </IntroContainer>

        <ValuesContainer>
          <ValuesTitle>Nasza Wizja</ValuesTitle>
          <ValueElement>
          Pragniemy stworzyć globalną społeczność uczniów języka francuskiego, którzy dzielą się swoimi doświadczeniami i pasjami związanymi z tym pięknym językiem. Wierzymy, że francuski nie jest tylko narzędziem komunikacji, ale także kluczem do zrozumienia bogatej historii i kultury krajów francuskojęzycznych. Nasza platforma ma na celu połączenie ludzi z różnych zakątków świata, którzy, podobnie jak my, mają zamiłowanie do języka francuskiego i chcą odkrywać jego tajniki oraz subtelności.
      </ValueElement>
          <ValueElement>
          Naszą misją jest stworzenie inspirującej atmosfery, w której każdy uczeń będzie mógł rozwijać swoje umiejętności językowe poprzez różnorodne zajęcia oraz interaktywne podejście do nauki. Uczniowie nie tylko przyswajają wiedzę, ale również wymieniają się zasobami, wspierając się nawzajem na różnych etapach ich językowej podróży. Chcemy, aby nasza platforma stała się miejscem, gdzie mogą nawiązywać przyjaźnie, które przetrwają poza granicami języka, tworząc zróżnicowaną sieć wsparcia i inspiracji. Wierzymy, że nauka języka to nie tylko praca nad słownictwem czy gramatyką, ale również budowanie relacji, które mogą zmienić życie i otworzyć nowe horyzonty.
          </ValueElement>
          <ValueElement>
          Wspólnie dążymy do stworzenia przestrzeni, w której każdy poczuje się swobodnie, aby eksperymentować z językiem, zadawać pytania i odkrywać nowe możliwości. Nasza wizja to miejsce, gdzie każdy pasjonat języka francuskiego może znaleźć swoje miejsce, niezależnie od poziomu umiejętności, i rozwijać się w atmosferze pełnej szacunku, kreatywności oraz pasji.
        </ValueElement>
          
          <Image src={LearningImage} alt="Learning" height="400" style={{ borderRadius: '10px', alignSelf: 'center'}} />
          
        </ValuesContainer>
        <ProgramsContainer>
          <ProgramsTitle>Nasze Kursy organizowane w nauczaniu indywidualnym i grupowym</ProgramsTitle>
          <ProgramCard>
            <ProgramName>Podstawowy Kurs Francuskiego</ProgramName>
            <ProgramDescription>
              Nasz podstawowy kurs jest idealny dla tych, którzy dopiero zaczynają
              swoją przygodę z językiem francuskim. Uczestnicy uczą się podstawowej
              gramatyki, słownictwa oraz praktycznych zwrotów.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramName>Kurs Konwersacyjny</ProgramName>
            <ProgramDescription>
              Kurs konwersacyjny skupia się na rozwijaniu umiejętności mówienia. 
              Uczestnicy angażują się w interaktywne dyskusje oraz scenki sytuacyjne.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramName>Kurs Zaawansowany</ProgramName>
            <ProgramDescription>
              Nasz kurs zaawansowany jest przeznaczony dla osób, które już mają
              pewne umiejętności w języku francuskim. Skupia się na złożonej gramatyce
              i zaawansowanym słownictwie.
            </ProgramDescription>
          </ProgramCard>
        </ProgramsContainer>

      </Wrapper>
      <Footer />
    </>
  );
};

export default About;
