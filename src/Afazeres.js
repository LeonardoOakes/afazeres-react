import React, { useState } from "react";
import "./Afazeres.css";

function Afazeres() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      setItems([...items, text]);
      setText("");
    }
  }

  return (
    <div className="container">
      <h1>Afazeres</h1>
      <form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>Adicionar</button>
      </form>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Afazeres;
