import './App.css';
import Counter from './components/counter/Counter';
import HocGreen from './components/HocGreen';
import HocRed from './components/HocRed';
import HocBlue from './components/HocBlue';

function App() {
  return (
    <div className="App">
      <h1>HOC Muti Counter app</h1>
      <div className="multi-counter">
        <HocRed comp={Counter} />
        <HocGreen comp={Counter} />
        <HocBlue comp={Counter} />
      </div>
    </div>
  );
}

export default App;
