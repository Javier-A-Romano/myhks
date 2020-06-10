import React, { useState } from "react";
import { useFetch } from "../HooksPerso/useFetch";

function UnirString() {
  const [unir, setUnir] = useState("hola");
  const [nomPoke] = useFetch("https://pokeapi.co/api/v2/pokemon/1/");
  console.log(nomPoke);
  return (
    <div>
      <p>{unir}</p>
      {nomPoke.map((abilities) => (
        <li>
          {abilities.slot}
          {abilities.ability.name}
        </li>
      ))}
      <button onClick={() => setUnir(unir + unir)}>String</button>
    </div>
  );
}

export default UnirString;
