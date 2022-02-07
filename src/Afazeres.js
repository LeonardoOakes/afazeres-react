import React, { useState } from "react";
import "./Afazeres.css";

function Afazeres() {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  return (
    <div className="container">
      <h1>Afazeres</h1>
      <form>
        <input onChange={handleChange} type="text"></input>
        <button>Adicionar itens a lista</button>
      </form>
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  );
}

export default Afazeres;
