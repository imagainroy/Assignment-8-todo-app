import { useContext } from "react";

import { TodoContext } from "../contexts/Todo.jsx";

const UncompleteTodo = () => {
  const { Todos, toggleHandler } = useContext(TodoContext);
  const Uncomplete = Todos.filter((Todo) => Todo.isPresent === false);
  return (
    <div className="list uncomplete-list">
      <h2> Uncomolete List</h2>
      {Uncomplete.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => toggleHandler(task)}>Complete</button>
        </li>
      ))}
    </div>
  );
};
export default UncompleteTodo;
