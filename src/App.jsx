import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { reducer, initialState } from "./utils/reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import InitialScreen from "./components/InitialScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";


export default function App() {
    const [{ questions, quizStatus, questionIndex, selectedAnswer, points, highscore, quizDuration }, dispatch] = useReducer(reducer, initialState);

    const totalPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch("http://localhost:8080/questions");
                const data = await response.json();

                dispatch({ type: "questionDataReceived", payload: data });
            } catch (error) {
                console.error(error);
                dispatch({ type: "failedToLoadData" })
            };
        };

        fetchQuestions();

    }, [dispatch]);

    return (
        <section className="app">
            <Header />

            <Main>
                {quizStatus === "loading" && <Loader />}
                {quizStatus === "error" && <Error />}
                {quizStatus === "ready" && <InitialScreen questionNumbers={questions.length} onDispatch={dispatch} />}
                {quizStatus === "active" &&
                    <>
                        <ProgressBar totalQuestions={questions.length} questionIndex={questionIndex} totalPoints={totalPossiblePoints} points={points} selectedAnswer={selectedAnswer} />
                        <Questions currentQuestion={questions[questionIndex]} selectedAnswer={selectedAnswer} onDispatch={dispatch} />
                        <Footer>
                            <Timer onDispatch={dispatch} quizDuration={quizDuration} />
                            <NextButton onDispatch={dispatch} selectedAnswer={selectedAnswer}
                                questionIndex={questionIndex} numOfQuestions={questions.length} />
                        </Footer>
                    </>}

                {quizStatus === "finished" && <FinishScreen points={points} maxPoints={totalPossiblePoints} highscore={highscore} onDispatch={dispatch} />}
            </Main>

        </section>
    );
};