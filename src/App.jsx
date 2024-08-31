import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function reducer(state, action) {
    switch (action.type) {
        case "questionDataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready"
            };
        case "failedToLoadData":
            return {
                ...state,
                status: "error"
            };
        default:
            throw new Error("unknown error occured!!")

    }

};

const initialState = {
    questions: [],

    // loading, error, finished, ready, active
    status: 'loading'
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

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

    }, []);

    console.log(state);



    return (
        <section className="app">
            <Header />
            <Main>
                <p>1/15</p>
                <p>Question</p>
            </Main>
        </section>
    );
};