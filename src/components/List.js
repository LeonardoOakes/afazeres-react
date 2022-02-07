import React from "react";
import ItemList from "./ItemList";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ItemList
          key={item.id}
          item={item}
          onDone={props.onDone}
          onItemDeleted={props.onItemDeleted}
        ></ItemList>
      ))}
    </ul>
  );
}

export default List;
