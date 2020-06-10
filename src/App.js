import React from "react";

import "./App.css";

import Contadores from "./compoHooks/Contadores";
import UnirString from "./compoHooks/UnirString";
import Tarjetas from "./compoHooks/Tarjetas";

function App() {
  return (
    <div className="App">
      <Contadores />
      <UnirString />
      <br></br>
      <p>
        hola<br></br> hola
      </p>
      <Tarjetas />
    </div>
  );
}

export default App;
