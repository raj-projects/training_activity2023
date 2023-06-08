import './App.css';
import Calculator from './components/calc/calc';
import Counter from './components/counter/Counter';
import FizzBuzz from './components/fizzBuzz/FizzBuzz';
import Todos from './components/todos/Todos';

function App() {
  return (
    <div className="App">
      <Todos />
      {/* <Calculator />
      <FizzBuzz />
      <Counter /> */}
    </div>
  );
}

export default App;
