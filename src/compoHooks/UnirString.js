import React, { useState } from "react";

function UnirString() {
  const [unir, setUnir] = useState("hola");

  return (
    <div>
      <p>{unir}</p>
      <button onClick={() => setUnir(unir + unir)}>String</button>
    </div>
  );
}

export default UnirString;
