export default function InitialScreen({ questionNumbers, onDispatch }) {
    function handleStartQuiz() {
        onDispatch({ type: "startQuiz" })
    }

    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{questionNumbers} questions to master your React learning.</h3>

            <button className="btn btn-ui" onClick={handleStartQuiz}>Let's Start</button>
        </div>
    )
}