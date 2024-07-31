function FinishedScreen({ points, maxPoints }) {
  const precentage = (points / maxPoints) * 100;

  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPoints} ({precentage})%
    </p>
  );
}

export default FinishedScreen;
