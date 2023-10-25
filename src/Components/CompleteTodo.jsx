import { useContext } from "react";

import { TodoContext } from "../contexts/Todo.jsx";

const CompletedTodoList = () => {
  const { Todos, toggleHandler } = useContext(TodoContext);
  // derived State
  const CompleteList = Todos.filter((Todo) => Todo.isPresent === true);
  return (
    <div className="list Complete-list">
      <h2>COMPLETE LIST</h2>
      <ul>
        {CompleteList.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => toggleHandler(task)}>UNCOMPLETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodoList;
