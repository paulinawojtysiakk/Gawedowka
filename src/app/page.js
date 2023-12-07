"use client";
import React from "react";
import styles from "./page.module.css";
import NavBar from "src/components/organisms/navBar";

const Home = () => {
  return (
    <main className={styles.main}>
      <NavBar />
    </main>
  );
};

export default Home;
