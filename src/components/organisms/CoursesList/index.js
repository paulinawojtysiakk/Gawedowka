"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 30px;
`;

const CoursesTitle = styled.h2`
  padding-bottom: 40px;
`;

const CoursesBox = styled.ul`
  max-width: 1000px;
  text-align: justify;
  padding: 30px 40px;
  margin: 30px 0;
  border-radius: 5px;
  background-color: white;
`;

const ImageContainer = styled.div`
  display: flex;
`;
const DetailsContainer = styled.ul`
  padding: 0 20px;
`;

const CourseEl = styled.li`
  list-style: none;
  padding: 10px 0;
`;

const ListOfCourses = [
  {
    img: "/images/A1-level.png",
    title: "Kurs A1",
    length: "40 lekcji",
    description:
      "Ten kurs nauczy cię podstaw językowych. Są to przede wszystkim sformułowania dotyczące życia codziennego, przedstawianie siebie i innych, formułowanie pytań odnoszących się do życia prywatnego oraz dotyczących miejsca zamieszkania, posiadanych rzeczy i innych osób. Nabędziesz równiez umiejętność przeprowadzenia prostej rozmowy.",
  },
  {
    img: "/images/A2-level.png",
    title: "Kurs A2",
    length: "50 lekcji",
    description:
      "Ten kurs nauczy cię podstaw gramatycznych. Podczas zajęć nauczysz się rozumieć zwroty i często używane wyrażenia dotyczące życia codziennego (np. bardzo podstawowe informacje dotyczące życia osobistego, rodziny, zakupów, otoczenia i pracy). Dodatkowo, nauczysz się porozumiewać w prosty sposób w codziennych sytuacjach, wymagających jedynie bezpośredniej wymiany zdań na znane tematy. ",
  },
  {
    img: "/images/B1-level.png",
    title: "Kurs B1",
    length: "50 lekcji",
    description:
      "Ten kurs nauczy cię budowania rozbudowanych zdań. Będziesz rozumieć główne przesłanie prostych tekstów na znane sobie tematy, w tym dotyczących pracy, edukacji lub czasu wolnego. Nauczysz się tworzyć proste i spójne teksty na tematy znane lub leżące we własnym obszarze zainteresowań oraz opisywać doświadczenia, wydarzenia, pragnienia i aspiracje i  zwięźle przedstawić swoje opinie i plany.",
  },
  {
    img: "/images/B2-level.png",
    title: "Kurs B2",
    length: "60 lekcji",
    description:
      "Ten kurs nauczy cię płynnego wypowiadania się. Na zajęciach nauczysz się rozumieć znaczenie głównych wątków zawartych w złożonych wypowiedziach na tematy konkretne i abstrakcyjne, w tym merytoryczne dyskusje z zakresu jej specjalności. Bedziesz w stanie porozumiewać się na tyle płynnie i spontanicznie, by przeprowadzić rozmowę z rodzimym użytkownikiem danego języka, bez specjalnego wysiłku żadnej ze stron oraz formułować przejrzyste, szczegółowe wypowiedzi, jednocześnie  wyjaśniając swój punkt widzenia na dany temat oraz rozważając wady i zalety różnych możliwości.",
  },
];

const CourseItem = ({ course }) => (
  <CoursesBox>
    <ImageContainer>
      <img
        src={course.img}
        alt={course.title}
        style={{ width: "150px", backgroundColor: "white" }}
      ></img>
      <DetailsContainer>
        <h3>{course.title}</h3>
        <CourseEl>Kurs trwa: {course.length}</CourseEl>
        <CourseEl>Zajęcia odbywają się dwa razy w tygodniu.</CourseEl>
      </DetailsContainer>
    </ImageContainer>

    <CourseEl style={{ marginTop: "10px" }}>{course.description}</CourseEl>
  </CoursesBox>
);

const CourseList = ({ courses }) => (
  <div>
    {courses.map((course, index) => (
      <CourseItem key={index} course={course} />
    ))}
  </div>
);

const CoursesList = () => (
  <Wrapper>
    <CoursesTitle>W naszej szkole możesz zapisać się na kursy:</CoursesTitle>
    <CourseList courses={ListOfCourses} />
  </Wrapper>
);

export default CoursesList;
