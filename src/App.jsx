import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { reducer, initialState } from "./utils/reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import InitialScreen from "./components/InitialScreen";


export default function App() {
    const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <InitialScreen questionNumbers={questions.length} />}
            </Main>

        </section>
    );
};