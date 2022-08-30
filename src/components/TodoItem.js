import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props) {
  // const onClickButton = () => {
  //   props.setOpenModalDelete(true)
  // }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-Check ${props.completed && "Icon-check--active"} `}
        onClick={props.onComplete}>
        √
      </span>
      <textarea className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </textarea>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        {/* onClick={onClickButton}>  */}
        X
        </span>
    </li>
  );
}

export { TodoItem };
