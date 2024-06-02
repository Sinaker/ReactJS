import { useState, useRef } from "react";
import ResultsWindow from "./ResultsWindow.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open(); //You lost
  }

  function startTimer() {
    timer.current = setInterval(() => {
      //setInterval performs the operation every 'x' milliseconds
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function resetTimer() {
    setTimeRemaining(targetTime * 1000); //Reset target time
  }

  function stopTimer() {
    dialog.current.open(); //Manually pressed stop button
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultsWindow
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        reset={resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timeRemaining <= 0 ? <p>You lost</p> : ""}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopTimer : startTimer}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer Stopped"}
        </p>
      </section>
    </>
  );
}
