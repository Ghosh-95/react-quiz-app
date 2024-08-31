import QuizOption from "./QuizOption";

export default function Questions({ currentQuestion, onDispatch, selectedAnswer }) {

    return (
        <div className="question">
            <h4>{currentQuestion.question}</h4>

            <QuizOption questionData={currentQuestion} selectedAnswer={selectedAnswer} onDispatch={onDispatch} />
        </div>
    )
}