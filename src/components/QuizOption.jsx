export default function QuizOption({ questionData, onDispatch, selectedAnswer }) {
    const hasAnswered = selectedAnswer !== null

    return (
        <div className="options">
            {questionData.options.map((opt, i) => (
                <button
                    key={opt}
                    className={`btn btn-option ${i === selectedAnswer ? "answer" : ""} ${hasAnswered ? i === questionData.correctOption ? "correct" : "wrong" : ""} `}
                    onClick={() => onDispatch({ type: "selectAnswer", payload: i })}
                    disabled={hasAnswered}
                >
                    {opt}
                </button>
            ))}
        </div>
    )
}