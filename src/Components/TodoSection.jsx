import AllTodoList from "./AllTodoList";
import CompleteTodoList from "./CompleteTodo";
import UncompleTodoList from "./UncompleTodo";
const TodoSection = () => {
  return (
    <div className="TodoSection">
      <AllTodoList />
      <CompleteTodoList />
      <UncompleTodoList />
    </div>
  );
};

export default TodoSection;
