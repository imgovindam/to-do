import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#41b3a3] to-[#fff685]`,
  container: `bg-green-200 p-4 max-w-[500px] w-full m-auto rounded-md shadow-xl`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: "border p-2 w-full text-xl ",
  button: `border p-4 ml-2 bg-yellow-300 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);

  //create todo
  const createTodo = async (e) => {
    ///e : stands for event
    e.preventDefault(e); //to stop the page refreshing while submiting tthe form!!
    if (input === "") {
      alert("please Enter a valid Input");
      return; //so that the code should not  continue ,otherwise it will add blank space in our database
    }
    await addDoc(collection(db, "todo"), {
      text: input,
      completed: false,
    });
    setInput(""); //to set the text field empty for new todo!!
  };

  //read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todoArr);
    });

    return () => unsubscribe();
  }, []);

  //update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), {
      completed: !todo.completed, //this will channge the boolean value from false to-true & vice versa
    });
  };

  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-do app</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="add Todo"
          />
          <button className={style.button}>
            <AddIcon color="primary" size={40} />
          </button>
        </form>
        <ul>
          {todo.map((todo, index) => (
            <Todo
              keys={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>

        <p className={style.count}>{`you have ${todo.length} todos`}</p>
      </div>
    </div>
  );
}

export default App;
