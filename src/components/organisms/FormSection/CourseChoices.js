import React, { useState } from "react";
import Button from "src/components/atoms/Button";
import styled from "styled-components";
import Divider from "@mui/material/Divider";

const Wrapper = styled.div`
  padding: 15px 0;
  color: var(--basic-text-color);
`;
const CourseWrapper = styled.div`
  padding: 20px;
`;
const CourseTitle = styled.h2`
  padding-bottom: 20px;
`;
const CourseDetails = styled.p`
  padding-bottom: 10px;
  &:nth-child(4) {
    margin-bottom: 10px;
  }
`;

const CourseList = ({ ageGroup, setCourse, handleNext }) => {
  const handleClick = (selectedCourse) => {
    setCourse(selectedCourse);
    handleNext();
  };

  const courses = {
    "9-12": [
      {
        index: 0,
        name: "Kurs A1 - podstawy",
        level: "Poziom A1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw językowych.",
      },
      {
        index: 1,
        name: "Kurs A2 - początki",
        level: "Poziom A2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw gramatycznych.",
      },
      {
        index: 2,
        name: "Kurs B1 - średnio-zaawansowany",
        level: "Poziom B1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię budowania rozbudowanych zdań.",
      },
      {
        index: 3,
        name: "Kurs B2 - zaawansowany",
        level: "Poziom B2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię płynnego wypowiadania się.",
      },
    ],
    "13-16": [
      {
        index: 0,
        name: "Kurs A1 - podstawy",
        level: "Poziom A1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw językowych.",
      },
      {
        index: 1,
        name: "Kurs A2 - początki",
        level: "Poziom A2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw gramatycznych.",
      },
      {
        index: 2,
        name: "Kurs B1 - średnio-zaawansowany",
        level: "Poziom B1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię budowania rozbudowanych zdań.",
      },
      {
        index: 3,
        name: "Kurs B2 - zaawansowany",
        level: "Poziom B2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię płynnego wypowiadania się.",
      },
    ],
    "17-20": [
      {
        index: 0,
        name: "Kurs A1 - podstawy",
        level: "Poziom A1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw językowych.",
      },
      {
        index: 1,
        name: "Kurs A2 - początki",
        level: "Poziom A2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię podstaw gramatycznych.",
      },
      {
        index: 2,
        name: "Kurs B1 - średnio-zaawansowany",
        level: "Poziom B1",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię budowania rozbudowanych zdań.",
      },
      {
        index: 3,
        name: "Kurs B2 - zaawansowany",
        level: "Poziom B2",
        ageGroups: ["9-12", "13-16", "17-20"],
        description: "Ten kurs nauczy cię płynnego wypowiadania się.",
      },
    ],
  };

  return (
    <div>
      {courses[ageGroup].map((course, index) => (
        <div key={course.index}>
          <Wrapper>
            <Divider />
            <CourseWrapper>
              <CourseTitle>{course.name}</CourseTitle>
              <CourseDetails>Grupa wiekowa: {ageGroup}</CourseDetails>
              <CourseDetails>{course.level}</CourseDetails>
              <CourseDetails>{course.description}</CourseDetails>
              <Button
                onClick={() => handleClick(course)}
                value={course}
                variant="contained"
                text="Zapisuję się!"
              />
            </CourseWrapper>
          </Wrapper>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
