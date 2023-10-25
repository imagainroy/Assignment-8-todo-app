import { useContext } from "react";

import { TodoContext } from "../contexts/Todo";

const AllTodoList = () => {
  const TodoCtx = useContext(TodoContext);

  return (
    <div className="list all-Todos">
      <h2>All Students</h2>
      <ul>
        {TodoCtx.students.map((Todo) => (
          <li key={Todo.id}>
            <span>{Todo.name}</span>
            <button onClick={() => TodoCtx.editHandler(Todo)}>Edit</button>
            <button onClick={() => TodoCtx.removeHandler(Todo.id)}>
              Delete
            </button>
            <button onClick={() => TodoCtx.completeHandeler(Todo)}>
              COMPLETE
            </button>
            <button onClick={() => TodoCtx.uncompleteHandeler(Todo)}>
              UNCOMPLETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodoList;
