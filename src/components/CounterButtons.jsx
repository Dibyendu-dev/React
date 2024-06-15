// src/components/CounterButtons.jsx

import  { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterButtons = () => {
  const { dispatch } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterButtons;
