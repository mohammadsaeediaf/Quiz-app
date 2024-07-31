function FinishedScreen({ points, maxPoints, highScore ,dispatch }) {
  const precentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({precentage.toFixed(2)})%
      </p>
      <p className="highscore">high Score ({highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
