import React from "react";

const ListOfCourses = [
  {
    img: " ",
    title: "Kurs A1",
    description: "Ten kurs nauczy cię podstaw językowych.",
  },
  {
    img: " ",
    title: "Kurs A2",
    description: "Ten kurs nauczy cię podstaw gramatycznych.",
  },
  {
    img: " ",
    title: "Kurs B1",
    description: "Ten kurs nauczy cię budowania rozbudowanych zdań.",
  },
  {
    img: " ",
    title: "Kurs B2",
    description: "Ten kurs nauczy cię płynnego wypowiadania się.",
  },
];

const CourseItem = ({ course }) => (
  <div style={{ marginBottom: "20px" }}>
    <img src={course.img}></img>
    <h3>{course.title}</h3>
    <p style={{ marginTop: "10px" }}>{course.description}</p>
  </div>
);

const CourseList = ({ courses }) => (
  <div>
    {courses.map((course, index) => (
      <CourseItem key={index} course={course} />
    ))}
  </div>
);

const CoursesList = () => (
  <div>
    <h2>Kursy</h2>
    <CourseList courses={ListOfCourses} />
  </div>
);

export default CoursesList;
