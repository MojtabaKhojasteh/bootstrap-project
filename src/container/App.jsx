import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";
import Skills from "../components/Skills";
import Inventory from "../components/Inventory";
import Question from "../components/Question";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Skills />
      <Inventory />
      <Question />
    </Fragment>
  );
};

export default App;
