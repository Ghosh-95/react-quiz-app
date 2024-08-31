export function reducer(state, action) {
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

export const initialState = {
    questions: [],

    // loading, error, finished, ready, active
    status: 'loading'
};