import React from "react";
import styles from "/src/app/page.module.css";
import CourseSignupStepper from "src/components/organisms/stepper";
import NavBar from "src/components/organisms/navBar";

const StudentCourseSignup = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <CourseSignupStepper />
    </div>
  );
};

export default StudentCourseSignup;
