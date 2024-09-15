import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';
import { RootState } from './redux/store';
import './App.css';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div className="App">
      <h1> count: {count}</h1>
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        type="text"
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        ADD
      </button>
    </div>
  );
}

export default App;
