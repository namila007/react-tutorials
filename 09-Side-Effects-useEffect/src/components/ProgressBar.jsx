import { useEffect, useState } from "react";

export function ProgressBar({ timer }) {
  const [time, setTime] = useState(5000);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 100);
    }, 100);
    return interval;
  };

  useEffect(() => {
    const interval = startTimer();
    return () => {
      console.log("1cleared");
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${(time / 5000) * 100}%` }}
      >
        <span className="progress-text">{(time / 1000).toFixed(1)}</span>
      </div>
    </div>
  );
}
