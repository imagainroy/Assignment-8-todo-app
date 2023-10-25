import { useState, createContext } from "react";

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [TodoTittle, setTodoTittle] = useState("");
  const [Todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandler = () => {
    const newTodo = {
      id: Date.now() + "",
      name: "TodoTittle",
      isPresent: undefined,
    };
    setTodos([...Todos, newTodo]);
    setTodoTittle("");
  };

  const updateHandeler = () => {
    const updateTodoList = Todos.map((Todo) => {
      if (Todo.id === editableTodo.id) {
        return { ...Todo, name: editTodo };
      }
      return Todo;
    });
    setTodos(updateTodoList);
    setEditTodo(false);
    setTodoTittle("");

    setEditableTodo(null);
  };
  const submitHandler = (e) => {
    e.preventdefault();
    if (!TodoTittle.trim()) return;
    editTodo ? updateHandeler() : createHandler();
  };
  const editHandler = (Todo) => {
    setEditTodo(true);
    setTodoTittle(TodoTittle.name);
    setEditableTodo(Todo);
  };

  const removeHandeler = (TodoID) => {
    const newTodoList = Todos.filter((Todo) => Todo.id !== TodoID);
    setTodos(newTodoList);
  };

  const completeHandeler = (Todo) => {
    const newTodoList = Todo.map((task) => {
      if (task.id === Todo.id) {
        if (task.id === Todo.id) {
          return { ...task, isPresent: true };
        }
      }
      return task;
    });
    setTodos(newTodoList);
  };
  const uncompleteHandeler = (Todo) => {
    const newToodoList = Todo.map((task) => {
      if (task.id === Todo.id) {
        if (task.id === Todo.id) {
          return { ...task, isPresent: false };
        }
      }
      return task;
    });
    setTodos(newToodoList);
  };
  const toggleHandler = (Todo) => {
    const newTodoList = Todo.map((task) => {
      if (task.id === Todo.id) {
        return { ...task, isPresent: !task.TodoisPresent };
      }
      return task;
    });
    setTodos(newTodoList);
  };
  const contextValue = {
    TodoTittle,
    setTodoTittle,
    Todos,
    setTodos,
    editTodo,
    setEditTodo,
    editableTodo,
    setEditableTodo,
    createHandler,
    submitHandler,
    editHandler,
    updateHandeler,
    removeHandeler,
    completeHandeler,
    uncompleteHandeler,
    toggleHandler,
  };
  <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
