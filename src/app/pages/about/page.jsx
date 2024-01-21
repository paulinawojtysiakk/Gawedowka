import React from "react";
import styles from "src/app/page.module.css";
import NavBar from "src/components/organisms/navBar";
import Link from "next/link";
import Footer from "src/components/organisms/footer";

const About = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <h1>First Post</h1>
      <div>Hello</div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Footer />
    </div>
  );
};

export default About;
