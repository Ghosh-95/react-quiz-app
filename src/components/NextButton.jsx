export default function NextButton({ onDispatch, selectedAnswer, questionIndex, numOfQuestions }) {
    if (selectedAnswer === null) return;

    if (questionIndex < numOfQuestions - 1) return (
        <button className="btn btn-ui" onClick={() => onDispatch({ type: "nextQuestion" })}>
            Next
        </button>
    );

    if (questionIndex === numOfQuestions - 1) return (
        <button className="btn btn-ui" onClick={() => onDispatch({ type: "finishQuiz" })}>
            Finish
        </button>
    )
};