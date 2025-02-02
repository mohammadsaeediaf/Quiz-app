function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuestions} question to test your react mastery</h3>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's Start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
