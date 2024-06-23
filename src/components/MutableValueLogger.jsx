import { useRef } from "react";

const MutableValueLogger = () => {
  const countRef = useRef(0);

  const incrementAndLog = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <button onClick={incrementAndLog}>Increment and Log</button>
    </div>
  );
};

export default MutableValueLogger;

// Create a React component that stores a mutable value using useRef. The component should have a button that, when clicked, increments this value by 1 and logs it to the console.
