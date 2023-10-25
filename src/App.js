import "./App.css";

import TodoFrom from "./Components/TodoForm";
import TodoSection from "./Components/TodoSection";
const App = () => {
  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <TodoFrom />
      <TodoSection />
    </div>
  );
};

export default App;
