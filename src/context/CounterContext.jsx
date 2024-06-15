// src/context/CounterContextProvider.jsx

import  { useReducer, createContext } from 'react';
import { counterReducer } from '../reducers/counterReducer';

// Create a context for the counter
const CounterContext = createContext();

// Create a provider component that uses the reducer and provides state and dispatch
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
