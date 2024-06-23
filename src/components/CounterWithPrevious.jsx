import  { useState, useRef, useEffect } from 'react';

const CounterWithPrevious = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    // Add your code here
    prevCountRef.current=count
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p >Previous Count:{prevCountRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterWithPrevious;
