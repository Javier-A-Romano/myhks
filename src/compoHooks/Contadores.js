import React, { useState } from "react";

const Contadores = () => {
  const [conta, setConta] = useState(0);

  return (
    <div>
      <h1>contador {conta}</h1>
      <button onClick={() => setConta(conta + 1)}>Aumentar</button>
    </div>
  );
};
export default Contadores;
