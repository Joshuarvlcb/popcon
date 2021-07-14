import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Landing from "./Landing";

export default function App() {
  return (
    <>
      <Header />
      <div className="home">
        <Nav />
        <Landing />
      </div>
    </>
  );
}
