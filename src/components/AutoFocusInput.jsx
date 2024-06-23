import  { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Add your code here
    inputRef.current.focus()
  }, []);

  return (
    <input ref={inputRef} type="text" />
  );
};

export default AutoFocusInput;
