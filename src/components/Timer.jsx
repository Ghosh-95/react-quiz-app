import { useEffect } from "react"

export default function Timer({ onDispatch, quizDuration }) {
    const min = Math.floor(quizDuration / 60);
    const sec = quizDuration % 60;

    useEffect(function () {
        const timer = setInterval(() => {
            onDispatch({ type: "tick" });
        }, 1000);

        return () => clearInterval(timer);

    }, [onDispatch]);

    return (
        <div className="timer">
            {min < 10 && "0"}{min}:{sec < 10 && "0"}{sec}
        </div>
    )
}