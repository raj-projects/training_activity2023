import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className="todos">
      <h1>Todo List</h1>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
