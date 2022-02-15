import React from "react";
import { useDispatch } from "react-redux";
import { changeDone, deleteItem } from "../actions/listAction";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src="./assets/on.png"></img>;
  } else {
    return <img alt="undone" src="./assets/off.png"></img>;
  }
}

function ItemList(props) {
  const dispatch = useDispatch()
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              dispatch(changeDone(props.item.id));
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>

          <button
            onClick={() => {
              dispatch(deleteItem(props.item.id));
            }}
          >
            <img alt="delete" src="./assets/delete.png"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ItemList;
