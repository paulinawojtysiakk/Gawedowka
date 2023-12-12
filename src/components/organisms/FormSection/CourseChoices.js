import React from "react";

const CourseList = ({ ageGroup }) => {
  const courses = [
    {
      name: "Kurs A1 - podstawy",
      level: "Poziom A1",
      ageGroups: ["9-12", "13-16", "17-20"],
      description: "Ten kurs nauczy cię podstaw językowych.",
    },
    {
      name: "Kurs A2 - początki",
      level: "Poziom A2",
      ageGroups: ["9-12", "13-16", "17-20"],
      description: "Ten kurs nauczy cię podstaw gramatycznych.",
    },
    {
      name: "Kurs B1 - średnio-zaawansowany",
      level: "Poziom B1",
      ageGroups: ["9-12", "13-16", "17-20"],
      description: "Ten kurs nauczy cię budowania rozbudowanych zdań.",
    },
    {
      name: "Kurs B2 - zaawansowany",
      level: "Poziom B2",
      ageGroups: ["9-12", "13-16", "17-20"],
      description: "Ten kurs nauczy cię płynnego wypowiadania się.",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.ageGroups.includes({ ageGroup })
  );

  // const getAgeGroup = (age) => {
  //   if (age >= 9 && age <= 12) {
  //     return "9-12";
  //   } else if (age >= 13 && age <= 16) {
  //     return "13-16";
  //   } else if (age >= 17 && age <= 20) {
  //     return "17-20";
  //   } else {
  //     return "N/A";
  //   }
  // };

  return (
    <div>
      <h2>Course List</h2>
      {filteredCourses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <p>Grupa wiekowa: {ageGroup}</p>
          <p>Poziom: {course.level}</p>
          <p>Opis: {course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
