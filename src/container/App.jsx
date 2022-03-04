import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";
import Skills from "../components/Skills";
import Inventory from "../components/Inventory";
import Question from "../components/Question";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Skills />
      <Inventory />
      <Question />
      <Featured />
      <Gallery />
    </Fragment>
  );
};

export default App;
