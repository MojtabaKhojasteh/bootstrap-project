import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";
import Skills from "../components/Skills";
import Inventory from "../components/Inventory";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Skills />
      <Inventory />
    </Fragment>
  );
};

export default App;
