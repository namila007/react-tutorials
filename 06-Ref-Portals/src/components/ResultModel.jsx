export function ResultModel({ result, targetTime, wonTime }) {
  return (
    <dialog className="result-model" open>
      <h2> You {result}</h2>
      <p>The Target time was {targetTime} seconds</p>
      <p>
        You stopped the timer at{" "}
        <strong>{wonTime ? (targetTime - wonTime).toFixed(2) : 0}</strong>{" "}
        seconds left
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
