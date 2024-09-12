# React Quizz App

## Theory

### useReducer Hook

A React hook that is used to manage global states in large scale application. It takes a *callback* function (known as reducer function) and *initial state* as arguments, and returns a *state* variable and a *dispatch* function. We can manage and update state in the reducer function to make the hook useful. The returned state can be used in the UI based on the dispatch action.

```js
const [state, dispatch] = useReducer(reducerFn, initialState);


// invoke dispatch function to update the state
dispatch(2);
// use action object to specify more update info.
dispatch({type: "increment", payload: 2})


// then write update logic in reducer function
function reducer(state, action) {
    // action contains the argument passed into the dispatch function.
    return state + action // suppose initialstate = 0, then 0 + 2 = 2 is the new state;
}

```
