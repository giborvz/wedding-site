import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Registry from "./components/Registry";
import "./index.css";

function App() {
  return (
    <>
      <Hero />
      <Venue />
      <Registry />
      <RSVP />
    </>
  );
}

export default App;
