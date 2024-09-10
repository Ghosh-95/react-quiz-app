export default function NextButton({ onDispatch, selectedAnswer }) {
    if (selectedAnswer === null) return;

    return (
        <button className="btn btn-ui" onClick={() => onDispatch({ type: "nextQuestion" })}>
            Next
        </button>
    );
};