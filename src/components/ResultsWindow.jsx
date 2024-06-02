import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"; //Basically teleports code from one place to another

const ResultsWindow = forwardRef(function ResultsWindow(
  { timeRemaining, targetTime, reset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const userLost = timeRemaining <= 0;
  const score = ((targetTime * 1000 - timeRemaining) / 10).toFixed(2);
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={reset}>
      {userLost ? (
        <h2>You Lost</h2>
      ) : (
        <h2>
          Your Score: <strong style={{ color: "#10655b" }}>{score}</strong>
        </h2>
      )}
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining / 1000} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        {/* We will reset timer on pressing 'Cancel' in dialog box */}
        <button>Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal") //Second parameter is the element where portal should lead to
  );
});

export default ResultsWindow;
