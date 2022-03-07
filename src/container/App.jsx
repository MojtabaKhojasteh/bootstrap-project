import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";
import Skills from "../components/Skills";
import Inventory from "../components/Inventory";
import Question from "../components/Question";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Services from "../components/Services";

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
      <Contact />
      <Services />
    </Fragment>
  );
};

export default App;
