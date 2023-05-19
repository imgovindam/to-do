import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const style = {
  li: `flex justify-between bg-yellow-200 p-4 my-2 capitalize`,
  licomplete: `flex justify-between bg-yellow-200 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textcomplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? style.licomplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textcomplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      {/* here id in todo.id is auto generated in the firease data */}
      <button onClick={() => deleteTodo(todo.id)}>
        <DeleteForeverIcon />
      </button>
    </li>
  );
}

export default Todo;
