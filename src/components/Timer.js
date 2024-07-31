import { useEffect } from "react";

function Timer({ dispatch, seccondsRemaining }) {
  const mins = Math.floor(seccondsRemaining / 60);
  const sec = Math.floor(seccondsRemaining % 60);
  return (
    <div className="timer">
      {useEffect(
        function () {
          const id = setInterval(() => {
            dispatch({ type: "tick" });
          }, 1000);
          return () => clearInterval(id);
        },
        [dispatch]
      )}
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}{sec}
    </div>
  );
}

export default Timer;
