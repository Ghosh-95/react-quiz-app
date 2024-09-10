export default function ProgressBar({ questionIndex, totalQuestions, points, totalPoints, selectedAnswer }) {

    return (
        <header className="progress">
            <progress max={totalQuestions} value={questionIndex + Number(selectedAnswer !== null)} />

            <p><strong>{questionIndex + 1}</strong> / {totalQuestions}</p>

            <p><strong>{points}</strong> / {totalPoints}</p>
        </header>
    )
}