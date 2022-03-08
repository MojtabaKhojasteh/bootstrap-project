import React, { Fragment } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Inventory from "../components/Inventory";
import Question from "../components/Question";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Quotes from "../components/Quotes";

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
      <Quotes />
    </Fragment>
  );
};

export default App;
