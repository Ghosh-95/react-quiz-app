export function reducer(state, action) {
    switch (action.type) {
        case "questionDataReceived":
            return {
                ...state,
                questions: action.payload,
                quizStatus: "ready"
            };
        case "failedToLoadData":
            return {
                ...state,
                quizStatus: "error"
            };
        case "startQuiz":
            return {
                ...state,
                quizStatus: "active"
            };
        case "selectAnswer":
            const currentQuestion = state.questions.at(state.questionIndex);

            return {
                ...state,
                selectedAnswer: action.payload,
                points: currentQuestion.correctOption === action.payload ? state.points + currentQuestion.points : state.points,
            };
        case "nextQuestion":
            return {
                ...state,
                questionIndex: state.questionIndex + 1,
                selectedAnswer: null,
            };
        case "finishQuiz":
            return {
                ...state,
                selectedAnswer: null,
                quizStatus: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore,
            }
        default:
            throw new Error("unknown error occured!!")

    }

};

export const initialState = {
    questions: [],

    // loading, error, finished, ready, active
    quizStatus: 'loading',

    questionIndex: 0,
    selectedAnswer: null,
    points: 0,
    highscore: 0,
};