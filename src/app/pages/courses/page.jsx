"use client";
import React, { useState } from "react";
import styles from "src/app/page.module.css";
import NavBar from "src/components/organisms/navBar";
import CoursesList from "src/components/organisms/CoursesList";
import Footer from "src/components/organisms/footer";
import LoginPage from "/src/app/pages/login/page.jsx";

const CoursesPage = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />

      <div className={styles.main}>
        <CoursesList />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
