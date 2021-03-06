import React, { useState, useEffect, useCallback, useContext } from "react";

import * as firebase from "firebase";
import Minombre from "./Minombre";
var firebaseConfig = {
  apiKey: "AIzaSyDsAaXyJri6xxxxx90UMaSsTcvGz_aI",
  authDomain: "my-publicidad-3xxxxbaseapp.com",
  databaseURL: "https://my-publicidadxxx.firebaseio.com",
  projectId: "my-publicidad-3d983",
  storageBucket: "my-publicidxxxxxppspot.com",
  messagingSenderId: "10303x77",
  appId: "1:1030310043577:web:134xxx3f3f1972e068",
  measurementId: "G-4Y1xxxx9",
};
// Initialize Firebase
/*this.state = { nombre: "", direccion: "", rubro: "", imagen: "" };*/
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Tarjetas = (props) => {
  const nombreLocal = useContext(Minombre);
  console.log(nombreLocal);
  const [nombre, setNombre] = useState("");
  const [rubro, setRubro] = useState("");
  const cambiarNombre = useCallback(() => {
    firebase
      .database()
      .ref()
      .child("comerciogenial")
      .child("nombre")
      .set(nombreLocal);
  }, []);
  const cambiarRubro = useCallback(() => {
    firebase
      .database()
      .ref()
      .child("comerciogenial")
      .child("rubro")
      .set("ndeah");
  }, []);
  function Traer() {
    const nombreRef = firebase
      .database()
      .ref()
      .child("comerciogenial")
      .child("nombre");
    const rubroRef = firebase
      .database()
      .ref()
      .child("comerciogenial")
      .child("rubro");

    nombreRef.on("value", (snapshot) => {
      setNombre(snapshot.val());
    });
    rubroRef.on("value", (snapshot) => {
      setRubro(snapshot.val());
    });
  }

  useEffect(() => {
    Traer();
  }, [nombre, rubro]);

  return (
    <div>
      <p>hola {nombre}</p>
      <p>rubro {rubro}</p>

      <button onClick={cambiarNombre}>click cambiar nombre</button>
      <button onClick={cambiarRubro}>click cambiar rubro</button>
    </div>
  );
};
export default Tarjetas;
