import React from "react";
//deprecated, needed for react<19
export default React.forwardRef(function ResultModel(
  { result, targetTime, wonTime },
  ref,
) {
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    open: () => {
      localRef.current.showModal();
    },
    close: () => {
      localRef.current.close();
    },
  }));
  const computedRemaining = (wonTime / 1000).toFixed(2);
  const score = Math.round((1 - wonTime / (targetTime * 1000)) * 100);
  return (
    <dialog className="result-modal" ref={localRef}>
      <h2>
        {" "}
        You {result === "won" ? <strong>score: {score}</strong> : "lost"}
      </h2>

      <p>
        The Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer at{" "}
        <strong>{result === "won" ? computedRemaining : 0}</strong> seconds left
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
