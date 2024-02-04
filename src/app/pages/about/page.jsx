import React from "react";
import styles from "src/app/page.module.css";
import NavBar from "src/components/organisms/navBar";
import Link from "next/link";
import Footer from "src/components/organisms/footer";

const About = () => {
  return (
    <>
      <NavBar />

      <div className={styles.main}>
        <h1>First Post</h1>
        <div>Hello</div>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default About;
