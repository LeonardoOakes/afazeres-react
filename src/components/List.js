import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

function List(props) {
  const items = useSelector(state=>state)
  return (
    <ul>
      {items.map((item) => (
        <ItemList
          key={item.id}
          item={item}
          // onDone={props.onDone}
          // onItemDeleted={props.onItemDeleted}
        ></ItemList>
      ))}
    </ul>
  );
}

export default List;
