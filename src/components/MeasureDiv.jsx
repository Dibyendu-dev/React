import { useEffect, useRef } from 'react';

const MeasureDiv = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
        const { offsetWidth, offsetHeight } = divRef.current;
        console.log(`Width: ${offsetWidth}, Height: ${offsetHeight}`);
      }
  }, []);

  return (
    <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
      Measure my size
    </div>
  );
};

export default MeasureDiv;
