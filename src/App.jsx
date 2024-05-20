import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";

import { useState } from "react";

function App() {
  return (
    <>
      {/*Alternatively, you can import Fragments from react and put it in the tag */}
      {/* Calling custom Header function */}
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
