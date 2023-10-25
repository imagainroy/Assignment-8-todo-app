import { useContext } from "react";

import { TodoContext } from "../contexts/Todo.jsx";

const TodoFrom = () => {
  const TodoCtx = useContext(TodoContext);
  return (
    <form className="Todo-form" onSubmit={TodoCtx.submitHandler}>
      <input
        type="text"
        value={TodoCtx.TodoTittle}
        onChange={(e) => TodoCtx.setTodoTittle(e.target.value)}
      />
      <button type="submit">
        {TodoCtx.editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};
export default TodoFrom;
