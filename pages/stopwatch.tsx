import { useState, useRef } from "react";
import type { Timer } from "timers";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <div className="p-4 rounded bg-gray-200 space-y-2 max-w-lg">
        <h1 className="text-lg font-bold">
          Time passed: {secondsPassed.toFixed(3)}
        </h1>
        <div className="flex space-x-2">
          <button
            className="rounded-md bg-teal-300 px-4 py-1 font-semibold shadow-sm hover:bg-teal-400"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="rounded-md bg-gray-400 px-4 py-1 font-semibold shadow-sm hover:bg-gray-500"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
