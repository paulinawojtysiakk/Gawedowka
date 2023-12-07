import NavBar from "src/components/organisms/navBar";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <NavBar />
      <h1>First Post</h1>
      <div>Hello</div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
