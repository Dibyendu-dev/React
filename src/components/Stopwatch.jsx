import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [accumulatedTime, setAccumulatedTime] = useState(0);
  const [stopTimes, setStopTimes] = useState([]);
  const intervalRef = useRef(null);

  function handleStart() {
    const currentTime = Date.now();
    setStartTime(currentTime);
    setNow(currentTime);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);

    if (startTime !== null && now !== null) {
      const timePassed = now - startTime;
      setAccumulatedTime(accumulatedTime + timePassed);
      setStopTimes([...stopTimes, (accumulatedTime + timePassed) / 1000]);
    }

    setStartTime(null);
    setNow(null);
  }

  let secondsPassed = accumulatedTime / 1000;
  if (startTime != null && now != null) {
    secondsPassed += (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(1)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <h2>Stop Times:</h2>
      <ul>
        {stopTimes.map((time, index) => (
          <li key={index}>{time.toFixed(1)}</li>
        ))}
      </ul>
    </>
  );
}
