import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";
import Skills from "../components/Skills";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Skills />
    </Fragment>
  );
};

export default App;
