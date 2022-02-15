import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/listAction";

function Form(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addItem(text));
      setText("");
      props.onHideModal();
    }
  }
  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button className="btn-adc" onClick={addItemEvent}>
        Adicionar
      </button>
    </form>
  );
}

export default Form;
