import { useRef, useState } from "react";
import { ResultModel } from "./ResultModel.jsx";

export function TimerChallenge({ title, targetTime }) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [won, setWon] = useState(false);
  let counterRef = useRef(null);

  function startTimer() {
    if (timerRunning && !timerExpired) {
      console.log("dd", counterRef);
      clearTimeout(counterRef.current);
      setTimerRunning(false);
      setTimerExpired(false);
      setStartTime((p) => Date.now() - p);
      setWon(true);
    } else {
      setWon(false);
      setTimerRunning(true);
      setTimerExpired(false);
      setStartTime(Date.now());
      counterRef.current = setTimeout(() => {
        setTimerRunning(false);
        setTimerExpired(true);
        setWon(false);
      }, targetTime * 1000);
      console.log(counterRef);
    }
  }

  function getSeconds() {
    return (startTime / 1000).toFixed(2);
  }

  return (
    <>
      {timerExpired && <ResultModel result="lost" targetTime={targetTime} />}
      {won && (
        <ResultModel
          result="won"
          targetTime={targetTime}
          wonTime={getSeconds()}
        />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {/*{timerExpired && <p className="challenge-expired">You Lost</p>}*/}
        {/*{won && <p className="challenge-won">You Won {getSeconds()}s</p>}*/}
        {/*{!timerExpired && !won && <p className="challenge-won"> _</p>}*/}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
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
