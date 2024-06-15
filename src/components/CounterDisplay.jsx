// src/components/CounterDisplay.jsx

import  { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterDisplay = () => {
  const { state } = useContext(CounterContext);
  return <div>Count: {state.count}</div>;
};

export default CounterDisplay;
