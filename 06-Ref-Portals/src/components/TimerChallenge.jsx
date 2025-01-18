import { useRef, useState } from "react";
import ResultModel from "./ResultModel.jsx";

export function TimerChallenge({ title, targetTime }) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const [won, setWon] = useState(false);
  const counterRef = useRef(null);
  const timerRef = useRef(null);
  const dialogRef = useRef(null);

  function clean() {
    clearTimeout(timerRef.current);
    clearTimeout(counterRef.current);
    setTimerRunning(false);
  }

  function startTimer() {
    if (timerRunning) {
      clean();
      setWon(true);
      dialogRef.current.open();
    } else {
      setWon(false);
      setTimerRunning(true);
      setRemainingTime(targetTime * 1000);
      timerRef.current = setInterval(() => setRemainingTime((p) => p - 10), 10);
      counterRef.current = setTimeout(() => {
        clean();
        dialogRef.current.open();
      }, targetTime * 1000);
    }
  }

  return (
    <>
      <ResultModel
        result={won ? "won" : "lost"}
        targetTime={targetTime}
        ref={dialogRef}
        wonTime={remainingTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {!timerRunning && `${targetTime} second${targetTime > 1 ? "s" : ""}`}
          {timerRunning &&
            `${(remainingTime / 1000).toFixed(2)} seconds remaining`}
        </p>
        <p>
          <button onClick={startTimer}>
            {timerRunning ? "Stop" : "Start"}
          </button>
        </p>
        <p className={`${timerRunning ? "active" : ""}`}>
          {timerRunning ? "Timer is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
