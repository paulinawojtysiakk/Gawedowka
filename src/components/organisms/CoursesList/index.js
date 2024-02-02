"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonText from "src/components/atoms/Button";
import LoginPage from "/src/app/pages/login/page.jsx";
import RegistrationPage from "/src/app/pages/registration/page.jsx";
import BasicAlert from "src/components/atoms/Alert";

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
  margin-top: 10px;
`;
const SignupButton = styled(ButtonText)`
  margin: 20px 10px;
  background-color: #79c2d0;
`;

const ListOfCourses = [
  {
    img: "/images/A1-level.png",
    title: "Kurs A1",
    length: "40 lekcji",
    time: "środa 17:00 oraz piątek 16:00",
    description:
      "Ten kurs nauczy cię podstaw językowych. Są to przede wszystkim sformułowania dotyczące życia codziennego, przedstawianie siebie i innych, formułowanie pytań odnoszących się do życia prywatnego oraz dotyczących miejsca zamieszkania, posiadanych rzeczy i innych osób. Nabędziesz równiez umiejętność przeprowadzenia prostej rozmowy.",
  },
  {
    img: "/images/A2-level.png",
    title: "Kurs A2",
    length: "50 lekcji",
    time: "poniedziałek 19:00 oraz piątek 17:30",
    description:
      "Ten kurs nauczy cię podstaw gramatycznych. Podczas zajęć nauczysz się rozumieć zwroty i często używane wyrażenia dotyczące życia codziennego (np. bardzo podstawowe informacje dotyczące życia osobistego, rodziny, zakupów, otoczenia i pracy). Dodatkowo, nauczysz się porozumiewać w prosty sposób w codziennych sytuacjach, wymagających jedynie bezpośredniej wymiany zdań na znane tematy. ",
  },
  {
    img: "/images/B1-level.png",
    title: "Kurs B1",
    length: "50 lekcji",
    time: "wtorek 17:30 oraz czwartek 17:00",

    description:
      "Ten kurs nauczy cię budowania rozbudowanych zdań. Będziesz rozumieć główne przesłanie prostych tekstów na znane sobie tematy, w tym dotyczących pracy, edukacji lub czasu wolnego. Nauczysz się tworzyć proste i spójne teksty na tematy znane lub leżące we własnym obszarze zainteresowań oraz opisywać doświadczenia, wydarzenia, pragnienia i aspiracje i  zwięźle przedstawić swoje opinie i plany.",
  },
  {
    img: "/images/B2-level.png",
    title: "Kurs B2",
    length: "60 lekcji",
    time: "poniedziałek 17:00 oraz czwartek 18:00",

    description:
      "Ten kurs nauczy cię płynnego wypowiadania się. Na zajęciach nauczysz się rozumieć znaczenie głównych wątków zawartych w złożonych wypowiedziach na tematy konkretne i abstrakcyjne, w tym merytoryczne dyskusje z zakresu jej specjalności. Bedziesz w stanie porozumiewać się na tyle płynnie i spontanicznie, by przeprowadzić rozmowę z rodzimym użytkownikiem danego języka, bez specjalnego wysiłku żadnej ze stron oraz formułować przejrzyste, szczegółowe wypowiedzi, jednocześnie  wyjaśniając swój punkt widzenia na dany temat oraz rozważając wady i zalety różnych możliwości.",
  },
];
const Img = styled.img`
  max-width: 150px;
  max-height: 120px;
  background-color: white;
  priority={false}
`;

const SignupAlert = styled(BasicAlert)`
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1;
`;

const CourseItem = ({ course, handleSignup }) => (
  <CoursesBox>
    <ImageContainer>
      <Img src={course.img} alt={course.title}></Img>
      <DetailsContainer>
        <h3>{course.title}</h3>
        <CourseEl>Kurs trwa: {course.length}</CourseEl>
        <CourseEl>Zajęcia odbywają się: {course.time}</CourseEl>
      </DetailsContainer>
    </ImageContainer>
    <CourseEl>{course.description}</CourseEl>
    <SignupButton
      variant="contained"
      text="Zapisuję się!"
      onClick={handleSignup}
    />
  </CoursesBox>
);

const CourseList = ({ courses, handleSignup }) => (
  <div>
    {courses.map((course, index) => (
      <CourseItem key={index} course={course} handleSignup={handleSignup} />
    ))}
  </div>
);

const CoursesList = () => {
  const [showForm, setShowForm] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const isUserLoggedIn = () => {
    return localStorage.getItem("userToken") !== null;
  };

  const handleSignup = () => {
    if (isUserLoggedIn()) {
      console.log("User zalogowany.");
      setShowAlert(true);
    } else {
      setShowForm("login");
    }
  };

  return (
    <Wrapper>
      <CoursesTitle>Tutaj możesz zapisać się na kursy online:</CoursesTitle>
      <CourseList courses={ListOfCourses} handleSignup={handleSignup} />
      {showAlert && (
        <SignupAlert
          severity="success"
          text="Zapisałeś się na kurs"
          onClose={() => setShowAlert(false)}
        />
      )}

      {showForm === "register" && (
        <RegistrationPage switchForm={() => switchForm("login")} />
      )}
      {showForm === "login" && (
        <LoginPage switchForm={() => switchForm("register")} />
      )}
    </Wrapper>
  );
};

export default CoursesList;
