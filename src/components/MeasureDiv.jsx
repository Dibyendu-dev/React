import { useEffect, useRef } from 'react';

const MeasureDiv = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
        const { offsetWidth, offsetHeight } = divRef.current;
        const bgColor = window.getComputedStyle(divRef.current).backgroundColor;
        console.log(`Width: ${offsetWidth}, Height: ${offsetHeight} , bgColor: ${bgColor}` );
      }
  }, []);

  return (
    <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'purple' }}>
      Measure my size
    </div>
  );
};

export default MeasureDiv;
