import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
import { useState } from "react";
export default function Todoapp() {
  // console.log(todos);
  const [todos, setTodos] = useState([]);
  const completedtodos = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completedtodos={completedtodos} totaltodos={totaltodos} />
    </div>
  );
}