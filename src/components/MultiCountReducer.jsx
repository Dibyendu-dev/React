import  { useReducer } from 'react';


// Initial state: an array of counters, each set to 0
const initialState = [0, 0, 0, 0]; 

// Reducer function to handle different actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state.map((count, index) => 
        index === action.index ? count + 1 : count
      );
    case 'decrement':
      return state.map((count, index) => 
        index === action.index ? count - 1 : count
      );
    case 'reset':
      return state.map((count, index) => 
        index === action.index ? 0 : count
      );
    default:
      throw new Error('Unknown action type');
  }
}

// Main component for the Multiple Counter app
function MultipleCounterApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="multiple-counter-app">
      <h1>Multiple Counter</h1>
      <div className="counters">
        {state.map((count, index) => (
          <div key={index} className="counter-card">
            <h2>Counter {index + 1}</h2>
            <p>{count}</p>
            <div className="buttons">
              <button onClick={() => dispatch({ type: 'increment', index })}>+</button>
              <button onClick={() => dispatch({ type: 'decrement', index })}>-</button>
              <button onClick={() => dispatch({ type: 'reset', index })}>Reset</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleCounterApp;
